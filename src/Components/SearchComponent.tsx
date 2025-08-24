interface Props {
    mode: boolean;
    filter: number;
    setFilter: React.Dispatch<React.SetStateAction<number>>;
    setFilterSearch: React.Dispatch<React.SetStateAction<string>>;
}

function SearchComponent({mode, filter, setFilter, setFilterSearch}: Props) {
  
  return (
    <div className="d-flex justify-content-between align-items-center px-5" style={{paddingTop: "50px"}}>
        <div>
            <div className="input-wrapper">
                <i className="bi bi-search me-3"></i>
                <input placeholder="Search for a country..." onChange={(e) => setFilterSearch(e.target.value)}></input>
            </div>
        </div>

        <div className="dropdown">
            <a className="btn dropdown-toggle px-4" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filter by Region
            </a>

            <ul className="dropdown-menu">
                <li><a className="dropdown-item" onClick={() => setFilter(1)}>Africa</a></li>
                <li><a className="dropdown-item" onClick={() => setFilter(2)}>America</a></li>
                <li><a className="dropdown-item" onClick={() => setFilter(3)}>Asia</a></li>
                <li><a className="dropdown-item" onClick={() => setFilter(4)}>Europa</a></li>
                <li><a className="dropdown-item" onClick={() => setFilter(5)}>Oceania</a></li>
            </ul>
        </div>
    </div>
  )
}

export default SearchComponent
