import Header from "./components/Header";
import Definition from "./components/Definition";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const updateValue = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="px-8 pt-8">
      <Header updateSearchTerm={updateValue} />
      <Definition term={searchTerm} />
    </div>
  );
}

export default App;
