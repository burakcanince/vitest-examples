type LongestStringProps = {
  firstString: string;
  secondString: string;
};

export function LongestString({ firstString, secondString }: LongestStringProps) {
  return firstString.length > secondString.length ? firstString : secondString;
};
