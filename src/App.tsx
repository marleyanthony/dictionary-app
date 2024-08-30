import Header from "./components/Header";
import Definition from "./components/Definition";
import { useState } from "react";
import PhotoComponent from "./components/PhotoComponent";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const updateValue = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="px-10 pt-8">
      <Header updateSearchTerm={updateValue} />
      <Definition term={searchTerm} />
      {searchTerm && (
        <>
          <h1 className="text-3xl my-6">Photo</h1>
          <PhotoComponent term={searchTerm} />
        </>
      )}
    </div>
  );
}

export default App;
