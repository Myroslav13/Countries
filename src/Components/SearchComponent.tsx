import type { Country } from "../interfaces"

interface Props {
    mode: boolean;
    width: number;
    setFilter: React.Dispatch<React.SetStateAction<number>>;
    filterSearch: string;
    setFilterSearch: React.Dispatch<React.SetStateAction<string>>;
    oneCountryDisplay: Country|null;
    setOneCountryDisplay: React.Dispatch<React.SetStateAction<Country|null>>;
}

function SearchComponent({mode, width, setFilter, filterSearch, setFilterSearch, oneCountryDisplay, setOneCountryDisplay}: Props) {
    return (
        <div className="div-search px-5" style={{paddingTop: "50px"}}>
            {oneCountryDisplay === null ?
                <>
                    <div className={`input-wrapper ${mode === true ? "dark-mode": ""}`}>
                        <i className="bi bi-search me-3"></i>
                        <input placeholder="Search for a country..." onChange={(e) => setFilterSearch(e.target.value)} value={filterSearch}></input>
                    </div>

                    <div className="dropdown">
                        <a className={`btn ${mode === true ? "dark-mode": ""} dropdown-toggle px-4`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter by Region
                        </a>

                        <ul className={`dropdown-menu ${mode === true ? "dark-mode": ""}`}>
                            <li><a className="dropdown-item" onClick={() => setFilter(1)}>Africa</a></li>
                            <li><a className="dropdown-item" onClick={() => setFilter(2)}>Americas</a></li>
                            <li><a className="dropdown-item" onClick={() => setFilter(3)}>Asia</a></li>
                            <li><a className="dropdown-item" onClick={() => setFilter(4)}>Europe</a></li>
                            <li><a className="dropdown-item" onClick={() => setFilter(5)}>Oceania</a></li>
                            <li><a className="dropdown-item" onClick={() => setFilter(0)}>All</a></li>
                        </ul>
                    </div>
                </>
                :
                <button className={`btn-back ${width < 568 ? "px-4" : ""} ${mode === true ? "dark-mode": ""}`} onClick={() => setOneCountryDisplay(null)}><i className="bi bi-arrow-left me-2"></i>Back</button>
            }
        </div>
    )
}

export default SearchComponent
