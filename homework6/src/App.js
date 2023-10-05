import './App.css';
import CountryForm from './components/CountryForm/CountryForm';
import CountryCard from './components/CountryCard/CountryCard';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from './components/Title/Title';

function App() {

  return (
    <div className="App">

    <Link to='/country' > country </Link>
    <Link to='/' > Home </Link>
      
      <Title title='Home page' />
      <CountryForm  />

    </div>
  );
}

export default App;
