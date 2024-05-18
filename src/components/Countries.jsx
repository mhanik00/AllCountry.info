import { Link } from "react-router-dom";


export default function Countries({country}) {
  return (
    <div className=" border border-red-500 rounded-md p-5 m-2 text-white flex justify-between items-center gap-x-3 ">

      <div>
        <img alt="flag" src={country.flags.png}/>
      </div>

      <div>
        <h1>Country Name : {country.name.common}</h1>
        <h1>Official Name : {country.name.official}</h1>
        <p>Region : {country.region}</p>
        <p>Population : {country.population }</p>
     </div>
           <Link to={`/country/${country.cca3}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              More Info
            </button>
           </Link>
    </div>
  )
}
