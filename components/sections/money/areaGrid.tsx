import Image from "next/image";

import moneyIcon01 from "@/assets/icons/icon-money-01.png";
import moneyIcon02 from "@/assets/icons/icon-money-02.png";
import moneyIcon03 from "@/assets/icons/icon-money-03.png";
import moneyIcon04 from "@/assets/icons/icon-money-04.png";
import moneyIcon05 from "@/assets/icons/icon-money-05.png";



const listing = [
    {
         iconSrc:moneyIcon01,
         iconAlt:'Icon money',
         title:'SEND MONEY FOR FREE',
         text:'Lanistar to Lanistar payments are free, so there’s no reason not to settle up.'
    },
    {
         iconSrc:moneyIcon02,
         iconAlt:'Icon money',
         title:'SPLIT BILLS',
         text:'Send, request and split money with anyone, anywhere instantly. And if they’re using Lanistar, you know it’s free as anything.'
    },
    {
         iconSrc:moneyIcon03,
         iconAlt:'Icon money',
         title:'TRACK YOUR SPENDING',
         text:'See and track your spending across all your payment cards in real-time. And if you want instant notifications when money comes in or out, we’ve got that too.'
    },
    {
         iconSrc:moneyIcon04,
         iconAlt:'Icon money',
         title:'24/7 MULTI-LINGUAL SUPPORT',
         text:'Need us? We’re up. 24/7 multilingual support, in-app or on WhatsApp. You’re in control.'
    },
    {
         iconSrc:moneyIcon05,
         iconAlt:'Icon money',
         title:'STACK, SWAP, DONT STOP',
         text:'One payment card per account? Yeah no. Our payment cards are polymorphic, meaning you can stack multiple cards in one, and swap between.',
         style:'col-start-2'
    }
]

export function AreaGrid(){
    return(
        <div className="w-full max-w-200 grid grid-cols-2 gap-x-10.25 gap-y-7">
              {
                listing.map(({iconSrc, iconAlt, title, text, style}, index) => (
                    <div className={`text-lg text-white ${style ? style : ''}`} key={index}>
                        <div className="w-full max-w-10.5 h-10.5 flex items-center justify-center">
                            <Image
                            src={iconSrc}
                            alt={iconAlt}
                            title={iconAlt}
                            />
                        </div>
                        <h3 className="font-medium mt-6 mb-4.5">{title}</h3>
                        <p className="font-light">{text}</p>
                    </div>
                ))
              }
        </div>
    )
}