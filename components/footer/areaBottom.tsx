'use client'

import Image from "next/image";

import iconPowered01 from "@/assets/icons/icon-brand-01.png";
import iconPowered02 from "@/assets/icons/icon-brand-02.png";
import logoBtn from "@/assets/icons/icon-chat.svg";
import { useTranslation } from "react-i18next";

const listing = [
    {
        src:iconPowered01,
        alt: 'Icone powered',
        title: 'Icone powered'
    },
    {
        src:iconPowered02,
        alt: 'Icone powered',
        title: 'Icone powered'
    }
]

export function AreaBottom() {

    const {t} = useTranslation();

    return (
          <div className="mt-14 pt-14 border-t border-white-900 text-sm text-neutral-color-300">
                     <p>{t("footer.bottomSide.textBig")}</p>
                      <div className="flex items-center justify-between mt-16">
                             <span className="font-medium">© 2026 Lanistar.com</span>
                             <div className="flex items-center gap-52.5">
                                     <div className="flex items-center gap-5">
                                         <span>{t("footer.bottomSide.poweredBy")}</span>
                                            <ul className="flex items-center gap-5">
                                                {
                                                    listing.map(({src,alt,title},index) => (
                                                        <li key={index}><Image src={src} alt={alt} title={title} /></li>
                                                    ))
                                                }
                                            </ul>
                                     </div>
                                     <button className="w-14 h-14 flex items-center justify-center bg-neutral-color-300 rounded-full border-4 border-white-800/20 transition-colors ease-linear [&:hover,&:focus]:bg-neutral-color-200">
                                        <Image
                                          src={logoBtn}
                                          alt="Icone chat"
                                          title="Icone chat"
                                        />
                                     </button>
                             </div>

                      </div>
         </div>
    )
}