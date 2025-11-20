import { describe, expect, test, vi } from 'vitest';
import { Counter } from './Counter';
import { fireEvent, render, screen } from '@testing-library/react';

const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
  useCounter: () => ({
    count: 20,
    handleAdd: handleAddMock,
    handleSubtract: handleSubtractMock,
    handleReset: handleResetMock,
  }),
}));

describe('Counter Component', () => {
  test('should render the component', () => {
    render(<Counter />);

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      'Counter: 20'
    );

    expect(screen.getByRole('button', { name: '-' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
    expect(screen.getByRole('button', { name: '+' })).toBeDefined();
  });

  test('should call handleAdd if button is clicked', () => {
    render(<Counter />);

    const addButton = screen.getByRole('button', { name: '+' });

    fireEvent.click(addButton);

    expect(handleAddMock).toHaveBeenCalled();
    expect(handleAddMock).toHaveBeenCalledTimes(1);
  });
});
