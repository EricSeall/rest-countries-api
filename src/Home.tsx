import React from "react";
import CountryList from "./CountryList";

interface Props {
  handleSearch: Function;
  handleDetail: Function;
  activeRegion: string;
  filterCountryByRegion: Function;
  countryList: any[];
}

export default function Home(props: Props) {
  return (
    <div className="main-home">
      <div className="search-bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="var(--input-color)"
          className="search-icon"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
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
      <div className="dropdown" tabIndex={0}>
        <button className="filter-dropdown">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            fill="var(--text-color)"
            className="dropdown-caret"
          >
            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
          </svg>
          Filter by Region{" "}
        </button>

        <div className="dropdown-items">
          <ul>
            <li
              onClick={() => props.filterCountryByRegion("All")}
              className={
                props.activeRegion === "All"
                  ? "filter-item active-region"
                  : "filter-item"
              }
            >
              All
            </li>
            <li
              onClick={() => props.filterCountryByRegion("Africa")}
              className={
                props.activeRegion === "Africa"
                  ? "filter-item active-region"
                  : "filter-item"
              }
            >
              Africa
            </li>
            <li
              onClick={() => props.filterCountryByRegion("Americas")}
              className={
                props.activeRegion === "Americas"
                  ? "filter-item active-region"
                  : "filter-item"
              }
            >
              Americas
            </li>
            <li
              onClick={() => props.filterCountryByRegion("Asia")}
              className={
                props.activeRegion === "Asia"
                  ? "filter-item active-region"
                  : "filter-item"
              }
            >
              Asia
            </li>
            <li
              onClick={() => props.filterCountryByRegion("Europe")}
              className={
                props.activeRegion === "Europe"
                  ? "filter-item active-region"
                  : "filter-item"
              }
            >
              Europe
            </li>
            <li
              onClick={() => props.filterCountryByRegion("Oceania")}
              className={
                props.activeRegion === "Oceania"
                  ? "filter-item active-region"
                  : "filter-item"
              }
            >
              Oceania
            </li>
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
