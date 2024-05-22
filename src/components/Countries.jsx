import { Link } from "react-router-dom";


export default function Countries({country}) {
  return (
   
    <div className= "border border-orange-500 py-3 mx-5 my-5 px-2  bg-green-700/30   max-md:w-72 rounded rounded-xl">

      <div className="flex items-center border-b  border-yellow-600 py-2 px-3 bg-pink-600/55  rounded rounded-3xl ">
        <img className=" max-sm:w-20 max-sm:h-12 w-30 h-20 px-2  rounded  rounded-full" alt="flag" src={country.flags.png}/>
        <h1 className=" text-2xl font-bold mx-5 max-md:w-72">{country.name.common}</h1>
      </div>

      <div className=" bg-slate-800 py-3 px-3 text-blue-300 text-lg max-sm:text-base my-2">
        <p> <span className=" text-green-600 font-bold "   >Capital : </span> {country?.capital}</p>
        <p> <span className=" text-green-600 font-bold "  > Region : </span>{country.region}</p>
        <h1> <span  className=" text-green-600 font-bold " >Official Name :</span> {country.name.official}</h1>
        <p  className=""> <span  className=" text-green-600 font-bold" >continents: </span> {country?.continents}</p>
       </div>
       
        <Link to={`/country/${country.cca3}`}>
            <button className="bg-pink-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-3 ">
            more about <span className=" text-lime-200">{country.name.common}</span>
            </button>
           </Link>
     </div>
           
   
  )
}
