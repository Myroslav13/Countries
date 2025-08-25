import { useEffect, useState } from "react"
import type { Country } from "../interfaces"

interface Props {
    mode: boolean;
    filter: number;
    filterSearch: string;
}

function CountryList({mode, filter, filterSearch}: Props) {
    const [countriesData, setCountriesData] = useState<Country[]>([])
    const filterLink = ["", "Africa", "Americas", "Asia", "Europe", "Oceania"]

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population")
        .then(response => response.json())
        .then(data => setCountriesData(data))
    })
    
    return (
        <div className="ps-5" style={{paddingTop: "70px"}}>
            <div className="row align-items-start justify-content-start">
                {countriesData.map((el, index) => {
                    if ((filterLink[filter] === "" || filterLink[filter] === el.region) && (el.name.common.toLowerCase().includes(filterSearch.toLowerCase()))) {

                        return(
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5" key={index}>
                                <div className="card border-0" style={{width: "19rem"}}>
                                    <img src={el.flags.svg} className="img-fluid flag-img" alt={el.name.common} />

                                    <div className="card-body px-4 pb-5 pt-4">
                                        <h5 className="card-title fw-bold">{el.name.common}</h5>
                                        <p className="card-text m-0"><b>Population:</b> {el.population.toLocaleString('en-US')}</p>
                                        <p className="card-text m-0"><b>Region:</b> {el.region}</p>
                                        <p className="card-text m-0"><b>Capital:</b> {el.capital}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }})
                }
            </div>
        </div>
    )
}

export default CountryList
