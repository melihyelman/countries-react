import axios from "axios";
import { useEffect } from "react";
import Country from "../components/Country";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Input from "../components/Input";
import { useCountry } from "../context/CountryContext";

function Home() {
  const { countries, setCountries } = useCountry();
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <div className="container-fuild">
      <Header />
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "25px",
            padding: "0 20px",
          }}
        >
          <Input />
          <Filter />
        </div>
        <div className="countryContainer">
          {countries &&
            countries.map((country, i) => (
              <Country
                key={i}
                flag={country.flags.png}
                population={country.population}
                region={country.region}
                capital={country.capital}
                name={country.name.common}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
