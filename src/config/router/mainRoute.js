import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideBar from '../../components/module/sideBar'
import Home from "../../pages/home/";
import About from "../../pages/about/index";
import Contact from "../../pages/contact/index";
import Detail from "../../pages/detail/index"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<SideBar><Home /></SideBar>} />
                <Route exact path="/about" element={<SideBar><About /></SideBar>} />
                <Route exact path="/contact" element={<SideBar><Contact /></SideBar>} />
                <Route exact path="/detail/:id" element={<SideBar><Detail /></SideBar>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;