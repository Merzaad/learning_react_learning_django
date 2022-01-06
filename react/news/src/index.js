import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './apps/Home';

export default function test() {
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

ReactDOM.render(test(), document.getElementById('root'));

