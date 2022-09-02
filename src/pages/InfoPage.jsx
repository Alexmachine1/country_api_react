import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const InfoPage = () => {
  const { countryName } = useParams();
  const [oneCountry, setOneCountry] = useState([]);
 

  async function singleCountry() {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const data = await response.json();
    console.log(data[0]);
    setOneCountry(data);
  }

  useEffect(() => {
    singleCountry();
  }, []);

  console.log(oneCountry);
  return (
    <>
      {oneCountry &&
        oneCountry.map((country) => (
          <div className="infoDiv">
            <div key={country.name.common}>
              <img
                className="imgDiv"
                src={country.flags.svg} alt="..." />
            </div>

            <div className="leftDiv">
              <div className="leftDiv1">
                <h4
                  className="card-title"
                  style={{ padding: "40px 0", color: "white" }}
                >
                  <b> {country.name.common} </b>
                </h4>

                <p>
                  <span style={{ fontWeight: "bold", color: "white" }}>
                    {/* Native Name:{cou} */}
                  </span>
                  <span style={{ color: "grey" }}> Belgie </span>
                </p>

                <p>
                  <span style={{ fontWeight: "bold", color: "white" }}>
                    Population:{" "}
                  </span>
                  <span style={{ color: "grey" }}>11,319,511</span>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "white" }}>
                    Region:{" "}
                  </span>
                  <span style={{ color: "grey" }}>Europe</span>{" "}
                </p>
                <p>
                  <p>
                    <span style={{ fontWeight: "bold", color: "white" }}>
                      Capital:{" "}
                    </span>
                    <span style={{ color: "grey" }}>Western europe</span>
                  </p>
                  <span style={{ fontWeight: "bold", color: "white" }}>
                    Capital:{" "}
                  </span>
                  <span style={{ color: "grey" }}>Brussels</span>
                </p>
              </div>

              <div className="leftDiv2">
                <p
                  className="card-title"
                  style={{ paddingBottom: "12px", color: "white" }}
                >
                  <b> Top Level Domain: </b>
                  <span style={{ color: "grey" }}>be</span>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "white" }}>
                    Currency:{" "}
                  </span>
                  <span style={{ color: "grey" }}>Euro</span>
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "white" }}>
                    Lannguage:{" "}
                  </span>
                  <span style={{ color: "grey" }}>Dutch, French, German</span>
                </p>
              </div>
            </div>

            <div className="floorDiv">
              <p>Border Countries: </p>
              <div>
                <p style={{ backgroundColor: "#2C3844", padding: "5px 20px" }}>
                  France
                </p>
              </div>
              <div>
                <p style={{ backgroundColor: "#2C3844", padding: "5px 20px" }}>
                  Germany
                </p>
              </div>
              <div>
                <p style={{ backgroundColor: "#2C3844", padding: "5px 20px" }}>
                  Netherlands
                </p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default InfoPage;
