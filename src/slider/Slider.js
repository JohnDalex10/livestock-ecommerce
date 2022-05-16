import { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {sliderData} from "./slider-data";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval;
          {/* Product */}
    let intervalTime = 4000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }
        
    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide]);

    return (
        <div className="w-full h-full max-h-1500">
            <AiOutlineArrowLeft className="bg-zinc-700 text-white w-7 h-7 cursor-pointer rounded absolute z-999 hover:bg-white hover:text-zinc-700 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 top-1/2 left-4" onClick={prevSlide}/>
            <AiOutlineArrowRight className="bg-zinc-700 text-white w-7 h-7 cursor-pointer rounded absolute z-999 hover:bg-white hover:text-zinc-700 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 top-1/2 right-4" onClick={nextSlide}/>

            {sliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "relative top-0 left-0 w-full h-full" : "slide"} key={index}>
                        {index === currentSlide && (
                            <>
                                <img src={slide.image} alt="slide" className="w-full sm:w-full h-full" ></img>
                                <div className="font-serif absolute top-96 left-20 w-1/2 p-12 bg-gray-900 animate-slide">
                                    <h2 className="text-white mb-4 text-3xl font-bold">{slide.heading}</h2>
                                    <p className="text-white mb-4">{slide.desc}</p>
                                    <hr className="h-0.5 bg-white"/>
                                    <br />
                                    <button className="transition ease-in-out delay-100 animate-bounce text-black p-3 bg-sky-300 hover:-translate-y-1 hover:scale-110 hover:font-semibold hover:text-white hover:bg-zinc-700 hover:animate-none hover:shadow-2xl duration-300">Order Now</button>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}

        </div>
    )
}

export default Slider