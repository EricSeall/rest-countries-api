import React from "react";
import CountryList from "./CountryList";

interface Props {
  handleSearch: Function;
  handleDetail: Function;
  countryList: any[];
}

export default function Home(props: Props) {
  return (
    <div className="main-home">
      <div className="search-bar">
        <img
          className="search-icon"
          src="./src/assets/icons/magnifying-glass-solid.svg"
          alt="search icon"
        />
        <input
          className="search-input"
          type="text"
          placeholder="Search for a country..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              props.handleSearch(e.currentTarget);
            }
          }}
          onChange={(e) => props.handleSearch(e.currentTarget)}
        ></input>
      </div>
      <div className="dropdown">
        <button className="filter-dropdown">Filter by Region</button>
        <div className="dropdown-items">
          <ul>
            <li>Africa</li>
            <li>Americas</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        </div>
      </div>
      <CountryList
        handleDetail={props.handleDetail}
        countryList={props.countryList}
      />
    </div>
  );
}
