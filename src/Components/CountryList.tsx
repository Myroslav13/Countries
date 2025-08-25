import { useEffect, useState } from "react"
import type { Country } from "../interfaces"

interface Props {
    mode: boolean;
    filter: number;
    filterSearch: string;
    oneCountryDisplay: Country|null;
    setOneCountryDisplay: React.Dispatch<React.SetStateAction<Country|null>>;
}

function CountryList({mode, filter, filterSearch, oneCountryDisplay, setOneCountryDisplay}: Props) {
    const [countriesData, setCountriesData] = useState<Country[]>([])
    const filterLink = ["", "Africa", "Americas", "Asia", "Europe", "Oceania"]

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region,subregion,population,tld,currencies,cca3,borders")
        .then(response => response.json())
        .then(data => setCountriesData(data))
    })
    
    return (
        <div className="ps-5" style={{paddingTop: "70px"}}>
            {oneCountryDisplay === null?
                <div className="row align-items-start justify-content-start">
                    {countriesData.map((el, index) => {
                        if ((filterLink[filter] === "" || filterLink[filter] === el.region) && (el.name.common.toLowerCase().includes(filterSearch.toLowerCase()))) {

                            return(
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5" key={index}>
                                    <div className="card border-0" style={{width: "19rem"}} onClick={() => setOneCountryDisplay(el)}>
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
                        }
                    })}
                </div>
                :
                <div className="row align-items-center">
                    <div className="col-6">
                        <img src={oneCountryDisplay?.flags.svg} className="img-fluid border" width={600}></img>
                    </div>
                    <div className="col-6 pe-5">
                        <h1 className="fs-3 fw-bold">{oneCountryDisplay.name.common}</h1>
                        
                        <div className="d-flex pt-4" style={{gap: "130px"}}>
                            <div>
                                <p><b>Native Name:</b> {Object.values(oneCountryDisplay.name.nativeName || {})[0]?.official}</p>
                                <p><b>Population:</b> {oneCountryDisplay.population.toLocaleString('en-US')}</p>
                                <p><b>Region:</b> {oneCountryDisplay.region}</p>
                                <p><b>Sub Region:</b> {oneCountryDisplay.subregion}</p>
                                <p><b>Capital:</b> {oneCountryDisplay.capital}</p>
                            </div>
                            
                            <div>
                                <p><b>Native Name:</b> {Object.values(oneCountryDisplay.name.nativeName || {})[0]?.common}</p>
                                <p><b>Currencies:</b> {oneCountryDisplay.currencies ? Object.values(oneCountryDisplay.currencies).map(c => c.name).join(", ") : "-"}</p>
                                <p><b>Languages:</b> {oneCountryDisplay.languages ? Object.values(oneCountryDisplay.languages).join(", ") : "-"}</p>
                                <p><b>Top Level Domain:</b> {oneCountryDisplay.tld?.join(", ")}</p>
                            </div>
                        </div>

                        <div className="d-flex pt-5">
                            <p className="me-3"><b>Border Countries:</b></p>
                            {oneCountryDisplay.borders?.map((el, index) => {
                                const countryBorder = countriesData.find(c => c.cca3 === el)
                                return (
                                    <p className="border rounded-1 me-2 text-center" key={index} style={{width: "100px"}}>{countryBorder?.name.common}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CountryList
