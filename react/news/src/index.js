import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './apps/home';
import Awards from './apps/awards';
import Sidebar from './apps/reUseable/sidebar';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sidebar />}>
                    <Route index element={<Home />} />
                    <Route path="awards" element={<Awards />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
ReactDOM.render(<Index/>, document.getElementById('root'));




