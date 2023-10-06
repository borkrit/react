import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCountry } from "../../services/country/countrySlice";
import { Link, useLocation, useNavigate } from "react-router-dom";

const CountryCard = () => {
  const country = useSelector((store) =>
    store.country.countries.filter(
      (item) => item.name.official == store.country.selected
    )
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedLanguage = searchParams.get("language");

  const handelDelete = () => {
    dispatch(deleteCountry(country[0].name.official));
    navigate("/country");
  };

  const renderData = (obj) => {
    return Object.keys(obj).map((key) => {
      if (typeof obj[key] === "object") {
        return (
          <div key={key}>
            <h2>{key}</h2>
            <ul>
                <li>
            {renderData(obj[key])}
                </li>
            </ul>
          </div>
        );
      } else if (Array.isArray(obj[key])) {
        return (
          <div key={key} style={{ display: "flex" }}>
            <p>{key}</p> :
            <ul>
              {obj[key].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        );
      } else {
        return (
          <div key={key} style={{ display: "flex" }}>
            <p>{key}</p> : <p>{obj[key]}</p>
          </div>
        );
      }
    });
  };
 
  return (
    <>
      <Link to="/country">Back</Link>

      <h1>
        {selectedLanguage
          ? country[0].translations[selectedLanguage].official
          : country[0].name.official}
      </h1>
      {country[0] && renderData(country[0])}

      <button onClick={handelDelete}>del</button>
    </>
  );
};

export default CountryCard;
