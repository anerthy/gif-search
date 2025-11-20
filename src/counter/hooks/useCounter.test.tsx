import { describe, expect, test } from 'vitest';
import { useCounter } from './useCounter';
import { renderHook, act } from '@testing-library/react';

describe('useCounter', () => {
  // beforeEach(() => {
  //   // No specific setup required before each test
  // });

  test('should initialize with default value of 10', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(10);
  });

  test('should initialize with value 5', () => {
    const initialValue = 5;
    const { result } = renderHook(() => useCounter(initialValue));
    expect(result.current.count).toBe(initialValue);
  });

  test('should increment counter when handleAdd is called', () => {
    const { result } = renderHook(() => useCounter(1));

    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.count).toBe(2);
  });

  test('should decrement counter when handleSubtract is called', () => {
    const { result } = renderHook(() => useCounter(2));

    act(() => {
      result.current.handleSubtract();
    });
    expect(result.current.count).toBe(1);
  });

  test('should not decrement counter when handleSubtract is called and count is 1', () => {
    const { result } = renderHook(() => useCounter(1));

    act(() => {
      result.current.handleSubtract();
    });

    expect(result.current.count).toBe(0);
  });

  test('should reset counter to 0 when handleReset is called', () => {
    const { result } = renderHook(() => useCounter(5));

    act(() => {
      result.current.handleReset();
    });
    expect(result.current.count).toBe(0);
  });
});
