import { useState } from "react";
import "./App.css";
import CountryList from "./CountryList";
import Header from "./Header";
import Home from "./Home";
import Detail from "./Detail";

function App() {
  const list = getCountries();
  const [colorMode, setColorMode] = useState("dark");
  const [countryList, setCountryList] = useState<any[]>(list ? list : []);
  const [detail, setDetail] = useState(false);
  const [activeCountry, setActiveCountry] = useState<any>();

  document.querySelector("body")?.setAttribute("data-theme", colorMode);

  function handleSearch(target: HTMLInputElement) {
    getCountries(target.value);
    //target.value = "";
  }

  function handleDetail(detailValue: boolean, country: any) {
    setActiveCountry(country);
    setDetail(detailValue);
  }

  function getCountries(country?: string) {
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
          //console.log(list);
        })
        .catch((error) => console.log(error));
    }
    return list;
  }
  return (
    <>
      <Header colorMode={colorMode} setColorMode={setColorMode} />
      {detail ? (
        <Detail setDetail={setDetail} country={activeCountry} />
      ) : (
        <Home
          handleDetail={handleDetail}
          handleSearch={handleSearch}
          countryList={countryList}
        />
      )}
    </>
  );
}

export default App;
