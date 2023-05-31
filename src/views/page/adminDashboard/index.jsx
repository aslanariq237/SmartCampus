import React from "react";
import Navbar from "../Template/navbar";
import Home from "./Home";

const Index = () => {
    return (
        <div className="">
            <div className="w-full">
                <div className="">
                    <Navbar />
                </div>
            </div>
            <div className="">
                <Home />
            </div>
        </div>
    )
}

export default Index
