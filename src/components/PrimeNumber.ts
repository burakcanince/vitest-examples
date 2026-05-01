type PrimeNumbersProps = {
    primeNumber: number;
}

export function isPrimeNumber({ primeNumber }: PrimeNumbersProps) {
    if (primeNumber <= 1) return false;
    for (let i = 2; i <= Math.sqrt(primeNumber); i++) {
        if (primeNumber % i === 0) return false;
    }
    return true;
}
