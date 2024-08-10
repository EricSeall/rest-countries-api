import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Detail from "./Detail";

function App() {
  const [colorMode, setColorMode] = useState("dark");
  const [countryList, setCountryList] = useState<any[]>([]);
  const [detail, setDetail] = useState(false);
  const [activeCountry, setActiveCountry] = useState<any>();
  const [activeRegion, setActiveRegion] = useState("All");
  const [filteredCountryList, setFilteredCountryList] = useState<any[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      let data;
      if (response.ok) {
        data = await response.json();
      }
      setCountryList(data);
      setFilteredCountryList(data);
    };

    fetchCountries();
  }, []);

  function handleSearch(target: HTMLInputElement) {
    getCountries(target.value);
    //target.value = "";
  }

  function handleDetail(detailValue: boolean, country: any) {
    setActiveCountry(country);
    setDetail(detailValue);
  }

  function getCountries(country: string) {
    let list;
    if (country) {
      fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          setCountryList(data);
          //console.log(data);
        })
        .catch((error) => console.log(error));
    } else {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          list = data;
        })
        .catch((error) => console.log(error));
    }
    return list;
  }

  function filterCountryByRegion(region: string) {
    if (region === "All") {
      setFilteredCountryList(countryList);
    } else {
      setFilteredCountryList(
        countryList.filter((country) => {
          console.log(country.region === region);

          return country.region === region;
        })
      );
    }
    setActiveRegion(region);
  }

  document.querySelector("body")?.setAttribute("data-theme", colorMode);

  return (
    <>
      <Header colorMode={colorMode} setColorMode={setColorMode} />
      {detail ? (
        <Detail
          setDetail={setDetail}
          country={activeCountry}
          setActiveCountry={setActiveCountry}
        />
      ) : (
        <Home
          handleDetail={handleDetail}
          handleSearch={handleSearch}
          activeRegion={activeRegion}
          filterCountryByRegion={filterCountryByRegion}
          countryList={
            activeRegion === "All" ? countryList : filteredCountryList
          }
        />
      )}
    </>
  );
}

export default App;
