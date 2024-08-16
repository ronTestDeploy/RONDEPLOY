import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components & layouts
import Footer from "./layouts/footer/footer"
import Header from "./layouts/header/header";

// pages
import HomePage from "./pages/Home/page"
import ReferralPage from "./pages/Referral/page"
import TasksPage from "./pages/Tasks/page"
import PartnerPage from "./pages/Partner/page";

import { ExContext } from "./context";

const App = ()=>{

    const data_context = useContext(ExContext)

    return(
        <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/referrals" element={<ReferralPage/>} />
                <Route path="/tasks" element={<TasksPage/>} />
                <Route path="/partner" element={<PartnerPage/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
        </>
    )  
}


export default App