import React from "react";

const Navbar = () => {
  return(
    <React.Fragment>
      <div className="nav">
        <div className="flex flex-row justify-between mx-5 mt-2">
          <h1 className="text-xl font-semibold">BEvent</h1>
            <div className="">
                <ul className="flex space-x-5">
                  <li><a href="">Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
            </div>
          <div className="bg-slate-400 rounded-full h-9 w-9"></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar