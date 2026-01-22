'use client'

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

import getMovingIcon from "@/assets/getMoving-02.png";
import cardLanistar from "@/assets/lanistar-card.png";
import iconPoly from "@/assets/polymorphic-icon.png";
import { useEffect, useState } from "react";
export function AreaCardSlide(){
    const [api, setApi] = useState<CarouselApi>();
    const [count, setCount] = useState(0);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if(!api) return;
           
      setCount(api.scrollSnapList().length)

      setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })

    }, [api])
    return(
        <div className="w-full max-w-121.75 flex items-center gap-17.75">
                <Carousel setApi={setApi} opts={{
                    loop:true
                    
                }} orientation="vertical" className="w-full h-145.5">
                    <CarouselContent className="h-145.5 mt-0 space-y-4 ">
                        <CarouselItem className="w-full h-full relative mt-0 flex items-center justify-center bg-blue-800 rounded-3xl">
                                <Image
                                src={getMovingIcon}
                                alt='Icon getMoving'
                                title="getMoving"
                                className="absolute z-10 top-12.75"
                                />
                                <Image
                                src={cardLanistar}
                                alt='Icon cardLanistar'
                                title="getMoving"
                                className="absolute z-20"
                                />
                                <div className="absolute bottom-2.25 flex items-center gap-4.25 bg-white-700 h-20 px-9 rounded-xl">
                                    <Image
                                        src={iconPoly}
                                        alt="Icon polymorphic"
                                        title="Polymorphic"
                                    />
                                    <span className="max-w-22.5 text-sm text-blue-900 font-medium">LANISTAR POLYMORPHIC</span>
                                </div>
                        </CarouselItem>
                        <CarouselItem className="w-full h-full relative mt-0 flex items-center justify-center bg-blue-800 rounded-3xl">
                                <Image
                                src={getMovingIcon}
                                alt='Icon getMoving'
                                title="getMoving"
                                className="absolute z-10 top-12.75"
                                />
                                <Image
                                src={cardLanistar}
                                alt='Icon cardLanistar'
                                title="getMoving"
                                className="absolute z-20"
                                />
                                <div className="absolute bottom-2.25 flex items-center gap-4.25 bg-white-700 h-20 px-9 rounded-xl">
                                    <Image
                                        src={iconPoly}
                                        alt="Icon polymorphic"
                                        title="Polymorphic"
                                    />
                                    <span className="max-w-22.5 text-sm text-blue-900 font-medium">LANISTAR POLYMORPHIC</span>
                                </div>
                        </CarouselItem>
                      <CarouselItem className="w-full h-full relative mt-0 flex items-center justify-center bg-blue-800 rounded-3xl">
                                <Image
                                src={getMovingIcon}
                                alt='Icon getMoving'
                                title="getMoving"
                                className="absolute z-10 top-12.75"
                                />
                                <Image
                                src={cardLanistar}
                                alt='Icon cardLanistar'
                                title="getMoving"
                                className="absolute z-20"
                                />
                                <div className="absolute bottom-2.25 flex items-center gap-4.25 bg-white-700 h-20 px-9 rounded-xl">
                                    <Image
                                        src={iconPoly}
                                        alt="Icon polymorphic"
                                        title="Polymorphic"
                                    />
                                    <span className="max-w-22.5 text-sm text-blue-900 font-medium">LANISTAR POLYMORPHIC</span>
                                </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
               

               <div className="space-y-3.5">
                    {
                    count && count > 1 && (
                        Array.from({ length: count }).map((_, index) => (
                            <button aria-label={`Botão do slide posição: ${index} de ${count}`} key={`${index}`} onClick={() => api?.scrollTo(index)} className={`
                w-1 h-8 block rounded-full transition-all duration-300
                ${current === index ? "bg-blue-dark-800" : " bg-blue-dark-800/40"}
              `}>
                                 
                            </button>
                            
                        ))
                    )
                }
               </div>
        </div>
    )
}