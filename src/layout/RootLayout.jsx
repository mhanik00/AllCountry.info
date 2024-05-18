import { Link, Outlet } from "react-router-dom"


function RootLayout() {
  return (
 <div>
 
 <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-bottom border-slate-700">
    <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
      <span className="ml-3 text-xl">AllCounty.Info</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to={'/home'} className="mr-5 hover:text-gray-900">Home</Link>
      <Link to={'/about'} className="mr-5 hover:text-gray-900">About</Link>
     
    </nav>
  </div>
</header>
<Outlet/>
 </div>)
}

export default RootLayout