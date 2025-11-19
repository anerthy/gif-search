import { useState } from 'react';

export const useCounter = (initialValue: number = 10) => {
  const [count, setCount] = useState(initialValue);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count === 0) return;
    setCount((prevState) => prevState - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return {
    count,
    handleAdd,
    handleSubtract,
    handleReset,
  };
};
