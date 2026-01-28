'use client'

import Image from "next/image";

import { Button } from "@/components/button";
import { ContainerGRID } from "@/components/containerGRID";


import iconSecurity01 from "@/assets/icons/icon-security-01.png";
import iconSecurity02 from "@/assets/icons/icon-security-02.png";
import iconSecurity03 from "@/assets/icons/icon-security-03.png";
import iconSecurity04 from "@/assets/icons/icon-security-04.png";
import { AreaCardSlide } from "./areaCardSlide";
import { useTranslation } from "react-i18next";

const listing = [
    {
        iconSrc:iconSecurity01,
        iconAlt: 'Icon shopping',
    },
    {
        iconSrc:iconSecurity02,
        iconAlt: 'icon money',
    },
    {
        iconSrc:iconSecurity03,
        iconAlt: 'icon dynamic',
    },
     {
        iconSrc:iconSecurity04,
        iconAlt: 'icon Anti-hacker',
    }
]

export function SectionSecurity(){
    const {t, i18n} = useTranslation();

    const items = t('sectionSecurity.listingIcons', {returnObjects:true}) as string[];

    const locale = i18n.language;


    return(
        <section className="pb-34">
            <ContainerGRID className="flex items-center justify-between border-t-2 pt-31">
                 <div className="w-full max-w-133">
                      <h2 className={`${locale === 'pt' ? 'text-4xl/normal' : 'text-40'} font-medium text-neutral-color-400`}>{t('sectionSecurity.titleNormal')}<span className="text-neutral-color-300"> {t('sectionSecurity.titleGray')}</span></h2>
                      <p className="text-lg font-medium text-neutral-color-300 mt-6 mb-10">{t('sectionSecurity.text')}</p>
                       <ul className="space-y-8 mb-12">
                           {
                             listing.map(({iconSrc, iconAlt}, index) => (
                                <li key={`${iconAlt} + ${index}`} className="flex items-center gap-4">
                                    <div className="w-full max-w-6 flex items-center justify-center">
                                         <Image
                                          src={iconSrc}
                                          alt={iconAlt}
                                          title={iconAlt}
                                         />
                                    </div>
                                    <span className="text-lg text-neutral-color-300 font-medium">{items[index]}</span>
                                </li>
                             ))
                           }
                       </ul>
                      <Button>{t('sectionSecurity.buttonTxt')}</Button>
                 </div>
                 <AreaCardSlide/>
            </ContainerGRID>
        </section>
    )
}