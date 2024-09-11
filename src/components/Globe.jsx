import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";
import globeImage from "../images/nightearth.jpg";

const cities = [
    { // 0 CA
        city: "California",
        lat: 32.899889,
        lng: -117.072473,
        color: "#ffffff",
    },
    { // 1 GA
        city: "Georgia",
        lat: 33.748997,
        lng: -84.387985,
        color: "#ffffff",
    },
    { // 2 OH
        city: "Ohio",
        lat: 39.103119,
        lng: -84.512016,
        color: "#CD2E3A",
    },
    { // 3 FL
        city: "Florida",
        lat: 25.7741728,
        lng: -80.19362,
        color: "#CD2E3A",
    },
    { // 4 AL
        city: "Alabama",
        lat: 32.379886627197266,
        lng: -86.30636596679688,
        color: "#CD2E3A",
    },
    { // 5 MX1
        city: "Mexicali",
        lat: 32.6405247,
        lng: -115.474899,
        color: "#0047A0"
    },
    { // 6 MX2
        city: "Querétaro",
        lat: 20.8052225,
        lng: -99.8837376,
        color: "#0047A0"
    },
];

const to = ['#ffffff', "#cd2e3a"]
const from = ["#0047a0", "#ffffff"]

const arcs = [
    { // 0 > 1
        startLat: cities[0].lat,
        startLng: cities[0].lng,
        endLat: cities[1].lat,
        endLng: cities[1].lng,
        color: "#ffbe0b",
        arcAltitude: 0.3,
    },
    { // 0 > 2
        startLat: cities[0].lat,
        startLng: cities[0].lng,
        endLat: cities[2].lat,
        endLng: cities[2].lng,
        color: to,
        arcAltitude: 0.1,
    },
    { // 0 > 3
        startLat: cities[0].lat,
        startLng: cities[0].lng,
        endLat: cities[3].lat,
        endLng: cities[3].lng,
        color: to,
        arcAltitude: 0.1,
    },
    { // 0 > 4
        startLat: cities[0].lat,
        startLng: cities[0].lng,
        endLat: cities[4].lat,
        endLng: cities[4].lng,
        color: to,
        arcAltitude: 0.1,
    },
    { // 1 > 2
        startLat: cities[1].lat,
        startLng: cities[1].lng,
        endLat: cities[2].lat,
        endLng: cities[2].lng,
        color: to,
        arcAltitude: 0.1,
    },
    { // 1 > 3
        startLat: cities[1].lat,
        startLng: cities[1].lng,
        endLat: cities[3].lat,
        endLng: cities[3].lng,
        color: to,
        arcAltitude: 0.1,
    },
    { // 1 > 4
        startLat: cities[1].lat,
        startLng: cities[1].lng,
        endLat: cities[4].lat,
        endLng: cities[4].lng,
        color: to,
        arcAltitude: 0.1,
    },
    { // 5 > 0
        startLat: cities[5].lat,
        startLng: cities[5].lng,
        endLat: cities[0].lat,
        endLng: cities[0].lng,
        color: from,
        arcAltitude: 0.2,
    },
    { // 6 > 0
        startLat: cities[6].lat,
        startLng: cities[6].lng,
        endLat: cities[0].lat,
        endLng: cities[0].lng,
        color: from,
        arcAltitude: 0.2,
    },
    { // 5 > 1
        startLat: cities[5].lat,
        startLng: cities[5].lng,
        endLat: cities[1].lat,
        endLng: cities[1].lng,
        color: from,
        arcAltitude: 0.2,
    },
    { // 6 > 1
        startLat: cities[6].lat,
        startLng: cities[6].lng,
        endLat: cities[1].lat,
        endLng: cities[1].lng,
        color: from,
        arcAltitude: 0.2,
    },
];


const MyGlobe = () => {
    const globeEl = useRef();
    useEffect(() => {
        // aim at continental US centroid
        globeEl.current.pointOfView({ lat: 30, lng: -98.5, altitude: 2 });
      }, []);
    return (
        <div className="flex items-center mx-auto border-[white] border-2 w-[504px] h-[504px]">
            <Globe
                ref={globeEl}
                width={500}
                height={500}
                globeImageUrl={globeImage}
                htmlElementsData={cities}
                htmlElement={(data) => {
                    const { city, color } = data;
                    const element = document.createElement("div");
                    element.style.color = color;
                    element.innerHTML = `
                        <div>
                            <svg viewBox="0 0 24 24" style="width:24px;margin:0 auto;">
                            <path fill="currentColor" fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" />
                            </svg>
                            <strong style="font-size:10px;text-align:center">${city}</strong>
                        </div>`;
                    return element;
                }}
                arcsData={arcs}
                arcColor="color"
                arcStroke={0.5}
                arcDashGap={0.02}
                arcDashLength={0.25}
                arcAltitude="arcAltitude"
                arcDashAnimateTime={5000}
            />
        </div>
    );
};

export default MyGlobe;
