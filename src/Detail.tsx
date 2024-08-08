import React from "react";

interface Props {
  setDetail: Function;
  country: any;
}

export default function Detail(props: Props) {
  console.log(props.country);
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
          <strong>Top Level Domain: </strong> {props.country.tld}
        </p>
        <p>
          <strong>Currencies: </strong> {Object.keys(props.country.currencies)}
        </p>
        <p>
          <strong>Languages: </strong>{" "}
          {Object.values(props.country.languages).join(", ")}
        </p>
        <h3>Border Countries:</h3>
      </div>
    </div>
  );
}
