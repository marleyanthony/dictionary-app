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

export type Photo = {
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
};
