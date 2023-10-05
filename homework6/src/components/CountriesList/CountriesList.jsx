import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCountry, selectCt } from "../../services/country/countrySlice";
import { Link } from "react-router-dom";
const CountriesList = () => {
  const countries = useSelector((store) => store.country.countries);
  const dispatch = useDispatch();
  const handelDelete = (item) => {
    dispatch(deleteCountry(item));
  };

  return (
    <div>
      <Link to="/"> Home </Link>
      {countries.map((country) => (
        <div key={country.name.official}>
          <Link
            to={`${country.name.official}`}
            onClick={() => dispatch(selectCt(country.name.official))}
          >
            <p>
              {country.name.official} {country.flag}
            </p>
          </Link>
          <button onClick={(e) => handelDelete(country.name.official)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
