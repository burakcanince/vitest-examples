import { Counter } from './Counter';
import { expect, describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Counter', () => {
  it('renders a counter', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('increments the counter', () => {
    render(<Counter />);

    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
});
