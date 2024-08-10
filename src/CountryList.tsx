import "./CountryList.css";
import CountryCard from "./CountryCard";

interface Props {
  handleDetail: Function;
  countryList: any[];
}

export default function CountryList(props: Props) {
  //console.log(props.countryList);
  return (
    <div className="country-list">
      {props.countryList
        ? props.countryList.map((country) => {
            return (
              <CountryCard
                handleDetail={props.handleDetail}
                key={country.name.common}
                country={country}
              />
            );
          })
        : null}
    </div>
  );
}
