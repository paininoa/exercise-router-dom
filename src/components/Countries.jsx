import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default ({ language }) => {



    const [countries, setCountries] = useState([]);

    const fetchCountries = async () => {
        const response = await fetch('https://restcountries.com/v3.1/all')
        const obj = await response.json()
        setCountries(obj)
        console.log(obj)
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    return (<div className="cards-wrapper">

        {countries.map((country, i) => {
            return (
                <Link to={`/countries/${country.cca2}`} key={`country${i}`} className="card">
                    <h3>{language === 'en' ? country.name.common : country.translations.ita.common}</h3>
                    <figure>
                        <img src={country.flags.svg} alt={language === 'en' ? country.name.common : country.translations.ita.common} />
                    </figure>
                </Link>
            )

        })}

    </div>)

};