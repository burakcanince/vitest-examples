import { PositiveOrNegative } from './PositiveOrNegative';
import { expect, describe, it } from 'vitest';

describe('PositiveOrNegative', () => {
    it('returns positive for positive numbers', () => {
        expect(PositiveOrNegative({ number: 1 })).toBe('positive');
    });

    it('returns negative for negative numbers', () => {
        expect(PositiveOrNegative({ number: -1 })).toBe('negative');
    });

    it('returns zero for zero', () => {
        expect(PositiveOrNegative({ number: 0 })).toBe('zero');
    });
});
