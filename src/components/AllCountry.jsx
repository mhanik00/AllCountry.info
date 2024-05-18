
import Countries from './Countries'


export default function AllCountry({data}) {
    
  return (
    <div className=' bg-slate-950'>
     <div>
        <h3>Country List</h3>
     </div>
     <section className='grid grid-cols-3'>
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
