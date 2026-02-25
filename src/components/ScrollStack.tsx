import { useLayoutEffect, useRef, useCallback, type ReactNode } from 'react';
import './ScrollStack.css';

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem = ({ children, itemClassName = '' }: ScrollStackItemProps) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}: ScrollStackProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  // Cache of the STATIC offset of each card (measured once, not per-frame)
  const cardOffsetsRef = useRef<number[]>([]);
  const endOffsetRef = useRef(0);
  const lastTransformsRef = useRef(
    new Map<number, { translateY: number; scale: number; rotation: number; blur: number }>()
  );
  const needsUpdateRef = useRef(false);

  /* ── helpers ── */
  const clamp01 = (scrollTop: number, start: number, end: number) => {
    if (end <= start) return 0;
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  };

  const parsePct = (value: string | number, base: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * base;
    }
    return parseFloat(value as string);
  };

  /* ── Measure card offsets (only on mount / resize) ── */
  const measureOffsets = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    if (useWindowScroll) {
      const scrollY = window.scrollY;
      cardOffsetsRef.current = cards.map((c) => {
        const rect = c.getBoundingClientRect();
        return Math.round(rect.top + scrollY);
      });
      const endEl = document.querySelector('.scroll-stack-end') as HTMLElement | null;
      endOffsetRef.current = endEl
        ? Math.round(endEl.getBoundingClientRect().top + scrollY)
        : 0;
    } else {
      const scroller = scrollerRef.current!;
      cardOffsetsRef.current = cards.map((c) => c.offsetTop);
      const endEl = scroller.querySelector('.scroll-stack-end') as HTMLElement | null;
      endOffsetRef.current = endEl ? endEl.offsetTop : 0;
    }
  }, [useWindowScroll]);

  /* ── The core transform update (runs inside rAF only) ── */
  const applyTransforms = useCallback(() => {
    const cards = cardsRef.current;
    const offsets = cardOffsetsRef.current;
    if (!cards.length || !offsets.length) return;

    const scrollTop = useWindowScroll ? window.scrollY : scrollerRef.current!.scrollTop;
    const containerH = useWindowScroll ? window.innerHeight : scrollerRef.current!.clientHeight;

    const stackPosPx = parsePct(stackPosition, containerH);
    const scaleEndPx = parsePct(scaleEndPosition, containerH);
    const endTop = endOffsetRef.current;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      if (!card) continue;

      const cardTop = offsets[i];
      const triggerStart = cardTop - stackPosPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPx;
      const pinStart = triggerStart;
      const pinEnd = endTop - containerH / 2;

      // scale
      const scaleProg = clamp01(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProg * (1 - targetScale);

      // rotation
      const rotation = rotationAmount ? i * rotationAmount * scaleProg : 0;

      // blur (find which card is currently on top)
      let blur = 0;
      if (blurAmount) {
        let topIdx = 0;
        for (let j = 0; j < cards.length; j++) {
          const jStart = offsets[j] - stackPosPx - itemStackDistance * j;
          if (scrollTop >= jStart) topIdx = j;
        }
        if (i < topIdx) {
          blur = (topIdx - i) * blurAmount;
        }
      }

      // translateY
      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPosPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPosPx + itemStackDistance * i;
      }

      // ── Round aggressively to whole / half pixels to kill sub-pixel jitter ──
      const rounded = {
        translateY: Math.round(translateY),         // whole pixels only
        scale: Math.round(scale * 1000) / 1000,     // 3 decimals
        rotation: Math.round(rotation),              // whole degrees
        blur: Math.round(blur),                      // whole px
      };

      // Skip DOM write when nothing visually changed
      const last = lastTransformsRef.current.get(i);
      if (
        last &&
        last.translateY === rounded.translateY &&
        last.scale === rounded.scale &&
        last.rotation === rounded.rotation &&
        last.blur === rounded.blur
      ) {
        continue;
      }

      card.style.transform =
        `translate3d(0, ${rounded.translateY}px, 0) scale(${rounded.scale})` +
        (rounded.rotation ? ` rotate(${rounded.rotation}deg)` : '');

      card.style.filter = rounded.blur > 0 ? `blur(${rounded.blur}px)` : 'none';

      lastTransformsRef.current.set(i, rounded);

      // stack-complete callback
      if (i === cards.length - 1) {
        const inView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (inView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!inView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    }
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
  ]);

  /* ── rAF loop: only writes to DOM once per frame ── */
  const tick = useCallback(() => {
    if (needsUpdateRef.current) {
      needsUpdateRef.current = false;
      applyTransforms();
    }
    rafIdRef.current = requestAnimationFrame(tick);
  }, [applyTransforms]);

  /* ── Scroll handler: just sets a flag (cheapest possible) ── */
  const onScroll = useCallback(() => {
    needsUpdateRef.current = true;
  }, []);

  /* ── Setup ── */
  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Collect cards
    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card')
    ) as HTMLElement[];

    cardsRef.current = cards;

    // Initial inline styles
    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
    });

    // Measure once
    measureOffsets();

    // First paint
    applyTransforms();

    // Start rAF loop
    rafIdRef.current = requestAnimationFrame(tick);

    // Scroll listener (passive ⇒ no jank from preventDefault)
    const scrollTarget = useWindowScroll ? window : scroller;
    scrollTarget.addEventListener('scroll', onScroll, { passive: true });

    // Re-measure on resize (debounced)
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        measureOffsets();
        needsUpdateRef.current = true;
      }, 150);
    };
    window.addEventListener('resize', onResize);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      scrollTarget.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
      stackCompletedRef.current = false;
      cardsRef.current = [];
      cardOffsetsRef.current = [];
      lastTransformsRef.current.clear();
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    measureOffsets,
    applyTransforms,
    tick,
    onScroll,
  ]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        {/* Spacer so the last pin can release cleanly */}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
