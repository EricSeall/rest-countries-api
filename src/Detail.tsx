import React, { useEffect, useState } from "react";
import BorderCountry from "./BorderCountry";

interface Props {
  setDetail: Function;
  country: any;
}
/*
 *
 * TODO: Fix borderContries only containing one country
 *
 */
export default function Detail(props: Props) {
  const [borderCountries, setBorderCountries] = useState<any[]>([]);

  useEffect(() => {
    if (props.country.borders) {
      let list = [];
      props.country.borders.map((borderCountry: string) => {
        const fetchBorderCountries = async () => {
          const response = await fetch(
            `https://restcountries.com/v3.1/alpha/${borderCountry}`
          );
          let data;
          if (response.ok) {
            data = await response.json();
          }
          list = [...list, data[0]];
          console.log(borderCountries);
        };

        fetchBorderCountries().then(() => setBorderCountries(list));
      });
    }
  }, []);

  return (
    <div className="main-detail">
      <button className="back-button" onClick={() => props.setDetail(false)}>
        <img
          className="back-arrow"
          src="./src/assets/icons/circle-left-solid.svg"
          alt="back arrow"
        />
        <p>Back</p>
      </button>
      <img className="country-flag" src={props.country.flags.svg} />
      <div className="country-info">
        <h2>{props.country.name.official}</h2>
        <p>
          <strong>Native Name: </strong>{" "}
          {Object.values(props.country.name.nativeName)[0].official}
        </p>
        <p>
          <strong>Population: </strong>{" "}
          {props.country.population.toLocaleString()}
        </p>
        <p>
          <strong>Region: </strong> {props.country.region}
        </p>
        <p>
          <strong>Sub Region: </strong> {props.country.subregion}
        </p>
        <p>
          <strong>Capital: </strong> {props.country.capital}
        </p>
        <p>
          <strong>Top Level Domain: </strong> {props.country.tld.join(", ")}
        </p>
        <p>
          <strong>Currencies: </strong>{" "}
          {Object.keys(props.country.currencies).join(", ")}
        </p>
        <p>
          <strong>Languages: </strong>{" "}
          {Object.values(props.country.languages).join(", ")}
        </p>
        {borderCountries != undefined ? <h3>Border Countries:</h3> : null}
        {borderCountries != undefined
          ? borderCountries.map((country) => {
              if (country) {
                return (
                  <BorderCountry key={country.name.common} country={country} />
                );
              }
            })
          : null}
      </div>
    </div>
  );
}
