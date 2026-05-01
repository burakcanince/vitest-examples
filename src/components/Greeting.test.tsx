import { Greeting } from './Greeting';
import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Greeting', () => {
    it('renders a default greeting', () => {
        render(<Greeting />);
        expect(screen.getByText('Hello, World')).toBeInTheDocument();
    });

    it('renders a greeting with a name', () => {
        render(<Greeting name="John" />);
        expect(screen.getByText('Hello, John')).toBeInTheDocument();
    });
});
