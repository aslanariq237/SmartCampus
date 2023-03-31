import React from "react";
import Card from "./card";
import Navbar from "../../Template/navbar";

function Index(list){
    return(
        <div className="">
            <div className="">
                <Navbar />
            </div>
            <div className="w-full">
                <Card />
            </div>
        </div>
    )
}
export default Index