import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // let nav = useNavigate;
  const logout = () => {
    localStorage.clear()
    // nav('/home', {replace:true})
  }
  return (
    <React.Fragment>
      <div className="nav">
        <div className="flex justify-between mx-5 mt-2 items-center">
          <div className="flex space-x-14">
            <ul className="flex space-x-14 items-center">
              <Link to={'/home'}>
                <li className=""><a href="/" className=""><h1 className="text-xl font-semibold">M3</h1></a></li>
              </Link>
              <Link to={'/home'}>
                <li className=""><a href="/" className="">Home</a></li>
              </Link>
              <Link to={'/event'}>
                <li className=""><a href="/">Event</a></li>
              </Link >
              <Link to={'/'}>
                <li className=""><a href="/">Contact</a></li>
              </Link>
            </ul>
          </div>
          <div className="login">
            {
              localStorage.getItem('user_access_token')
                ?
                <div className="too">
                  <p>{localStorage.getItem('email')}</p>
                  <form onSubmit={logout}>
                    <button>Logout</button>
                  </form>
                </div>
                :
                <div className="button space-x-3">
                  <Link to={'/login'}>
                    <button className="px-2 py-{2px} hover:bg-slate-200 hover:border-none rounded-md">Login</button>
                  </Link>
                </div>
            }
          </div>
          {/* <div className="bg-card-bg rounded-full h-9 w-9"></div> */}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar