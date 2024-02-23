"use client";
import {
  CaretLeft,
  CaretRight,
  DotOutline,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useState } from "react";

const Slider = ({ images, title, titleHref }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const limitedImages = images.slice(0, 4);

  return (
    <section className="max-w-full md:max-w-[1400px] h-[60vh] md:h-[780px] w-full m-auto py-16 px-4 relative group">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      <figure
        className="w-full h-full rounded-2xl bg-cover bg-center duration-500"
        style={{
          backgroundImage: `url(${images[currentIndex].image})`,
        }}
      ></figure>
      <nav>
        <button className="hidden md:flex group-hover:flex absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-dark-primary text-dark-text cursor-pointer">
          <CaretLeft
            size={30}
            onClick={prevSlide}
            aria-label="Previous slide"
          />
        </button>
        <button className="hidden md:flex group-hover:flex absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-dark-primary text-dark-text cursor-pointer">
          <CaretRight size={30} onClick={nextSlide} aria-label="Next slide" />
        </button>
      </nav>
      <div className="flex top-4 justify-center py-2">
        {limitedImages.map((images, index) => (
          <button
            key={index}
            className="text-2xl cursor-pointer text-light-text dark:text-dark-text"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index}`}
          >
            <DotOutline size={30} weight="fill" />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Slider;
