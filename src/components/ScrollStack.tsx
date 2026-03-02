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
  const rafIdRef = useRef<number | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  // Cache of the STATIC offset of each card
  const cardOffsetsRef = useRef<number[]>([]);
  const lastTransformsRef = useRef(
    new Map<number, { scale: number; rotation: number; blur: number }>()
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

    // Temporarily disable sticky to get the true document position
    cards.forEach((c) => {
      c.style.position = 'static';
      c.style.transform = 'none';
      c.style.marginTop = '0'; 
    });

    if (useWindowScroll) {
      const scrollY = window.scrollY;
      cardOffsetsRef.current = cards.map((c) => {
        const rect = c.getBoundingClientRect();
        return Math.round(rect.top + scrollY);
      });
    } else {
      cardOffsetsRef.current = cards.map((c) => c.offsetTop);
    }

    // Re-apply sticky and other styles
    cards.forEach((card, i) => {
      card.style.position = 'sticky';
      card.style.top = `calc(${stackPosition} + ${i * itemStackDistance}px)`;
    });
    
    // Force transform update
    needsUpdateRef.current = true;
  }, [useWindowScroll, stackPosition, itemStackDistance]);

  /* ── The core transform update (runs inside rAF only) ── */
  const applyTransforms = useCallback(() => {
    const cards = cardsRef.current;
    const offsets = cardOffsetsRef.current;
    if (!cards.length || !offsets.length) return;

    const scrollTop = useWindowScroll ? window.scrollY : scrollerRef.current!.scrollTop;
    const containerH = useWindowScroll ? window.innerHeight : scrollerRef.current!.clientHeight;

    const stackPosPx = parsePct(stackPosition, containerH);
    const scaleEndPx = parsePct(scaleEndPosition, containerH);

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      if (!card) continue;

      const cardTop = offsets[i];
      const triggerStart = cardTop - stackPosPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPx;

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

      // ── Use sub-pixel precision for smooth touch scroll ──
      const rounded = {
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur),
      };

      // Skip DOM write when nothing visually changed
      const last = lastTransformsRef.current.get(i);
      if (
        last &&
        last.scale === rounded.scale &&
        last.rotation === rounded.rotation &&
        last.blur === rounded.blur
      ) {
        continue;
      }

      card.style.transform = `scale(${rounded.scale}) ${rounded.rotation ? `rotate(${rounded.rotation}deg)` : ''}`.trim();

      card.style.filter = rounded.blur > 0 ? `blur(${rounded.blur}px)` : 'none';

      lastTransformsRef.current.set(i, rounded);
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
      // Configuração inicial CSS Sticky
      card.style.position = 'sticky';
      card.style.top = `calc(${stackPosition} + ${i * itemStackDistance}px)`;
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
    // On mobile, height changes as URL bar hides/shows. We only care about width changes (orientation) to avoid jumps
    let resizeTimer: ReturnType<typeof setTimeout>;
    let lastWidth = window.innerWidth;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth !== lastWidth) {
          lastWidth = window.innerWidth;
          measureOffsets();
          needsUpdateRef.current = true;
        }
      }, 150);
    };
    window.addEventListener('resize', onResize);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      scrollTarget.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
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
