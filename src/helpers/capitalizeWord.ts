export const capitalizeWord = (wordToCapitalize: string): string => {
  let firstLetter = wordToCapitalize.slice(0, 1);
  const remainderOfWord = wordToCapitalize.substring(1);

  firstLetter = firstLetter.toUpperCase();

  return (firstLetter += remainderOfWord);
};
