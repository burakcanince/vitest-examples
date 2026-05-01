type ShippingCostProps = {
    weight: number;
    coupon?: string;
}

export function ShippingCost({ weight, coupon }: ShippingCostProps) {
    if (weight <= 0) return 'Invalid weight';
    if (coupon === 'FREESHIPPING') return 0;
    if (weight <= 1) return 3.99;
    if (weight <= 5) return 4.99;
    if (weight <= 10) return 5.99;
    return 10.99;
}
