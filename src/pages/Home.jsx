import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loadergif from '../imgs/loader.gif'

const Home = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [region, setRegion] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate()
  // const [filteredCountries, setFilteredCountries] = useState([]);

  async function getCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setAllCountries(data);
    console.log(data);
  }

  useEffect(() => {
    if (region ===""){
      setRegion("https://restcountries.com/v3.1/all")
    getCountries();}else{
      getCountries()
    }
  },[]);

  // function getCountriesByRegion(e) {
  //   setRegion(e.target.value);
  //   // console.log(region);
  // }

  // function searchFilter(searchValue){
  //   setSearchInput(searchValue)
  //   if(searchInput !==""){
  //     setFilteredCountries(allCountries.filter((each)=>{
  //       return Object.values(each).join('').toLowerCase().includes(searchInput.toLowerCase())
  //     }))
  //   }else {
  //     setFilteredCountries([])
  //   }
  // }

  return (
    <>
      <div className="firstDiv">
        <div id="searchDiv">
          <i className="ri-search-line"></i>
          <input onChange={(e) => setSearchInput(e.target.value)} type="search" placeholder="Search for a country" id="search" />
        </div>

        {/* <form className="searchDiv2">
          <input type="text" placeholder="Filter by region" id="search2" />
            <i className="ri-arrow-down-s-line"></i>
        </form> */}

        <div className="searchDiv2">
          <select id="search2">
            <option value=""  >Filter by region</option>
            <option value="africa" onClick={(e) => {setRegion ('https://restcountries.com/v3.1/region/africa') 
            navigate("/")}}>Africa</option>
            navigate("/")
            <option value="america"onClick={(e) => {setRegion ("https://restcountries.com/v3.1/region/america") 
            navigate("/")}}>America</option>
            
            <option value="asia"onClick={(e) => {setRegion ("https://restcountries.com/v3.1/region/asia") 
            navigate("/") }}>Asia</option>

            <option value="europe" onClick={(e) => {setRegion ("https://restcountries.com/v3.1/region/europe") 
            navigate("/")

          }} >Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>

      <section>
        <div className="countryCard">


        {allCountries.length ? 
          allCountries.filter((val) => {
          if(searchInput.length === "" ) return val
          else if(val.name.common.toLowerCase().includes(searchInput.toLowerCase())) return val
        })
        .map((country) => (
              <div className="card" key={country.name.common}>
                <Link
                  className="btm"
                  to={`/countryinfo/${country.name.common}`}
                >
                  <img src={country.flags.svg} alt="..." />
                  <div className="card-body" style={{ padding: "10px 20px" }}>
                    <h4
                      className="card-title"
                      style={{ paddingBottom: "12px" }}
                    >
                      <b>{country.name.common}</b>
                    </h4>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Population: </span>
                      <span style={{ color: "grey" }}>
                        {country.population}
                      </span>
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Region: </span>
                      <span style={{ color: "grey" }}>{country.region}</span>
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Capital: </span>
                      <span style={{ color: "grey" }}>{country.capital}</span>
                    </p>
                  </div>
                </Link>
              </div>
            )): <img className="loader" src={loadergif} alt="" /> }
        </div>
      </section>
    </>
  );
};

export default Home;
