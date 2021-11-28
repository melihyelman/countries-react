import React from "react";

function Country({ capital, name, population, region, flag }) {
  return (
    <a className="countryCard" href={`/${name}`}>
      <img src={flag} alt="country" />
      <div className="countryDetail">
        <h3>{name}</h3>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital}
        </p>
      </div>
    </a>
  );
}

export default Country;
