import { ContainerGRID } from "@/components/containerGRID";


import global from '@/assets/icons/icon-global-white.png';
import card from '@/assets/icons/card-currency.png';
import dollar from '@/assets/icons/dollar-icon.png';
import Image from "next/image";



const listing = [
    {
        src:global,
        alt: 'Icon global',
        text: 'ACCEPTED AT MORE THAN 38M TILLS'
    },
     {
        src:card,
        alt: 'Icon card',
        text: 'Spend in multiple currencies'
    },
     {
        src:dollar,
        alt: 'Icon dollar',
        text: 'THATS IT! free money transfers'
    }
]

export function SectionCurrency(){
    return(
        <section className="py-19.75 border-b border-neutral-color-600">
            <ContainerGRID className="flex items-center justify-between">
                  {
                    listing.map(({src, alt, text}, index) => (
                   <div className="flex items-center gap-8" key={`${src} + ${index}`}>
                        <div className="size-18 flex items-center justify-center bg-cardCurrency rounded-xl relative">
                               <Image
                                src={src}
                                alt={alt}
                                title={alt}
                               />
                        </div>
                        <span className="font-semibold max-w-41 uppercase">{text}</span>
                  </div>
                    ))
                  }
            </ContainerGRID>
        </section>
    )
}