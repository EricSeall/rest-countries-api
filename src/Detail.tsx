// @ts-nocheck
import { useEffect, useState } from "react";
import BorderCountry from "./BorderCountry";

interface Props {
  setDetail: Function;
  setActiveCountry: Function;
  country: any;
}

export default function Detail(props: Props) {
  const [borderCountries, setBorderCountries] = useState<any[]>();

  useEffect(() => {
    handleBorderCountries(props.country.borders);
  }, []);

  function handleBorderCountries(countries: string[]) {
    if (countries) {
      let list: any[] = [];
      countries.forEach((borderCountry: string) => {
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
  }
  function handleCountryButton(country: any) {
    props.setActiveCountry(country);
    handleBorderCountries(country.borders);
  }

  return (
    <>
      <button className="back-button" onClick={() => props.setDetail(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="var(--text-color)"
          className="back-arrow"
        >
          <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM116.7 244.7l112-112c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8l0 64 96 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-96 0 0 64c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-112-112c-6.2-6.2-6.2-16.4 0-22.6z" />
        </svg>
        <span>Back</span>
      </button>
      <div className="main-detail">
        <img
          className="country-flag-detail"
          src={props.country.flags.svg}
          alt={props.country.flags.alt}
        />
        <div>
          <h2 className="name-detail">{props.country.name.official}</h2>
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
            <strong>Capital: </strong> {props.country.capital.join(", ")}
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
          {borderCountries ? <h3>Border Countries:</h3> : null}
          <div className="border-button-container">
            {borderCountries
              ? borderCountries.map((country) => {
                  if (country) {
                    return (
                      <BorderCountry
                        key={country.name.common}
                        country={country}
                        handleCountryButton={handleCountryButton}
                      />
                    );
                  }
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
