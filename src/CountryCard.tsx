import React from "react";
import "./CountryCard.css";

interface Props {
  handleDetail: Function;
  country: any;
}

export default function (props: Props) {
  return (
    <div className="country-card">
      <img
        className="country-flag"
        src={props.country.flags.svg}
        onClick={() => props.handleDetail(true, props.country)}
      />
      <div className="country-info">
        <h2>{props.country.name.common}</h2>
        <p>
          <strong>Population: </strong>{" "}
          {props.country.population.toLocaleString()}
        </p>
        <p>
          <strong>Region: </strong> {props.country.region}
        </p>
        <p>
          <strong>Capital: </strong> {props.country.capital}
        </p>
      </div>
    </div>
  );
}
