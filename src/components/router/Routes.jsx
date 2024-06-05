import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ButtonAppBar from '../Navbar';
import Changer from '../Changer';

function RouterCmp() {
    return (
        <BrowserRouter>
            <Toaster />
            <Routes>
                <Route path="/" element={<ButtonAppBar />} /> {/* Default route */}
                <Route path="/changer" element={<Changer />} />
            </Routes>
        </BrowserRouter>
    );
}
export default RouterCmp; 