import { useCallback, useEffect, useRef, useState } from 'react';

export const useHandleDateTimeRangeChange = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const handleWrapperClick = useCallback(
    (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && !rootRef.current?.contains(target)) {
        setIsShown(false);
      }
    },
    [rootRef],
  );

  const handleEscapePress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsShown(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleWrapperClick);
    window.addEventListener('keydown', handleEscapePress);

    return () => {
      window.removeEventListener('click', handleWrapperClick);
      window.removeEventListener('keydown', handleEscapePress);
    };
  }, []);

  return {
    isShown,
    rootRef,
    setIsShown,
  };
};
