import { ShippingCost } from './ShippingCost';
import { expect, describe, it } from 'vitest';

describe('ShippingCost', () => {
    it('returns invalid weight for negative weight', () => {
        expect(ShippingCost({ weight: -1, coupon: 'FREE_SHIPPING' })).toBe('Invalid weight');
    });

    it('returns 0 for free shipping', () => {
        expect(ShippingCost({ weight: 1, coupon: 'FREE_SHIPPING' })).toBe(3.99);
        expect(ShippingCost({ weight: 1, coupon: 'FREESHIPPING' })).toBe(0);
    });

    it('charges correct prices for weight', () => {
        expect(ShippingCost({ weight: 1, coupon: 'FREE_SHIPPING' })).toBe(3.99);
        expect(ShippingCost({ weight: 5, coupon: 'FREE_SHIPPING' })).toBe(4.99);
        expect(ShippingCost({ weight: 10, coupon: 'FREE_SHIPPING' })).toBe(5.99);
        expect(ShippingCost({ weight: 11, coupon: 'FREE_SHIPPING' })).toBe(10.99);
    });

    it.each([
        { weight: 1, price: 3.99 },
        { weight: 5, price: 4.99 },
        { weight: 10, price: 5.99 },
        { weight: 11, price: 10.99 },
    ])('charges $price for weight $weight', ({ weight, price }: { weight: number, price: number }) => {
        expect(ShippingCost({ weight, coupon: 'FREE_SHIPPING' })).toBe(price);
    });
});
