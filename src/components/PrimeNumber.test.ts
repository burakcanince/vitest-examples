import { isPrimeNumber } from './PrimeNumber';
import { expect, describe, it } from 'vitest';

describe('PrimeNumber', () => {
    it('returns true for prime numbers', () => {
        expect(isPrimeNumber({ primeNumber: 1 })).toBe(false);
        expect(isPrimeNumber({ primeNumber: 2 })).toBe(true);
        expect(isPrimeNumber({ primeNumber: 5 })).toBeTruthy();
    });

    it('returns false for non-prime numbers', () => {
        expect(isPrimeNumber({ primeNumber: 0 })).toBe(false);
        expect(isPrimeNumber({ primeNumber: 1 })).toBe(false);
        expect(isPrimeNumber({ primeNumber: 4 })).toBeFalsy();
    });

    it('matches results in an array using toEqual', () => {
        const numbers = [2, 3, 4, 5];
        const results = numbers.map((number) => isPrimeNumber({ primeNumber: number }));
        expect(results).toEqual([true, true, false, true]);
    });

    it('detects prime numbers in an array', () => {
        const numbers = [2, 3, 4, 5];
        const primes = numbers.filter((number) => isPrimeNumber({ primeNumber: number }));
        expect(primes).toContain(2);
    });

    it('has correct type for results', () => {
        expect(isPrimeNumber({ primeNumber: 2 })).toBeTypeOf('boolean');
    });
});
