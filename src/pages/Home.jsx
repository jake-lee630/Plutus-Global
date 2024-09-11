import React from "react";
import Intro from "../components/HeroIntro";

export default function Home() {
    return (
        <div className="text-[white] text-[48px] bg-[#333]">
            <div className="flex justify-center content-center">
                <p>WELCOME</p>
            </div>
            <div className="flex justify-around ">
                <Intro />
            </div>
        </div>
    )
}