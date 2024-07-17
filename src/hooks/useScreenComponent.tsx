import { useState, useEffect } from 'react';

const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>('undefined');

  useEffect(() => {
    function getScreenSize(): ScreenSize {
      if (window.innerWidth < 640) return 'xs';
      if (window.innerWidth < 768) return 'sm';
      if (window.innerWidth < 1024) return 'md';
      if (window.innerWidth < 1280) return 'lg';
      if (window.innerWidth < 1536) return 'xl';
      return '2xl';
    }

    function handleResize() {
      setScreenSize(getScreenSize());
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};