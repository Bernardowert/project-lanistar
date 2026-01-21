import Image from "next/image";

import { Button } from "@/components/button";
import { ContainerGRID } from "@/components/containerGRID";


import iconSecurity01 from "@/assets/icons/icon-security-01.png";
import iconSecurity02 from "@/assets/icons/icon-security-02.png";
import iconSecurity03 from "@/assets/icons/icon-security-03.png";
import iconSecurity04 from "@/assets/icons/icon-security-04.png";
import { AreaCardSlide } from "./areaCardSlide";

const listing = [
    {
        iconSrc:iconSecurity01,
        iconAlt: 'Icon shopping',
        text: 'Nlitz on-line shopping more securely with dynamic CVV2'
    },
    {
        iconSrc:iconSecurity02,
        iconAlt: 'icon money',
        text: 'You control your money, it doesn’t control you'
    },
    {
        iconSrc:iconSecurity03,
        iconAlt: 'icon dynamic',
        text: 'Securely with dynamic CVV2'
    },
     {
        iconSrc:iconSecurity04,
        iconAlt: 'icon Anti-hacker',
        text: 'Ant-hacker technology'
    }
]

export function SectionSecurity(){
    return(
        <section className="pb-34">
            <ContainerGRID className="flex items-center justify-between border-t-2 pt-31">
                 <div className="w-full max-w-133">
                      <h2 className="text-40 font-medium text-neutral-color-400">A SECURITY DETAIL FOR YOUR <span className="text-neutral-color-300">BANK DETAILS</span></h2>
                      <p className="text-lg font-medium text-neutral-color-300 mt-6 mb-10">The most secure payment card in the world. Load up to 8 payment cards and get one-time PINs straight from the keypad</p>
                       <ul className="space-y-8 mb-12">
                           {
                             listing.map(({iconSrc, iconAlt, text}, index) => (
                                <li key={`${iconAlt} + ${index}`} className="flex items-center gap-4">
                                    <div className="w-full max-w-6 flex items-center justify-center">
                                         <Image
                                          src={iconSrc}
                                          alt={iconAlt}
                                          title={iconAlt}
                                         />
                                    </div>
                                    <span className="text-lg text-neutral-color-300 font-medium">{text}</span>
                                </li>
                             ))
                           }
                       </ul>
                      <Button>SPEAKING OF DETAILs</Button>
                 </div>
                 <AreaCardSlide/>
            </ContainerGRID>
        </section>
    )
}