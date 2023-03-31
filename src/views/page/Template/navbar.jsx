import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return(
    <React.Fragment>
      <div className="nav">
        <div className="flex flex-row justify-between mx-5 mt-2">
          <h1 className="text-xl font-semibold">BEvent</h1>
            <div className="">
                <ul className="flex space-x-5">
                  <Link to={'/home'}>
                    <li><a href="">Home</a></li>
                  </Link>
                  <Link to={'/home'}>
                    <li><a href="">About</a></li>
                  </Link>
                  <Link to={'/home'}>
                    <li><a href="">Contact</a></li>
                  </Link>
                </ul>
            </div>
          <div className="bg-slate-400 rounded-full h-9 w-9"></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar