import axios from "axios"

export const allCountryLoader= async ()=>{
    const url = "https://restcountries.com/v3.1/all"

        try {
            const res= await axios.get(url)
            const result = res?.data
            console.log("result")
            return result;
            
           } catch (error) {
            throw new Error(error)
           }
   
          
}
