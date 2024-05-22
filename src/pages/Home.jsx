import { useLoaderData } from "react-router-dom";
import AllCountry from "../components/AllCountry";

export default function Home() {
    const data = useLoaderData()
  return (
    <div >
        <AllCountry data={data}/>
    </div>
  )
}
