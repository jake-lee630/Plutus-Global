import React from "react";
import { ReactTyped, Typed } from "react-typed";

export default function About() {
    return (
        <>
        <div className="w-full mx-auto text-center">
            <h1 className="text-3E97FF font-bold text-5xl">
                WE MAKE
            </h1>
            <div className="">
            <ReactTyped 
                className="font-dmmono font-semibold text-[black] text-6xl"
                startWhenVisible 
                strings={["STRECH/SHRINK WRAPS", "LABELS", "WOODEN PALLETS", "BOXES", "PRINTS"]}
                typeSpeed={50}
                backSpeed={75}
                loop
            />
            </div>
        </div>
        </>
    );
}