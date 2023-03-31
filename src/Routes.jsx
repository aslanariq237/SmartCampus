import React from "react";

import {
    Route,
    BrowserRouter,
    Navigate,
    Routes
} from "react-router-dom";

import Home from './views/page/dashboard/index'
import Event from "./views/page/event/card/index";

const Rute = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Navigate replace to='home'/>}/>
                <Route path='home' element={<Home/>}/>
                <Route path="event" element={<Event/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rute