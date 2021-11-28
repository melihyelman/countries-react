import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountrySingle from "../components/CountrySingle";
import Button from "../components/Button";
import Header from "../components/Header";
import { useCountry } from "../context/CountryContext";

function CountryDetail() {
  const { country } = useParams();
  const { countryFilterName } = useCountry();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(false);
      await countryFilterName(country);
      setLoading(true);
    }
    fetchData();
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
          }}
        >
          <Button
            onClick={(event) => {
              event.preventDefault();
              window.history.back();
            }}
          />
        </div>
        {loading ? (
          <CountrySingle />
        ) : (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 800,
              fontSize: "30px",
              color: "var(--text)",
            }}
          >
            Loading...
          </p>
        )}
      </div>
    </div>
  );
}

export default CountryDetail;
