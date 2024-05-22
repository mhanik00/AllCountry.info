
import {  useLoaderData } from "react-router-dom"

export default function CountryPage() {

    const country= useLoaderData()
  return (
   
<div className=" bg-slate-800 ">
    <div className="border border-red-500 rounded-md px-3 m-2 py-3 text-black flex justify-between items-center gap-x-3 ">

    <p className="text-center text-2xl font-bold text-purple-300">{country?.name?.official} </p>
    <img className=" w-52 max-sm:h-20" alt="country " src={country?.flags?.png} ></img>
    </div>

  <div className="grid sm:grid-cols-3 gap-3 pb-4 ">

   <div className=" bg-zinc-700 mx-3 py-5 px-3">
   
   <p className="text-center text-2xl font-bold text-purple-300"> Genarel</p>
   
   <p className="text-base font-bold text-purple-300 my-2"><span className=" text-orange-500 text-lg font-bold">Name :</span> {country?.name?.common} </p>
   <p className=" text-base font-bold text-purple-300 my-2"><span className=" text-orange-500 text-lg font-bold">Short Name :</span> {country?.cca3} </p>
   <p className=" text-base font-bold text-purple-300"><span className=" text-orange-500 text-lg font-bold">Region :</span> {country?.region} </p>
   <p className=" text-base font-bold text-purple-300 my-2"><span className=" text-orange-500 text-lg font-bold">Border :</span> {country?.borders} </p>
   
   </div>
  
   <div className=" bg-zinc-700 mx-3 py-5 px-3">
   
   <p className="text-center text-2xl font-bold text-purple-300 my-2"> Information </p>
  
  <p className=" text-base font-bold text-purple-300 "><span className=" text-orange-500 text-lg font-bold">Top level Domain :</span> {country?.tld} </p>
  <p className=" text-base font-bold text-purple-300 my-2"><span className=" text-orange-500 text-lg font-bold">Country code Number:</span> {country?.ccn3} </p>
  <p className=" text-base font-bold text-purple-300"><span className=" text-orange-500 text-lg font-bold">currencie Symbol :</span> {country?.currencies.symbol} </p>
  <p className=" text-base font-bold text-purple-300 my-2"><span className=" text-orange-500 text-lg font-bold">Postal Code :</span> {country?.postalCode?.format} </p>
  
  </div>


  <div className=" bg-zinc-700 mx-3 py-5 px-3">
   
    <p className="text-center text-2xl font-bold text-purple-300"> Others </p>
   
   <p className="text-base font-bold text-purple-300 my-2"><span className=" text-orange-500 text-lg font-bold">Population :</span> {country?.population} </p>

   <p className=" text-base font-bold text-purple-300 my-2"><span className=" text-orange-500 text-lg font-bold">Total Area :</span> {country?.area}  </p>

   <p className=" text-base font-bold text-purple-300"><span className=" text-orange-500 text-lg font-bold">Start Of Week :</span> {country?.startOfWeek} </p>
   <p className=" text-base font-bold text-purple-300 my-2 "><span className=" text-orange-500 text-lg font-bold">Fifa Name :</span> {country?.fifa} </p>
   

   </div>

   </div>

</div>

    
     
  )
}
