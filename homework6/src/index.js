import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CountriesList from './components/CountriesList/CountriesList';
import CountryCard from './components/CountryCard/CountryCard';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/country",
    element: <CountriesList />,
  },
  {
    path: "/country/:id",
    element: <CountryCard />,
    
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
