import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCt } from '../../services/country/countrySlice'
import { Link } from "react-router-dom";

const CountryForm = () => {
  const country = useSelector((state) => state.country.countries);
  const dispatch = useDispatch()
  const[selectCountry, setSelectCountry]=useState(country[0].name.official);
const[language,setLanguage]=useState(Object.keys(country[0].translations)[0])


  useEffect(() => {
    dispatch(selectCt(selectCountry));
  }, [selectCountry, dispatch]);

  const handelSubmit = (e) => {
    setSelectCountry(e.target.value);
    const selectedCountry = country.find((ct) => ct.name.official === e.target.value);
    if (selectedCountry) {
      const firstLanguage = Object.keys(selectedCountry.translations)[0];
      setLanguage(firstLanguage);
    }
  };



  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <>
    {
        country && 
        <>
      <div >
        <select  onChange={handelSubmit} defaultValue={selectCountry}>
          {country.map((item,key) => (
            <option key={key}  value={item.name.official}> {item.capital[0]} </option>
          ))}
        </select>
        <select  onChange={handleLanguageChange} defaultValue={language} >
          {country.filter((ct)=> ct.name.official === selectCountry ).map((item) => (
            Object.keys(item.translations).map((tr,key) => (
                 <option key={key}  value={tr}> {tr} </option>
            ))
          ))}
        </select>
      </div>
      <Link to={`/country/${selectCountry}?language=${language}`}  > Read more about</Link>
      </>
    }
    </>

  );
};

export default CountryForm;
