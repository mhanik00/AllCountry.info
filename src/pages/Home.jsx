import { useLoaderData } from "react-router-dom";
import AllCountry from "../components/AllCountry";

export default function Home() {
    const data = useLoaderData()
  return (
    <div>
        <h1 className=' text-black py-3 text-center text-2xl font-bold'>
          All Country Information
        </h1>
        <AllCountry data={data}/>
    </div>
  )
}
