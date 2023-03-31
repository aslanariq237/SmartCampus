import React from "react";

function Carousel() {
    return(
        <div className="">
            <div className="">
                <div className="bg-grays my-20">
                    <div className="flex justify-between items-center mx-40">
                        <div className="">
                            <h2 className="text-4xl font-extrabold text-slate-600">Hai Nama Saya Ariq</h2>
                            <div className="comment mt-2">
                                <p>saya dari keluarga lorem ipsum dolor amet dengan ini</p>
                                <p>Mengumumkan keduduka saya sebagai raja dunia</p>
                                <p className="text-xs items-end ">2016-12-12</p>
                                <button className="h-10 w-11/12 rounded-lg bg-blues mt-2 hover:bg-blue-500">Daftar Sekarang</button>
                            </div>
                        </div>
                        <div className="my-3 mr-10">
                            <div className="bg-slate-400 h-60 w-52"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel