import { useEffect, useState } from "react"
import UpperComponent from "./Components/UpperComponent";
import CountryList from "./Components/CountryList";
import SearchComponent from "./Components/SearchComponent";

function App() {
  const [mode, setMode] = useState(true)
  
  return (
    <div>
      <UpperComponent mode={mode} setMode={setMode}></UpperComponent>
      <CountryList></CountryList>
      <SearchComponent></SearchComponent>
    </div>
  )
}

export default App;
