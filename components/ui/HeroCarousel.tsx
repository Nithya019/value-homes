"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect, useCallback } from "react";
import Fade from "embla-carousel-fade";

type HeroCarouselProps = {
  slides: { src: string; alt: string }[];
};

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [
      Fade(),
      Autoplay({ delay: 3000, stopOnInteraction: true }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(1);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full h-100vh overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, idx) => {
          const isActive = idx === selectedIndex;
          return (
            <div
              key={idx}
              className="flex-[0_0_100%] relative min-h-screen"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx === 0}
                className={`object-cover transition-transform duration-5000 ease-in-out ${
                  isActive ? "scale-110" : "scale-100"
                }`}
              />
              <div className="absolute z-10 inset-0 flex flex-col justify-center items-center text-white text-center">
                <h1 className="text-7xl font-heading font-bold">Beautiful Interiors</h1>
                <p className="mt-3 text-xl md:text-2xl text-shadow-lg">Transform your home with elegant design</p>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
