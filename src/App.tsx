import { useEffect, useState } from "react"
import UpperComponent from "./Components/UpperComponent"
import CountryList from "./Components/CountryList"
import SearchComponent from "./Components/SearchComponent"
import type { Country } from "./interfaces"

function App() {
  const [mode, setMode] = useState(true)
  const [filter, setFilter] = useState(0)
  const [filterSearch, setFilterSearch] = useState("")
  const [oneCountryDisplay, setOneCountryDisplay] = useState<Country | null>(null)
  const [width, setWidth] = useState(window.innerWidth)
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
  })
  
  return (
    <div className={`div-app ${mode === true ? "dark-mode" : ""}`}>
      <UpperComponent mode={mode} setMode={setMode}></UpperComponent>
      <SearchComponent width={width} mode={mode} setFilter={setFilter} filterSearch={filterSearch} setFilterSearch={setFilterSearch} oneCountryDisplay={oneCountryDisplay} setOneCountryDisplay={setOneCountryDisplay}></SearchComponent>
      <CountryList width={width} mode={mode} filter={filter} filterSearch={filterSearch} oneCountryDisplay={oneCountryDisplay} setOneCountryDisplay={setOneCountryDisplay}></CountryList>
    </div>
  )
}

export default App;
