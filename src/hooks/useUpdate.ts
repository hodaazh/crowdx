import type { DependencyList } from 'react';
import { useEffect, useRef } from 'react';

const useUpdate = (callback: () => void, deps?: DependencyList) => {
  const hasMount = useRef(false);

  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
  }, deps);
};

export { useUpdate };
