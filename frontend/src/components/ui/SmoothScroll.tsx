import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Extend Window interface for Lenis global access
declare global {
  interface Window {
    lenisInstance?: Lenis | null;
  }
}

gsap.registerPlugin(ScrollTrigger);

export const SmoothScroll = () => {
  useEffect(() => {
    // Premium Lenis optimization
    const lenis = new Lenis({
      duration: 1.5, // Slightly longer duration for "weight"
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for smooth stop
      lerp: 0.05, // Lower lerp for silkier motion
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
      syncTouch: false,
    });

    // Synchronize ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP ticker for the RAF loop
    const tickerUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0); // Better for high-refresh rate displays

    // Store lenis on window for global access
    window.lenisInstance = lenis;

    // Handle anchor links smoothly with Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        // Skip if it's just a hash with no actual target on page
        if (anchor.hash === '#') return;
        
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element instanceof HTMLElement) {
          lenis.scrollTo(element, { offset: -80, duration: 2 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
      window.lenisInstance = null;
    };
  }, []);

  return null;
};
