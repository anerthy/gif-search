import { useCounter } from '../hooks/useCounter';

export const Counter = () => {
  const { count, handleAdd, handleSubtract, handleReset } = useCounter(5);

  return (
    <>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          fontSize: '2rem',
          gap: '1rem',
        }}
      >
        <h1> Counter: {count}</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={handleSubtract}>-</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleAdd}>+</button>
        </div>
      </div>
    </>
  );
};
