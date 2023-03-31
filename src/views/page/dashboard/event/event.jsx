import React from "react";
import Card from './../../../images/card1.jpeg'
import { Link } from "react-router-dom";

function Event() {
    return(
        <React.Fragment>
            <div className="bg-bg1 h-96">
                <div className="head mx-10">
                    <div className="flex justify-between my-2">
                        <div className="">
                        <p className="font-semibold text-2xl mt-3 text-comm-font">Event</p>
                        </div>
                        <div className="mt-3">
                            <Link to={'/event'}>
                                <span><a className="text-red-400">See More<strong>&#62;</strong></a></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="class-card">
                    <div className="flex justify-center mx-10 space-x-20">
                        <div className="card bg-grays rounded-xl shadow-lg w-96">
                            <div className="my-4">
                                <div className="flex mx-2 my-2">
                                    <div className="card-header">
                                        <img src={Card} alt="" className="h-52 w-48 "/>
                                    </div>
                                    <div className="card-body mt-20 mx-2 w-40">
                                        <h3 className="text-head-font text-2xl font-bold">Dollar Kuning</h3>
                                        <div className="flex justify-end">
                                            <div className=""></div>
                                            <div className="items-right">
                                                <p className="text-xs justify-end">2016-12-12</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment mx-2 text-comm-font text-lg mt-3">
                                    <p>lorem ipsum dolor amet sit cuko baita pinluk bansoi pantarlih is barang dalang pelok is the most
                                        people which doensn't know what bayi means.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-grays rounded-xl shadow-lg w-96">
                            <div className="my-4">
                                <div className="flex mx-2 my-2">
                                    <div className="card-header">
                                        <img src={Card} alt="" className="h-52 w-48 "/>
                                    </div>
                                    <div className="card-body mt-20 mx-2">
                                        <h3 className="text-head-font text-2xl font-bold">Dollar Kuning</h3>
                                        <div className="flex justify-end">
                                            <div className=""></div>
                                            <div className="items-right">
                                                <p className="text-xs justify-end">2016-12-12</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment mx-2 text-comm-font text-lg mt-3">
                                    <p>lorem ipsum dolor amet sit cuko baita pinluk bansoi pantarlih is barang dalang pelok is the most
                                        people which doensn't know what bayi means.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-grays rounded-xl shadow-lg w-96">
                            <div className="my-4">
                                <div className="flex mx-2 my-2">
                                    <div className="card-header">
                                        <img src={Card} alt="" className="h-52 w-48 "/>
                                    </div>
                                    <div className="card-body mt-20 mx-2">
                                        <h3 className="text-head-font text-2xl font-bold">Dollar Kuning</h3>
                                        <div className="flex justify-end">
                                            <div className=""></div>
                                            <div className="items-right">
                                                <p className="text-xs justify-end">2016-12-12</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment mx-2 text-comm-font text-lg mt-3">
                                    <p>lorem ipsum dolor amet sit cuko baita pinluk bansoi pantarlih is barang dalang pelok is the most
                                        people which doensn't know what bayi means.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )   
}

export default Event