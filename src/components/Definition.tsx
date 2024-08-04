import { useState, useEffect } from "react";
import { Data } from "../Types/Types";
import WelcomeMessage from "./WelcomeMessage";
import DefinitionComponent from "./DefinitionComponent";

const Definition = (term: any) => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${term.term}`)
      .then((response) => response.json())
      .then((data) => setData(data[0]))
      .catch((error) => console.error(error));
  }, [term.term]);

  if (data === null || "") {
    return <WelcomeMessage />;
  }

  return (
    data && (
      <div>
        {data.meanings.map((data, index) => {
          return (
            <>
              <DefinitionComponent info={data} key={index} />
            </>
          );
        })}
      </div>
    )
  );
};

export default Definition;
