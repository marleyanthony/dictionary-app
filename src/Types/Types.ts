export type Data = {
  word: string;
  phonetic: string;
  meanings: [
    {
      partOfSpeech: string;
      definitions: [{ definition: string }];
      synonyms: string[];
      antonyms: string[];
    },
    {
      partOfSpeech: string;
      definitions: [{ definition: string }];
      synonyms: string[];
      antonyms: string[];
    }
  ];
};
