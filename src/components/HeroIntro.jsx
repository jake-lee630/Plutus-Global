import React from "react";
import { ReactTyped, Typed } from "react-typed";

export default function Intro() {
    return (
        <>
        <div className="w-full mx-auto text-center">
            <h1>
                WE ARE 
            </h1>
            <div>
            <ReactTyped 
                className="font-dmmono font-semibold text-[black]"
                startWhenVisible 
                strings={["PLUTUS", "GLOBAL", "LOCAL"]}
                typeSpeed={140}
                backSpeed={140}
                loop
            />
        </div> 
        </div>
        </>
    );
}