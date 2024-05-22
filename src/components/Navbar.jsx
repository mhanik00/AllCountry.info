

export default function Navbar() {
  return (
    <div className=" bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 py-6">
       <header className="navbar flex mx-5 justify-between items-center ">
       <div><h1 className="font-bold text-2xl  text-white cursor-pointer text-wrap">
        Global stack
       </h1></div>
       <div> <nav >
                <ul className="flex gap-x-4 text-2xl font-semibold   items-center  text-white cursor-pointer   ">
                    <li className="hover:underline">Home</li>
                    <li className="hover:underline">About</li>
                    <li><button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:shadow-md">Log In</button></li>
                    
                </ul>
             </nav></div>
            

        </header>
    </div>
  )
}
