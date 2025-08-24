import { useEffect, useState } from "react"
import type { Country } from "../interfaces"

interface Props {
    mode: boolean;
}

function CountryList({mode}: Props) {

    const [countriesData, setCountriesData] = useState<Country[]>([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,cca3")
        .then(response => response.json())
        .then(data => setCountriesData(data))
    })

    // <div>
    //         {/* {
    //         countriesData.map((el, index) => {
    //             return (
    //             <div key={index}>
    //                 <h1>{el.name.common}</h1>
    //             </div>
    //             )
    //         })
    //         } */}
    //     </div>
    
    return (
        <div className="container text-center" style={{paddingTop: "70px"}}>
            <div className="row align-items-start">
                {countriesData.map((el, index) => {
                    return(
                        <div className="col-3" key={index}>
                            <div className="card" style={{width: "18rem"}}>
                                <img src={el.flags.svg} className="card-img-top" alt="..." height={200}></img>
                                <div className="card-body">
                                    <h5 className="card-title">{el.name.common}</h5>
                                    <p className="card-text">Population: {el.population}</p>
                                    <p className="card-text">Region: {el.cca3}</p>
                                    <p className="card-text">Capital: {el.cca3}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CountryList
