import { Sum } from './Sum';
import { describe, it, expect } from 'vitest';

describe('Sum', () => {
  it('returns the sum of two numbers', () => {
    expect(Sum({ firstNumber: 1, secondNumber: 2 })).toBe(3);
  });
});
