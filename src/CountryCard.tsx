import "./CountryCard.css";

interface Props {
  handleDetail: Function;
  country: any;
}

export default function (props: Props) {
  return (
    <div
      className="country-card"
      onClick={() => props.handleDetail(true, props.country)}
    >
      <img
        className="country-flag-main"
        src={props.country.flags.svg}
        alt={props.country.flags.alt}
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
