import Image from "next/image";

import moneyIcon01 from "@/assets/icons/icon-money-01.png";
import moneyIcon02 from "@/assets/icons/icon-money-02.png";
import moneyIcon03 from "@/assets/icons/icon-money-03.png";
import moneyIcon04 from "@/assets/icons/icon-money-04.png";
import moneyIcon05 from "@/assets/icons/icon-money-05.png";
import { useTranslation } from "react-i18next";



const listing = [
    {
         iconSrc:moneyIcon01,
         iconAlt:'Icon money',
    },
    {
         iconSrc:moneyIcon02,
         iconAlt:'Icon money2',
    },
    {
         iconSrc:moneyIcon03,
         iconAlt:'Icon money3',
    },
    {
         iconSrc:moneyIcon04,
         iconAlt:'Icon money4',
    },
    {
         iconSrc:moneyIcon05,
         iconAlt:'Icon money5',
         style:'col-start-2'
    }
]

interface ListingProps{
    heading:string;
    text:string;
}

export function AreaGrid(){
    const {t} = useTranslation();

    const items = t('sectionMoney.cards', {returnObjects:true}) as ListingProps[];
    return(
        <div className="w-full max-w-200 grid grid-cols-2 gap-x-10.25 gap-y-7">
              {
                listing.map(({iconSrc, iconAlt, style}, index) => (
                    <div className={`text-lg text-white ${style ? style : ''}`} key={index}>
                        <div className="w-full max-w-10.5 h-10.5 flex items-center justify-center">
                            <Image
                            src={iconSrc}
                            alt={iconAlt}
                            title={iconAlt}
                            />
                        </div>
                        <h3 className="font-medium mt-6 mb-4.5">{items[index].heading}</h3>
                        <p className="font-light">{items[index].text}</p>
                    </div>
                ))
              }
        </div>
    )
}