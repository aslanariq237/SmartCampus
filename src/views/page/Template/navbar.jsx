import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return(
    <React.Fragment>
      <div className="nav">
        <div className="flex justify-between mx-5 mt-2 items-center">
          <div className="flex space-x-14">
            <ul className="flex space-x-14 items-center">
            <Link to={'/home'}>
                <li className=""><a href="" className=""><h1 className="text-xl font-semibold">M3</h1></a></li>
              </Link>
              <Link to={'/home'}>
                <li className=""><a href="" className="">Home</a></li>
              </Link>
              <Link to={'/event'}>
                <li className=""><a href="">Event</a></li>
              </Link >
              <Link to={'/'}>
                <li className=""><a href="">Contact</a></li>
              </Link>
            </ul>
          </div>
          <div className="bg-card-bg rounded-full h-9 w-9"></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar