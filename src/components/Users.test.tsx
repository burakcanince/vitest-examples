import { Users } from './Users';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Users', () => {
  it('renders nothing before the user is loaded', () => {
    const { container } = render(<Users userId={1} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('renders a user', async () => {
    render(<Users userId={1} />);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
    });
  });
});
