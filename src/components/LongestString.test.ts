import { describe, it, expect } from 'vitest';
import { LongestString } from './LongestString';

describe('LongestString', () => {
  it('returns secondString when secondString is longer than firstString', () => {
    const result = LongestString({ firstString: 'longer', secondString: 'longest' });
    expect(result).toBe('longest');
  });

  it('returns firstString when firstString is longer than secondString', () => {
    const result = LongestString({ firstString: 'longest', secondString: 'long' });
    expect(result).toBe('longest');
  });
});
