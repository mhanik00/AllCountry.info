import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div className=" bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 py-2">
       <header className="navbar flex mx-3 justify-between items-center ">
       <div><h1 className="font-bold text-2xl    max-sm: text-lg  text-white cursor-pointer text-wrap">
        Global stack
       </h1></div>
       <div> <nav >
                <ul className="flex gap-x-4 text-2xl font-semibold max-sm:text-base  max-sm: gap-x-2 items-center  text-white cursor-pointer   ">
                 <Link to='/'>
                 <li className="hover:underline">Home</li>
                 </Link>
                 <Link to="/about">
                 <li className="hover:underline">About</li>
                 </Link>
                
                 <Link to="/login">
                 <li><button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:shadow-md">Log In</button></li>
                 </Link>
                    
                   
                    
                    
                </ul>
             </nav></div>
            

        </header>
    </div>
  )
}
