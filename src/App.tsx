import { useState } from "react"
import UpperComponent from "./Components/UpperComponent"
import CountryList from "./Components/CountryList"
import SearchComponent from "./Components/SearchComponent"
import type { Country } from "./interfaces"

function App() {
  const [mode, setMode] = useState(true)
  const [filter, setFilter] = useState(0)
  const [filterSearch, setFilterSearch] = useState("")
  const [oneCountryDisplay, setOneCountryDisplay] = useState<Country | null>(null)
  
  return (
    <div>
      <UpperComponent mode={mode} setMode={setMode}></UpperComponent>
      <SearchComponent mode={mode} filter={filter} setFilter={setFilter} filterSearch={filterSearch} setFilterSearch={setFilterSearch} oneCountryDisplay={oneCountryDisplay} setOneCountryDisplay={setOneCountryDisplay}></SearchComponent>
      <CountryList mode={mode} filter={filter} filterSearch={filterSearch} oneCountryDisplay={oneCountryDisplay} setOneCountryDisplay={setOneCountryDisplay}></CountryList>
    </div>
  )
}

export default App;
