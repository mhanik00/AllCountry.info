
import Countries from './Countries'


export default function AllCountry({data}) {
    
  return (
    <div >
     <section className='grid md:grid-cols-3 gap-5  bg-indigo-700'>
        {
            data.map((country,idx)=>{
              console.log(country)
                return <Countries key ={idx} country ={country}/>
            })
        }
     </section>
    </div>
  )
}
