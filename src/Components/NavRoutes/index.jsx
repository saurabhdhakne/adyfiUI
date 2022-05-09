import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Home';
import Blogs from '../Blogs';
import About from '../About';
import Netaji from '../Netaji';
import Contact from '../Contact';
import NotFound from '../NotFound';
import Portfolio from '../Portfolio';

const NavRoutes = () => {
    return ( <React.Fragment>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="Contact" element={<Contact />} />
                    <Route path="Blogs" element={<Blogs />} />
                    <Route path="Netaji" element={<Netaji />} />
                    <Route path="Portfolio" element={<Portfolio />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
    </React.Fragment> );
}
 
export default NavRoutes;