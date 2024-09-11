import React from "react";
import { Route, Routes } from "react-router-dom";

import AboutUs from "./AboutUs";
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import ThankYou from "./ThankYou";

// Product page imports
import Howl from "./productPages/Howl";
import Kiki from "./productPages/Kiki";

export default function Main() {
    return (
        <>
            <Routes>{/* The Switch decides which component to show based on the current URL.*/}
                <Route path="" element={<Home />}/>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products/Howl" element={<Howl />} />
                <Route path="/products/Kiki" element={<Kiki />} />
                <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
        </>
    );
}
