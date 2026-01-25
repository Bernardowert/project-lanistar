'use client'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

import cardSlide01 from "@/assets/card-slide-01.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function CardSlides() {
  const [api, setApi] = useState<CarouselApi>();
  const [index, setIndex] = useState(2);

  const contentRef = useRef<HTMLDivElement>(null);

  const cards = [
    cardSlide01,
    cardSlide01,
    cardSlide01,
    cardSlide01,
    cardSlide01,
  ];

  // garante overflow visível no container do carousel
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.parentElement?.style.setProperty('overflow', 'visible');
    }
  }, []);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
  }, [api]);

  const getCardClasses = (i: number) => {
    const offset = i - index;

    if (offset === 0) {
      return `
        scale-100
        rotate-y-0
        blur-0
        z-20
      `;
    }
    if (offset === -1) {
      return `
        scale-90
        rotate-y-[-53deg]
        blur-sm
        z-10
      `;
    }

    if (offset === 1) {
      return `
        scale-90
        rotate-y-[18deg]
        blur-sm
        z-10
      `;
    }

    return `
      scale-75
      ${offset < 0 ? '-rotate-y-24' : 'rotate-y-24'}
      blur-md
      z-0
    `;
  };

  return (
    <Carousel
      className="w-full relative"
      setApi={setApi}
      opts={{
        align: 'center',
        startIndex: 2,
        skipSnaps: false,
        containScroll: false,
      }}
    >
      <CarouselContent
        ref={contentRef}
        className="
          flex gap-4
          overflow-visible
          px-[calc(50%-8rem)]
          perspective-distant
          transform-3d
        "
      >
        {cards.map((card, i) => (
          <CarouselItem
            key={i}
            className={`
              shrink-0 w-64 h-110
              transition-all duration-500 ease-out
              transform-style-preserve-3d
              
              ${getCardClasses(i)}
            `}
          >
            <Image
              src={card}
              alt={`Card ${i + 1}`}
              className="mx-auto rounded-xl shadow-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-30" />
      <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-30" />
    </Carousel>
  );
}
