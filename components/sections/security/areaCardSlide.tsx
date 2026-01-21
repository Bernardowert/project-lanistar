

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

import getMovingIcon from "@/assets/getMoving-02.png";
import cardLanistar from "@/assets/lanistar-card.png";
import iconPoly from "@/assets/polymorphic-icon.png";
export function AreaCardSlide(){
    return(
        <Carousel opts={{
            loop:true
        }} orientation="vertical" className="w-full max-w-104 h-145.5">
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
            </CarouselContent>
        </Carousel>
    )
}