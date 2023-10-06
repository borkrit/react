import './App.css';
import CountryForm from './components/CountryForm/CountryForm';
import { Link } from 'react-router-dom';
import Title from './components/Title/Title';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function App() {

  return (
    <div className="App">

    
    
<Stack direction="row" spacing={2} justifyContent="center">
      
      <Button variant="contained" href="/">
        Home
      </Button>
      <Button variant="contained" href="/country">
        Country list
      </Button>
    </Stack>
      
      <Title title='Home page' />
      <CountryForm  />

    </div>
  );
}

export default App;
