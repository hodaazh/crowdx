import { useEffect, useState } from 'react';

let userAgent = '';

const useMobile = (defaultSize = 1024) => {
  const deviceSize = defaultSize > 1024 ? 1024 : defaultSize;
  const [size, setSize] = useState<number>(0);

  const onResize = () => {
    if (window) {
      setSize(window.innerWidth);
    }
  };

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return size
    ? size <= deviceSize
    : userAgent.match(/Android/i) ||
        userAgent.match(/webOS/i) ||
        userAgent.match(/iPhone/i) ||
        userAgent.match(/iPad/i) ||
        userAgent.match(/iPod/i) ||
        userAgent.match(/BlackBerry/i) ||
        userAgent.match(/Windows Phone/i);
};

const setIsMobile = (agent: string) => {
  if (!agent) return;
  userAgent = agent;
};

export { setIsMobile, useMobile };
