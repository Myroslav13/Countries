import { useState } from "react"
import UpperComponent from "./Components/UpperComponent";
import CountryList from "./Components/CountryList";
import SearchComponent from "./Components/SearchComponent";

function App() {
  const [mode, setMode] = useState(true)
  const [filter, setFilter] = useState(0)
  const [filterSearch, setFilterSearch] = useState("")
  
  return (
    <div>
      <UpperComponent mode={mode} setMode={setMode}></UpperComponent>
      <SearchComponent mode={mode} filter={filter} setFilter={setFilter} setFilterSearch={setFilterSearch}></SearchComponent>
      <CountryList mode={mode} filter={filter} filterSearch={filterSearch}></CountryList>
    </div>
  )
}

export default App;
