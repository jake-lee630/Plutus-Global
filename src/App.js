import React from "react";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import ScrollButton from "./components/Scroll";

export default function App() {
  return (
    <div className="App">
        <Navbar />
        <Main />
        <ScrollButton />
    </div>    
  );
}

