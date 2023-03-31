import React from "react";

function Card(params){

    const list = [
        {
            judul: 'OutBond With CS',
            date: "26-12-2004",
            desc: 'Pada Tanggal 12 Februari untuk semua Computer Science Kita mengadakan Acara OutBond',
            place: 'Binus Kemanggisan'
        },
        {
            judul: 'UTS Minggu Depan',
            date: "20-10-2014",
            desc: 'Pada Tanggal 12 april akan di adakan UTS(Ulangan Tengah Semester), Semangat!!',
            place: 'Binus Kemanggisan'
        },
        {
            judul: 'Playing Skate',
            date: "31-15-2020",
            desc: 'Pada Tanggal 100 harian akan diadakan skating yang diikuti oleh semua binus',
            place: 'Binus Kemanggisan'
        },
        {
            judul: 'Playing Soccer',
            date: "31-15-2020",
            desc: 'Pada Tanggal 100 harian akan diadakan skating yang diikuti oleh semua binus',
            place: 'Binus Kemanggisan'
        },
        {
            judul: 'Playing Soccer',
            date: "31-15-2020",
            desc: 'Pada Tanggal 100 harian akan diadakan skating yang diikuti oleh semua binus',
            place: 'Binus Kemanggisan'
        },
        {
            judul: 'Playing Soccer',
            date: "31-15-2020",
            desc: 'Pada Tanggal 100 harian akan diadakan skating yang diikuti oleh semua binus',
            place: 'Binus Kemanggisan'
        },
        {
            judul: 'Playing Soccer',
            date: "31-15-2020",
            desc: 'Pada Tanggal 100 harian akan diadakan skating yang diikuti oleh semua binus',
            place: 'Binus Kemanggisan'
        },
        {
            judul: 'Playing Soccer',
            date: "31-15-2020",
            desc: 'Pada Tanggal 100 harian akan diadakan skating yang diikuti oleh semua binus',
            place: 'Binus Kemanggisan'
        },
    ]
    return(
        <React.Fragment>
            <div className="c">
                <div className="flex justify-center bg-red-100">
                    <h1 className="font-semibold text-slate-400 text-2xl">Event</h1>
                </div>
                <div className="list flex flex-wrap-reverse justify-between mt-4 mx-10 col-span-3">
                    {list.map((li, index) =>(
                        <div className="card bg-slate-100 rounded-md p-3 w-80 h-48 mb-4" key={index}>
                        <div className="card-head flex">
                            <div className="w-24 h-24 bg-blue-300"></div>
                            <p className="font-semibold">{(li.judul)}</p>
                        </div>
                        <div className="card-body mt-2">
                            <p className="text-sm line-clamp-2 hover:line-clamp-none">{(li.desc)}</p>
                        </div>
                        <div className="card-footer flex justify-between mt-2">
                            <p className="text-xs">{(li.place)}</p>
                            <p>|</p>
                            <p className="text-xs">{(li.date)}</p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card