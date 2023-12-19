import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default ({ language }) => {

    const lang = {
        "en": { capitals: "Capitals", population: "Population", region: "Region" },
        "it": { capitals: "Capitali", population: "Popolazione", region: "Regione" }
    }

    const { code } = useParams();
    const [country, setCountry] = useState([]);

    console.log(country);


    const fetchCountry = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        const obj = await response.json()
        setCountry(obj)
    }

    useEffect(() => {
        fetchCountry()
    }, []);



    return (<>
        {
            country.map((country, i) => {
                return (
                    <div key={`countrypage${i}`} className="template-section">

                        <figure className="country-img">
                            <img src={country.flags.svg} alt="" />
                        </figure>
                        <div className="country-description">
                            <h2>{language === 'en' ? country.name.common : country.translations.ita.common}</h2>
                            {country.capitals && <ul><strong>{lang[language].capitals}:</strong>{country.capital.map((c, i) => (
                                <li key={`capital${i}`}>{c}</li>
                            ))}</ul>}
                            <p><strong>{lang[language].population}:</strong>{country.population}</p>
                            <p><strong>{lang[language].region}:</strong>{country.region}</p>
                        </div>


                    </div>
                )
            })
        }
    </>)
}