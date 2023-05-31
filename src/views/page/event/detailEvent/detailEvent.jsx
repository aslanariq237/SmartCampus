import axios from "axios";
import React from "react";
import { urlEvent } from "../../../../url";

const DetailEvent = () => {
    const [event, setEvent] = React.useState([])

    React.useEffect(() => {
        axios.get(urlEvent).then((response) => {
            setEvent(response.data)
            console.log('its-worked')
        })
    }, [])

    return (
        <div className="px-2 ml-9 py-2">
            <div className="top">
                <p className="font-semibold text-xl text-slate-500">Event</p>
            </div>
            <div className="detail mt-4 flex gap-2">
                {event.map(event => (
                    <div className="card w-72 font-poppins border-2 rounded-xl border-bg3">
                        <div className="card-header">
                            <div className="w-72 h-52 bg-bg4"></div>
                        </div>
                        <div className="card-body px-2 py-2">
                            <div className="first text-comm-font">
                                <p className="text-bg2 font-semibold">{event.judul_event}</p>
                                <p className="text-sm">{event.desc_event}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xs">{event.place_event}</p>
                                <p className="text-xs">{event.date_event}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {/* {event.filter(i => i.id == id).map((i,index) => {
                    <div className="">
                        <p>{i.judul_event}</p>
                    </div>
                })} */}
            </div>
        </div>
    )
}
export default DetailEvent