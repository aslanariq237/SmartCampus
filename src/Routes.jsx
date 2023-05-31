import React from "react";

import {
    Route,
    BrowserRouter,
    Navigate,
    Routes
} from "react-router-dom";

import Home from './views/page/dashboard/index'
import Event from './views/page/event/detailEvent'
import Login from "./views/page/Auth/login";
import Admin from './views/page/adminDashboard'

const Rute = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate replace to='Home'/>}/>
                <Route path='home' element={<Home/>}/>
                <Route path="event" element={<Event/>}/>
                <Route path="login" element={<Login />}/>
                <Route path="admin-dashboard" element={<Admin />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rute