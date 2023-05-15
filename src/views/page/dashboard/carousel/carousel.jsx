import React from "react";
import IMG from './../../../images/Three.jpg'


function Carousel() {
    return(
        <div className="">
            <div className="">
                <div className="bg-grays my-20 font-roboto @container">
                    <div className="grid mx-40 @4xl:flex justify-between items-center">
                        <div className="">
                            <h2 className="text-4xl font-extrabold text-gray-700">Hi, I am Jhondoe Ncis!</h2>
                            <h3 className="text-2xl font-medium text-bg4">Am Front End Developer</h3>
                            <div className="comment mt-2 text-sm font-semibold">
                                <p>saya dari keluarga lorem ipsum dolor amet dengan ini</p>
                                <p>Mengumumkan keduduka saya sebagai raja dunia</p>
                                <p className="text-xs items-end ">2016-12-12</p>
                                <button className="h-10 w-11/12 rounded-lg bg-blues mt-2 hover:bg-blue-500">Daftar Sekarang</button>
                            </div>
                        </div>
                        <div className="my-3 mr-4 items-start">
                            <div className="">
                            <img src={IMG} className="w-96 h-72" alt="" />
                            </div>
                            {/* <div className="bg-slate-400 h-60 w-52 absolute"></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel