import React from "react";
import Navbar from './../Template/navbar'
import Carousel from './carousel/index'
import Event from './event/index'
import Anounc from "./Anonunc/index";

const home = () => {
    return(
        <div className="bg-grays">
            <div className="font-inter w-full">
                <div className="">
                    <Navbar/>   
                </div>
            </div>
            <div className="carousel">
                <Carousel />
            </div>
            <div className="event">
                <Event />
            </div>
            <div className="">
                <Anounc />
            </div>
        </div>
    )
}

export default home