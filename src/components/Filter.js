import { useEffect, useState } from "react";
import { useCountry } from "../context/CountryContext";

function Filter() {
  const [region, setRegion] = useState("");

  const { countryFilterRegion } = useCountry();
  useEffect(() => {
    countryFilterRegion(region);
  }, [region]);

  return (
    <select
      className="filter"
      value={region}
      onChange={(e) => setRegion(e.target.value)}
    >
      <option disabled value={""}>
        Choose Region
      </option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}

export default Filter;
