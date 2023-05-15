import React from "react";
import Card1 from './../../../images/card1.jpeg'
import { Link } from "react-router-dom";
import Card from './card'

function Event() {
    return(
        <React.Fragment>
            <div className="bg-bg1 h-96 font-roboto">
                <div className="head mx-10">
                    <div className="flex justify-between my-2">
                        <div className="">
                        <p className="font-semibold text-2xl mt-3 text-comm-font">Event</p>
                        </div>
                        <div className="mt-3">
                            <Link to={'/event'}>
                                <span><a className="text-red-400" href="/">See More<strong>&#62;</strong></a></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="class-card">
                    <div className="flex justify-center mx-10 space-x-20">
                        <Card img={Card1}/>
                        <Card img={Card1}/>
                        <Card img={Card1}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )   
}

export default Event