import React from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
    return (
        <div className="bg-[url('./images/bg3.png')] min-h-screen flex p-8">
            <div className="bg-DCECFF bg-opacity-70 min-w-full mx-auto p-6">
                <ProductCard />
            </div>
        
        </div>
    )
}