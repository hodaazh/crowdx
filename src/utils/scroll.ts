import Lenis from '@studio-freight/lenis';

class Scroll {
  lenis: any = null;

  init() {
    this.lenis = new Lenis({
      duration: 1.3,
      easing: (x: any) => Math.min(1, 1.001 - 2 ** (-10 * x)), // https://www.desmos.com/calculator/brs54l4xou
      smooth: true,
      direction: 'vertical',
    });
    const raf = (t: any) => {
      this.lenis?.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  lockScroll = () => {
    this.lenis?.stop();
    document.body.style.overflowY = 'hidden';
    document.documentElement.style.overflowY = 'hidden';
    if (window.innerWidth > 1024) document.body.style.paddingRight = '6px';
  };

  enableScroll = () => {
    this.lenis?.start();
    document.body.style.overflowY = 'auto';
    document.documentElement.style.overflowY = 'auto';
    if (window.innerWidth > 1024) document.body.style.paddingRight = '0px';
  };

  scrollTo(id: string) {
    this.lenis?.scrollTo(document.getElementById(id));
  }
}

const scroll = new Scroll();

export { scroll };
