import { createContext, useContext, useState } from "react";
import axios from "axios";

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  const countryFilterRegion = async (region) => {
    if (!region) return;

    const { data } = await axios.get(
      `https://restcountries.com/v3.1/region/${region}`
    );
    setCountries(data);
  };
  const countryFilterName = async (name) => {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`
    );
    setCountries(data);
  };
  const countryBorderFilter = async (border) => {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/alpha/${border}`
    );
    setCountries(data);
  };

  return (
    <CountryContext.Provider
      value={{
        countries,
        countryFilterName,
        countryFilterRegion,
        setCountries,
        countryBorderFilter,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => useContext(CountryContext);
