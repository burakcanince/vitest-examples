type PositiveOrNegativeProps = {
    number: number;
}

export function PositiveOrNegative({ number }: PositiveOrNegativeProps) {
    if (number > 0) return 'positive'
    if (number === 0) return 'zero'
    return 'negative';
}
