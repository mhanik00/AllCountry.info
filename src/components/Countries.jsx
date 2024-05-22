import { Link } from "react-router-dom";


export default function Countries({country}) {
  return (
   
    <div className= "border border-orange-500 py-3 mx-5 my-5 px-2  bg-green-700/30 w-96 rounded rounded-xl">

      <div className="flex items-center border-b  border-yellow-600 py-2   bg-pink-600/55  rounded rounded-3xl">
        <img className="w-30 h-20 px-2  rounded rounded-3xl" alt="flag" src={country.flags.png}/>
        <h1 className=" text-2xl font-bold mx-5">{country.name.common}</h1>
      </div>

      <div className=" bg-slate-800 py-3 px-3 text-blue-300 text-lg my-2 ">
        <p> <span className=" text-green-600 font-bold "   >Capital : </span> {country?.capital}</p>
        <p> <span className=" text-green-600 font-bold "  > Region : </span>{country.region}</p>
        <h1> <span  className=" text-green-600 font-bold " >Official Name :</span> {country.name.official}</h1>
        <p  className=""> <span  className=" text-green-600 font-bold" >continents: </span> {country?.continents}</p>
       </div>
       
        <Link to={`/country/${country.cca3}`}>
            <button className="bg-pink-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-3 ">
              More Info about
            </button>
           </Link>
     </div>
           
   
  )
}
