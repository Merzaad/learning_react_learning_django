import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from './apps/news';
import Offers from './apps/offers';
import Awards from './apps/awards';
import Sidebar from './apps/reUseable/sidebar';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sidebar />}>
                    <Route index element={<News />} />
                    <Route path="awards" element={<Awards />} />
                    <Route path="offers" element={<Offers />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
ReactDOM.render(<Index/>, document.getElementById('root'));


/*
     <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sidebar />}>
                    <Route index  element={<Home />} />
                    <Route path="awards" element={<Awards />} />
                    <Route path="offers" element={<Offers />} />
                </Route>
            </Routes>
        </BrowserRouter>

*/