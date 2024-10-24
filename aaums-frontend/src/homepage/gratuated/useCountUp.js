import { useState, useEffect } from 'react';

const useCountUp = (start, end, duration, trigger) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (trigger) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }, [trigger, start, end, duration]);

  return count;
};

export default useCountUp;