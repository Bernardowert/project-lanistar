import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"
import Image from "next/image"


import slide01 from "@/assets/slides/slide-01.png";
import slide02 from "@/assets/slides/slide-02.png";
import slide03 from "@/assets/slides/slide-03.png";
import slide04 from "@/assets/slides/slide-04.png";
import slide05 from "@/assets/slides/slide-05.png";

import slide06 from "@/assets/slides/slide-06.png";
import slide07 from "@/assets/slides/slide-07.png";
import slide08 from "@/assets/slides/slide-08.png";
import slide09 from "@/assets/slides/slide-09.png";
import slide10 from "@/assets/slides/slide-10.png";

import slide11 from "@/assets/slides/slide-11.png";
import slide12 from "@/assets/slides/slide-12.png";
import slide13 from "@/assets/slides/slide-13.png";
import slide14 from "@/assets/slides/slide-14.png";


const slides = [
    {
        velocity:10,
        direction:1,
        container:[
             {
                imgSrc:slide01,
                imgAlt:'Slide 01'
             },
             {
                imgSrc:slide02,
                imgAlt:'Slide 02'
             },
             {
                imgSrc:slide03,
                imgAlt:'Slide 03'
             },
             {
                imgSrc:slide04,
                imgAlt:'Slide 04'
             },
             {
                imgSrc:slide05,
                imgAlt:'Slide 05'
             }
        ] 
    },
    {
        velocity:10,
        direction:-1,
         container:[
             {
                imgSrc:slide06,
                imgAlt:'Slide 06'
             },
             {
                imgSrc:slide07,
                imgAlt:'Slide 07'
             },
             {
                imgSrc:slide08,
                imgAlt:'Slide 08'
             },
             {
                imgSrc:slide09,
                imgAlt:'Slide 09'
             },
             {
                imgSrc:slide10,
                imgAlt:'Slide 10'
             }
        ] 
    },
     {
        velocity:10,
        direction:1,
         container:[
             {
                imgSrc:slide11,
                imgAlt:'Slide 11'
             },
             {
                imgSrc:slide12,
                imgAlt:'Slide 12'
             },
             {
                imgSrc:slide13,
                imgAlt:'Slide 13'
             },
             {
                imgSrc:slide14,
                imgAlt:'Slide 14'
             },
             {
                imgSrc:slide05,
                imgAlt:'Slide 15'
             }
        ] 
    }
]


export function CardsMind(){
    return(
            <ScrollVelocityContainer className="space-y-9">

             {
                slides.map(({container, velocity, direction}, index) => (
                     <ScrollVelocityRow baseVelocity={velocity} direction={direction} key={`${index}`} >
                           {
                            container.map(({imgSrc,imgAlt}, index) => (
                                 <Image
                                 key={`${imgSrc + imgAlt + index}`}
                                src={imgSrc}
                                alt={imgAlt}
                                title={imgAlt}
                                className="mx-4"
                                />
                            ))
                           }
                     </ScrollVelocityRow>
                ))
             }
            {/* <ScrollVelocityRow baseVelocity={20} direction={1} >
                <Image
                 src={slide01}
                 alt="2"
                  className="mx-4"
                />
                <Image
                 src={slide02}
                 alt="2"
                className="mx-4"
                />
                <Image
                 src={slide03}
                 alt="2"
                className="mx-4"
                />
                <Image
                 src={slide04}
                 alt="2"
                className="mx-4"
                />
                <Image
                 src={slide05}
                 alt="2"
                className="mx-4"
                />
            </ScrollVelocityRow>
            <ScrollVelocityRow baseVelocity={20} direction={-1}>
                Velocity Scroll
            </ScrollVelocityRow> */}
            </ScrollVelocityContainer>
    )
}