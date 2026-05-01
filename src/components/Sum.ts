type SumProps = {
  firstNumber: number;
  secondNumber: number;
};

export function Sum({ firstNumber, secondNumber }: SumProps) {
  return firstNumber + secondNumber;
}
