import { Link } from "react-router-dom";

import { useCountry } from "../context/CountryContext";

function CountrySingle() {
  let { countries, countryBorderFilter } = useCountry();
  countries = countries[0];
  const handleBorderClick = (border) => {
    countryBorderFilter(border);
  };
  return (
    <div className="countrySingle">
      <div>
        <img src={countries.flags.png} alt="country" />
      </div>
      <div className="countrySingleContainer">
        <div className="countrySingleInfo">
          <h3>{countries.name.common}</h3>
          <div>
            <p>
              <span>Native Name:</span>{" "}
              {Object.values(countries.name.nativeName)[0].common}
            </p>
            <p>
              <span>Population:</span> {countries.population}
            </p>
            <p>
              <span>Region:</span> {countries.region}
            </p>
            <p>
              <span>Sub Region:</span> {countries.subregion}
            </p>
            <p>
              <span>Capital:</span> {countries.capital}
            </p>
            <p>
              <span>Currencies :</span>{" "}
              {Object.values(countries.currencies).map(
                (currency) => currency.name + ", "
              )}
            </p>
            <p>
              <span>Languages :</span>{" "}
              {Object.values(countries.languages).map((e) => e + ", ")}
            </p>
          </div>
        </div>
        <div className="countryBorder">
          <p>Border Countries:</p>
          {countries?.borders?.map((border) => (
            <Link to={`/${border}`}>
              <span key={border} onClick={() => handleBorderClick(border)}>
                {border}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CountrySingle;
