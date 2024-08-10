import "./App.css";

interface Props {
  country: any;
  handleCountryButton: Function;
}

export default function BorderCountry(props: Props) {
  console.log(props.country);
  return (
    <button
      className="border-country-button"
      onClick={() => props.handleCountryButton(props.country)}
      tabIndex={0}
    >
      {props.country.name.common}
    </button>
  );
}
