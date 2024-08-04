import { useState, useEffect } from "react";
import { Data } from "../Types/Types";

const Definition = (term: any) => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${term.term}`)
      .then((response) => response.json())
      .then((data) => setData(data[0]))
      .catch((error) => console.error(error));
  }, [term.term]);

  if (data === null || "") {
    return <h1>Enter a term to search!</h1>;
  }

  return (
    data && (
      <div>
        <h1 className="text-5xl my-3">{data.word}</h1>
        <p className="mb-3">{data.phonetic}</p>
        <div className="flex items-center  mb-3">
          <p className="font-bold italic">{data.meanings[0].partOfSpeech}</p>
          <div className="border w-full border-solid border-black mt-1 ml-3" />
        </div>
        <p className="font-thin mb-2">Meaning</p>
        <ul>
          {data.meanings[0].definitions.map((definition, index) => {
            return (
              <li className="mb-2" key={index}>
                {definition.definition}
              </li>
            );
          })}
        </ul>
        <div className="flex mb-2">
          <p>Synonyms:</p>
          {data.meanings[0].synonyms.length > 0 ? (
            <div className="flex flex-wrap">
              {data.meanings[0].synonyms.map((synonym, index) => {
                return (
                  <p key={index} className="px-1">
                    {synonym}
                  </p>
                );
              })}
            </div>
          ) : (
            <p>None</p>
          )}
        </div>
        <div className="flex mb-2">
          <p>Antonyms:</p>
          {data.meanings[0].antonyms.length > 0 ? (
            <div className="flex flex-wrap">
              {data.meanings[0].antonyms.map((antonyms, index) => {
                return (
                  <p key={index} className="px-1">
                    {antonyms}
                  </p>
                );
              })}
            </div>
          ) : (
            <p>None</p>
          )}
        </div>

        {data.meanings.length > 1 && (
          <>
            <div className="flex items-center  mb-3">
              <p className="font-bold italic">
                {data.meanings[1].partOfSpeech}
              </p>
              <div className="border w-full border-solid border-black mt-1 ml-3" />
            </div>
            <p className="font-thin mb-2">Meaning</p>
            <ul>
              {data.meanings[1].definitions.map((definition, index) => {
                return <li key={index}>{definition.definition}</li>;
              })}
            </ul>
            <div className="flex">
              <p className="mr-1">Synonyms:</p>
              {data.meanings[1].synonyms.length > 0 ? (
                <div className="flex flex-wrap">
                  {data.meanings[1].synonyms.map((synonym, index) => {
                    return (
                      <p key={index} className="px-1 mb-2">
                        {synonym}
                      </p>
                    );
                  })}
                </div>
              ) : (
                <p>None</p>
              )}
            </div>
            <div className="flex">
              <p className="mr-1">Antonyms:</p>
              {data.meanings[1].antonyms.length > 0 ? (
                <div className="flex flex-wrap">
                  {data.meanings[1].antonyms.map((antonyms, index) => {
                    return (
                      <p key={index} className="px-1">
                        {antonyms}
                      </p>
                    );
                  })}
                </div>
              ) : (
                <p>None</p>
              )}
            </div>
          </>
        )}
      </div>
    )
  );
};

export default Definition;
