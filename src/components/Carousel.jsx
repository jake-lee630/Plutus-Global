import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProductCarousel({ images }) {
    return (
        <div className="pb-[30px] relative">
            <Carousel
                className="w-[400px] h-[300px] min-[850px]:w-[800px] min-[850px]:h-[600px] mx-auto my-auto border-2 rounded-md"
                additionalTransfrom={0}
                arrows
                centerMode={false}
                containerClass="container"
                infinite
                renderDotsOutside
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024,
                        },
                        items: 1,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0,
                        },
                        items: 1,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464,
                        },
                        items: 1,
                    },
                }}
                rtl={false}
                showDots
                slidesToSlide={1}
            >
                {images.map((img, index) => (
                    <div className="mx-auto h-full bg-[black] flex justify-center">
                        <img
                            className="object-contain h-[300px] min-[850px]:h-[600px]"
                            key={index}
                            src={img.src}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
