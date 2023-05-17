import React from "react";

import {
    Route,
    BrowserRouter,
    Navigate,
    Routes
} from "react-router-dom";

import Home from './views/page/dashboard/index'
import Event from "./views/page/event/card/index";
import Login from "./views/page/Auth/login";

const Rute = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate replace to='Home'/>}/>
                <Route path='home' element={<Home/>}/>
                <Route path="event" element={<Event/>}/>
                <Route path="login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rute