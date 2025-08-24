import { useEffect, useState } from "react"
import type { Country } from "../interfaces"

function CountryList() {

    const [countriesData, setCountriesData] = useState<Country[]>([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,cca3")
        .then(response => response.json())
        .then(data => setCountriesData(data))
    })
    
    return (
        <div>
            {/* {
            countriesData.map((el, index) => {
                return (
                <div key={index}>
                    <h1>{el.name.common}</h1>
                </div>
                )
            })
            } */}
        </div>
    )
}

export default CountryList
