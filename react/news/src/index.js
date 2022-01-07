import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './apps/Home';
import Sidebar from'./apps/Sidebar'

export default function Mainbar() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route index element={Home()} />
                    <Route path="Home" element={Home()} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(Mainbar(), document.getElementById('root'));
ReactDOM.render(Sidebar(), document.getElementById('root'));


