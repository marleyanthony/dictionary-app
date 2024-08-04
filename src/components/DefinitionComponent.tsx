const DefinitionComponent = (data: any): React.ReactElement => {
  return (
    <>
      <div className="flex items-center  mb-3">
        <p className="font-bold italic">{data.info.partOfSpeech}</p>
        <div className="border w-full border-solid border-black mt-1 ml-3" />
      </div>
      <p className="font-thin mb-2">Meaning</p>
      <ul>
        {data.info.definitions.map((definition: any, index: number) => {
          return (
            <li className="mb-2" key={index}>
              {definition.definition}
            </li>
          );
        })}
      </ul>
      <div className="flex mb-2">
        <p>Synonyms:</p>
        {data.info.synonyms.length > 0 ? (
          <div className="flex flex-wrap">
            {data.info.synonyms.map((synonym: any, index: number) => {
              return (
                <p key={index} className="px-1">
                  {synonym}
                </p>
              );
            })}
          </div>
        ) : (
          <p className="px-1">None</p>
        )}
      </div>
      <div className="flex mb-2">
        <p>Antonyms:</p>
        {data.info.antonyms.length > 0 ? (
          <div className="flex flex-wrap">
            {data.info.antonyms.map((antonyms: any, index: number) => {
              return (
                <p key={index} className="px-1">
                  {antonyms}
                </p>
              );
            })}
          </div>
        ) : (
          <p className="px-1">None</p>
        )}
      </div>
    </>
  );
};

export default DefinitionComponent;
