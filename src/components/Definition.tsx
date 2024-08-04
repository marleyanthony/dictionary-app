import { useState, useEffect } from "react";
import { Data } from "../Types/Types";
import WelcomeMessage from "./WelcomeMessage";
import DefinitionComponent from "./DefinitionComponent";

const Definition = (term: any) => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    if (term.term !== "") {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${term.term}`)
        .then((response) => response.json())
        .then((data) => setData(data[0]))
        .catch((error) => console.error(error));
    }
  }, [term.term]);

  if (data === null || "") {
    return <WelcomeMessage />;
  }

  return (
    data && (
      <div>
        <h1 className="text-5xl my-6">{term.term}</h1>
        <p className="mb-3 text-purple-600">{data.phonetic}</p>
        {data.meanings.map((data, index) => {
          return (
            <DefinitionComponent info={data} key={index} heading={term.term} />
          );
        })}
      </div>
    )
  );
};

export default Definition;
