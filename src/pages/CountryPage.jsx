
import { useLoaderData } from "react-router-dom"

export default function CountryPage() {

    const country= useLoaderData()
  return (
    <div>
        
        <div className=" border border-red-500 rounded-md p-5 m-2 text-black flex justify-between items-center gap-x-3 ">

      <div>
      <img alt="country " src={country?.flags?.png} ></img>
      </div>

      <div>
        <p>Country Name :{country?.name?.common} </p>
        <p>Official Name :{country?.name?.official} </p>
      
     </div>
    </div>
    </div>
  )
}
