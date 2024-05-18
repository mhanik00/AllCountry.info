import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from './pages/error-page';
import CountryPage from './pages/CountryPage';
import axios from 'axios';
import { allCountryLoader } from './libs/fetchData';
import RootLayout from './layout/RootLayout';
import About from './pages/About';

const countryLoader =({params:{countryCCa3Code}})=>{
  const url= `https://restcountries.com/v3.1/alpha/${countryCCa3Code}`

  const fetchData= async ()=> {
        try {
         const res= await axios.get(url)
          return res?.data[0]
        } catch (error) {
         throw new Error(error)
        }

}

return fetchData()
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/home",
        element: <Home/>,
        loader: allCountryLoader,
      },
      {
        path: "/",
        element: <Home/>,
        loader: allCountryLoader,
      },{
        path: "/country/:countryCCa3Code",
        element: <CountryPage/>,
        loader: countryLoader
      },
      {
        path: "/about",
        element: <About/>,
       
      },
   
       ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
