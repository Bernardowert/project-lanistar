'use client'

import Image from "next/image";
import Link from "next/link";
import { ContainerGRID } from "../containerGRID";

import { AreaBottom } from "./areaBottom";


import iconStar from "@/assets/icons/star.png";
import googleIcon from "@/assets/icons/google-icon.png";
import appleLogo from "@/assets/icons/apple-icon.png";


import influencersLogo from "@/assets/icons/icon-influencers.svg";
import investorLogo from "@/assets/icons/icon-investor.svg";

import iconInstagram from "@/assets/icons/icon-instagram.png";
import iconYoutube from "@/assets/icons/icon-youtube.png";
import iconTwitter from "@/assets/icons/icon-twitter.png";
import { useTranslation } from "react-i18next";

const downloads = [
    {
      src:googleIcon,
      alt:'Icon Google'
    },
    {
      src:appleLogo,
      alt:'Icon Apple'
    }
]


const influencers = [
    influencersLogo,
    investorLogo
]


const socials = [
    {
        src: iconInstagram,
        alt: 'icon instagram'
    },
    {
        src: iconYoutube,
        alt: 'icon Youtube'
    },
    {
        src: iconTwitter,
        alt: 'icon Twitter'
    }
]

interface InvestorProps{
    label:string;
    href:string;
    alt:string;
}

interface NavListingProps{
    label:string;
    href:string;
}

export function Footer(){
    const {t} = useTranslation();

    const investors = t('footer.topSide.investors', {returnObjects: true}) as InvestorProps[]
    const navListing = t('footer.topSide.navListing', {returnObjects:true}) as NavListingProps[]

    return(
        <footer className="pt-27.5 pb-6">
            <ContainerGRID>
                 <div className="flex items-start justify-between">
                        <div className="w-full max-w-72 flex items-start justify-between">
                             <Image
                               src={iconStar}
                               alt="Icon Star"
                               title="Icon Star"
                             />
                             <div className="flex items-start flex-col gap-4">
                                  {
                                       downloads.map(({src,alt}, index) => (
                                          <a href="#" key={`${src} + ${index}`} className="px-5 w-full inline-flex items-center h-14 border rounded-md border-neutral-color-500 transition-colors ease-linear [&:hover,&:focus]:bg-white-900" target="_blank" rel="noreferrer noopener">
                                            <Image
                                            src={src}
                                            alt={alt}
                                            title="Icon google"
                                            />
                                          </a>
                                       ))
                                  }
                             </div>
                            
                        </div>

                        <nav className="flex items-start w-full max-w-footerNav justify-between">
                           <div className="space-y-6">
                             {
                                investors.map(({alt,label}, index) => (
                                    <Link href="#" key={`${alt + label} + ${index}`} className="flex items-center gap-4">
                                        <Image
                                            src={influencers[index]}
                                            alt={alt}
                                            title={alt}
                                        />
                                        <span className="text-xl text-neutral-color-300 transition ease-linear [&:hover,&:focus]:text-neutral-color-100">{label}</span>
                                    </Link>
                                ))
                            }
                           </div>

                            <div className="grid grid-cols-2 gap-y-8">
                                   {
                                      navListing.map(({label,href}, index) => (
                                          <Link href={href} key={index} className="justify-self-start text-neutral-color-300 transition ease-linear [&:hover,&:focus]:text-neutral-color-100">
                                             {label}
                                          </Link>
                                      ))
                                   }
                            </div>
                        </nav>

                        <ul className="flex items-center gap-8">
                             {
                                 socials.map(({src,alt}, index) =>(
                                     <li key={`${src} + ${index}`}>
                                         <a href="#" target="_blank" rel="noreferrer noopener" className="w-5 h-5 flex items-center justify-center transition-opacity ease-linear [&:hover,&:focus]:opacity-80">
                                             <Image
                                                src={src}
                                                alt={alt}
                                                title={alt}
                                             />
                                         </a> 
                                     </li>
                                 ))
                             }
                        </ul>
                 </div>
                
                <AreaBottom/>
            </ContainerGRID>
        </footer>
    )
}