import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCt } from '../../services/country/countrySlice'
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
      <FormControl  sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectCountry}
          label="country"
          onChange={handelSubmit}
        >
          {country.map((item,key) => (
            <MenuItem key={key}  value={item.name.official}>{item.capital[0]} </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} >
        <InputLabel id="demo-simple-select-label">language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="language"
          onChange={ handleLanguageChange}
        >
         

{country.filter((ct)=> ct.name.official === selectCountry ).map((item) => (
            Object.keys(item.translations).map((tr,key) => (
                 <MenuItem key={key}  value={tr}>{tr} </MenuItem>
            ))
          ))}
        </Select>
      </FormControl>
       
       
      </div>
      <Link to={`/country/${selectCountry}?language=${language}`}  > Read more about</Link>
      </>
    }
    </>

  );
};

export default CountryForm;
