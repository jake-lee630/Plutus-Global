import React from "react";
import { Link } from "react-router-dom";


function importAll(r) {
    return r.keys().map(r)
}
const productImages = importAll(require.context('../images/product_images', false, /\.(png|jpe?g|svg)$/));
const productItems = [
    {name: "Howl's Moving Castle", href:"/Howl"},
    {name: "Kiki's Delivery Service", href:"/Kiki"},
    {name: "Princess Mononoke", href:"/Mono"},
    {name: "Ponyo", href:"/Ponyo"},
    {name: "Spirited Away", href:"/Spirit"},
    {name: "The Adventures of Totoro", href:"/Totoro"},
]

const productInfo = productItems.map(item => item.name)
const productLink = productItems.map(item => "/products" + item.href)

export default function ProductCard() {
    return (
        <>
        {/* Links lead to /prodcuts/"href" */}
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-x-2 gap-y-10">
                {productImages.map((img, index) => 
                    <div class="flex flex-col items-center">
                        <Link class="group" to={productLink[index]}>
                            <div class="bg-[white] w-[300px] h-[330px] p-2 m-2 rounded-md border-4 flex flex-col justify-between items-center group-hover:bg-3E97FF">
                                <div class="max-w-[270px] max-h-[270px] h-full w-full object-cover object-center border-2 rounded-sm">
                                    <img class="h-full w-full object-cover" key={index} src={img} alt={productInfo[index]}/>
                                </div>
                                <h1 class=" font-dmmono font-medium text-lg">{productInfo[index]}</h1>
                            </div>   
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
