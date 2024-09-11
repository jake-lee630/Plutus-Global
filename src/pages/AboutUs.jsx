import React from "react";
import About from "../components/HeroAbout";
import plutusLogo from "../images/logo.png";
import MyGlobe from "../components/Globe";

export default function AboutUs() {
    return (
        <>
            <div className="bg-DCECFF border-t-2 border-b-2 p-10">
                <h1 className="font-dmmono text-5xl text-center font-black">
                    About Plutus Global Inc
                </h1>
            </div>

            {/* WHO WE ARE (BRAND STORY + WHO YOU SERVE) */}
            <div className="font-medium">
                <div className="bg-3E97FF flex p-10 items-baseline justify-center">
                    <div className="min-w-[80%] flex items-top justify-center">
                        <div className="flex flex-col min-[1001px]:flex-row justify-center align-middle ">
                            <img className="min-w-1/2"
                                src={plutusLogo}
                                alt="Plutus Global Inc Logo"
                            />
                            <div className=" p-6">
                                <sub className="text-3xl">THE</sub>
                                <h1 className="text-6xl font-bold pb-3">
                                    START
                                </h1>
                                <h1 className="font-dmmono text-2xl text-[black]">
                                    Taking a risky venture,{" "}
                                    <b>CEO Kyung Lee (KK)</b> set off to
                                    establish <b>Plutus Global Inc</b>, a
                                    packaging materials supplier. Looking to
                                    help connect manufacturers with distributors
                                    and retailers, we assist in the deliveries,
                                    orders and manufacturing of packaging
                                    materials.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PRODUCTS & SERVICES (WHAT WE OFFER) */}
            <div className="font-medium">
                <div className="bg-DCECFF flex p-10 items-baseline justify-center">
                    <div className="min-w-[80%] flex items-top justify-center">
                        <div className="flex flex-col min-[1001px]:flex-row-reverse justify-center align-middle ">
                            <img className=""
                                src={plutusLogo}
                                alt="Plutus Global Inc Logo"
                            />
                            <div className="p-6">
                                <sub className="text-3xl">GUARANTEEING</sub>
                                <h1 className="text-6xl font-bold pb-3">
                                    VALUE
                                </h1>
                                <h1 className="font-dmmono text-2xl text-[black]">
                                    <b>Plutus Global Inc</b> offers a
                                    variety of packaging materials as well
                                    as accounting consulting services.
                                    Following a belief in ensuring quality,
                                    maintaining punctuality, and providing
                                    cost effective solutions, we guarantee
                                    customer satisfaction with innovative
                                    solutions.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* LOCATIONS (HOW WE OPERATE) */}
            <div className="font-medium">
                <div className="bg-3E97FF flex p-10 items-baseline justify-center">
                    <div className="min-w-[80%] flex items-top justify-center">
                        <div className="flex flex-col min-[1001px]:flex-row justify-center align-middle ">
                            <MyGlobe />
                            <div className=" p-6">
                                <sub className="text-3xl">OUR</sub>
                                <h1 className="text-6xl font-bold pb-3">REACH
                                </h1>
                                <h1 className="font-dmmono text-2xl text-[black]">
                                    Located mainly in San Diego, CA and Atlanta, GA, Plutus looks to expand globally. With partners throughout the nation like in Georgia, Ohio, Alabama, and Miami and manufacturers based in Mexico, our reach transcends borders.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
