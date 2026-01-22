

import Image from "next/image";
import card01 from "@/assets/card-download-01.png";
import phone from "@/assets/phone-download-01.png";
import mastercard from "@/assets/mastercard-01.png";

const images = [
    {
        src:card01,
        alt:"Card Lanistar",
        style:'top-1 left-0'
    },
    {
        src:phone,
        alt:"Phone",
        style:'bottom-48.25 right-0'
    },
    {
        src:mastercard,
        alt:"Mastercard Logo",
        style:'-top-5.75 right-0'
    }
]

export function AreaImage(){
    return(
        <div className="w-full max-w-155 h-171.75 relative">
              {
                images.map(({src,alt,style}, index) => (
                    <Image
                    src={src}
                    alt={alt}
                    title={alt}
                    key={`${src} + ${index}`}
                    draggable={false}
                    className={`absolute ${style}`}
                    />
                ))
              }
        </div>
    )
}