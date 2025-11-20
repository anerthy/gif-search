import { describe, expect, test } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter Component', () => {
  test('should render the component', () => {
    render(<Counter />);

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      'Counter: 5'
    );

    expect(screen.getByRole('button', { name: '-' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
    expect(screen.getByRole('button', { name: '+' })).toBeDefined();
  });

  test('should increment the counter', () => {
    render(<Counter />);
    const addButton = screen.getByRole('button', { name: '+' });

    fireEvent.click(addButton);

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      'Counter: 6'
    );
  });

  test('should decrement the counter', () => {
    render(<Counter />);
    const subtractButton = screen.getByRole('button', { name: '-' });

    fireEvent.click(subtractButton);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      'Counter: 4'
    );
  });

  test('should reset the counter', () => {
    render(<Counter />);
    const resetButton = screen.getByRole('button', { name: 'Reset' });

    fireEvent.click(resetButton);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      'Counter: 0'
    );
  });
});
