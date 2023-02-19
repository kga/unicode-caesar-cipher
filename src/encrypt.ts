export const encrypt = (shiftNum: number, question: string): string =>
  Array.from(question)
    .map((c) =>
      String.fromCodePoint((c.codePointAt(0) ?? c.charCodeAt(0)) + shiftNum)
    )
    .join("");
