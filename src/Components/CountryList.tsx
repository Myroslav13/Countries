import { useEffect, useState } from "react"
import type { Country } from "../interfaces"

interface Props {
    mode: boolean;
    width: number;
    filter: number;
    filterSearch: string;
    oneCountryDisplay: Country|null;
    setOneCountryDisplay: React.Dispatch<React.SetStateAction<Country|null>>;
}

function CountryList({mode, width, filter, filterSearch, oneCountryDisplay, setOneCountryDisplay}: Props) {
    const [countriesData, setCountriesData] = useState<Country[]>([])
    const filterLink = ["", "Africa", "Americas", "Asia", "Europe", "Oceania"]

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region,subregion,population,currencies,tld,borders,languages")
        .then(response => response.json())
        .then(data => setCountriesData(data))
    }, []);

    return (
        <>
            {oneCountryDisplay === null? 
                <div className={`${width < 768 ? "container" : ""} pt-5 pt-lg-auto ps-5`} style={{paddingTop: "70px", minHeight: "565px"}}>
                    <div className="div-row row align-items-start justify-content-start" style={{height: "100%"}}>
                        {countriesData.map((el, index) => {
                            if ((filterLink[filter] === "" || filterLink[filter] === el.region) && (el.name.common.toLowerCase().includes(filterSearch.toLowerCase()))) {

                                return(
                                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5" key={index}>
                                        <div className={`card ${mode === true ? "dark-mode": ""} border-0`} onClick={() => setOneCountryDisplay(el)}>
                                            <img src={el.flags.svg} className="img-fluid flag-img" title={el.name.common} alt={el.name.common} />

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
                </div>
                :
                <div className="px-5 pt-5 pb-5 px-md-auto pb-md-auto pt-md-auto ps-5" style={{paddingTop: "70px", minHeight: "590px"}}>
                    <div className={`row align-items-center ${mode === true ? "text-white": ""}`}>
                        <div className="col-12 col-lg-6">
                            <img src={oneCountryDisplay?.flags.svg} className={`img-flag-detailed img-fluid border ${mode === true ? "border-black": ""}`} title={oneCountryDisplay?.name.common} alt={oneCountryDisplay?.name.common} width={600}></img>
                        </div>
                        <div className="col-12 col-lg-6 pe-0 pe-lg-5">
                            <h1 className="fs-3 fw-bold pt-4 pt-lg-0">{oneCountryDisplay.name.common}</h1>
                            
                            <div className="d-block d-sm-flex pt-4" style={{gap: "130px"}}>
                                <div>
                                    <p><b>Native Name:</b> {Object.values(oneCountryDisplay.name.nativeName || {})[0]?.official}</p>
                                    <p><b>Population:</b> {oneCountryDisplay.population.toLocaleString('en-US')}</p>
                                    <p><b>Region:</b> {oneCountryDisplay.region}</p>
                                    <p><b>Sub Region:</b> {oneCountryDisplay.subregion}</p>
                                    <p><b>Capital:</b> {oneCountryDisplay.capital}</p>
                                </div>
                                
                                <div className="pt-5 pt-sm-0">
                                    <p><b>Top Level Domain:</b> {oneCountryDisplay.tld?.join(", ")}</p>
                                    <p><b>Currencies:</b> {oneCountryDisplay.currencies ? Object.values(oneCountryDisplay.currencies).map(c => c.name).join(", ") : "-"}</p>
                                    <p><b>Languages:</b> {oneCountryDisplay.languages ? Object.values(oneCountryDisplay.languages).join(", ") : "-"}</p>
                                </div>
                            </div>

                            <div className="d-flex pt-5 flex-wrap">
                                <p className="me-3"><b>Border Countries:</b></p>
                                {oneCountryDisplay.borders?.map((el, index) => {
                                    // const countryBorder = countriesData.find(c => c.cca3 === el)
                                    return (
                                        <p className="border rounded-1 me-2 d-flex align-items-center justify-content-center" key={index} style={{width: "100px"}}>{el}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CountryList
