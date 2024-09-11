import React from "react";
import ProductCarousel from "../../components/Carousel";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

// Edit product array (name, images, description, details)
const product = {
    name: "Howl's Moving Castle",
    images: [
        {
            src: "https://cardinaltimes.org/wp-content/uploads/2021/04/Maya-Cole-Howls-Moving-Castle-Review.jpg",
            alt: "Movie Poster",
        },
        {
            src: "https://kottke.org/cdn-cgi/image/format=auto,fit=scale-down,width=1200,metadata=none/https://kottke.org/plus/misc/images/howl%20-%20whole%20cast.jpg",
            alt: "Characters",
        },
        {
            src: "https://www.screenslate.com/sites/default/files/images/howls-moving-castle.jpg",
            alt: "Castle",
        },
        {
            src: "https://www.highlandernews.org/wp-content/uploads/Radar_11_Howls-Moving-Castle-1_Courtesy-of-Toho-Company.jpg",
            alt: "Howl and Sophie",
        },
    ],
    description:
        "Howl's Moving Castle (Japanese: ハウルの動く城, Hepburn: Hauru no Ugoku Shiro) is a 2004 Japanese animated fantasy film written and directed by Hayao Miyazaki. It is loosely based on the 1986 novel by British author Diana Wynne Jones. The film was produced by Toshio Suzuki, animated by Studio Ghibli and distributed by Toho. The Japanese voice cast featured Chieko Baisho and Takuya Kimura, while the English dub version starred Jean Simmons, Emily Mortimer, Lauren Bacall, Christian Bale, Josh Hutcherson and Billy Crystal. The film is set in a fictional kingdom where both magic and early twentieth-century technology are prevalent, against the backdrop of a war with another kingdom. It tells the story of Sophie, a young milliner who is turned into an elderly woman by a witch who enters her shop and curses her. She encounters a wizard named Howl and gets caught up in his resistance to fighting for the king.",
    details: [
        "directed by Hayao Miyazaki",
        "based on Howl's Moving Castle by Diana Wynne Jones",
        "music by Joe Hisaishi",
        "produced by Studio Ghibli",
        "run time of 119 minutes"
    ],
};

// change function name
export default function Base() {
    return (
        <>
        <div>
            <Link to="/products">
                <button className="flex flex-row border-[black] border-2 rounded-lg mt-5 ml-5 hover:bg-3E97FF group">
                    <IoArrowBackCircleSharp className="size-10 text-3E97FF group-hover:text-DCECFF"/>
                    <p className="font-dmmono text-xl mx-4 my-auto">back</p>
                </button>
            </Link>
        </div>

        <div className="pb-[50px]">
            <div className="p-8">
                <ProductCarousel images={product.images} />
            </div>

            <div className="p-6">
                {/* Product info */}
                <div className="mx-auto md:max-w-3xl sm:max-w-2xl">
                    <h1 className="font-bold text-3xl text-center">
                        {product.name}
                    </h1>

                    <div className="pt-4 sm:p-4 md:p-3">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>
                            <p className="font-dmmono text-lg text-justify">
                                {product.description}
                            </p>
                        </div>
                        <div className="flex sm:flex-col md:flex-row mt-16">
                            <h3 className="text-2xl font-semibold p-3 mr-[25%] flex">
                                Details
                            </h3>
                            <div className="font-dmmono">
                                <ul role="list"
                                    className="list-disc space-y-2 pl-4 text-lg">
                                    {product.details.map((detail) => (
                                        <li key={detail}>
                                            <span> {detail} </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
