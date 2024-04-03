import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/home' element={<Dashboard />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing
