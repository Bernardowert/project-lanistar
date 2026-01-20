import Image from "next/image";

import iconPowered01 from "@/assets/icons/icon-brand-01.png";
import iconPowered02 from "@/assets/icons/icon-brand-02.png";
import logoBtn from "@/assets/icons/icon-chat.svg";

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
    return (
          <div className="mt-14 pt-14 border-t border-white-900 text-sm text-neutral-color-300">
                     <p>Lanistar Ltd is a registered EMD agent (FRN: 902996) of Modulr FS Limited and may distribute and redeem e-money and provide payment services. Modulr FS Limited is authorised by the Financial Conduct Authority ("FCA") under the Electronic Money Regulations 2011 (FRN: 900573) for the issuing of electronic money and to provide payment services. Lanistar Limited ("Lanistar") is currently only carrying out pre-launch marketing in preparation for a future launch of Lanistar branded payment cards ("Cards"). Lanistar is finalising arrangements with various partner firms who are authorised and/or regulated (by the FCA and other overseas regulators) and the Cards will only be launched and go-live when those arrangements are in place.</p>
                      <div className="flex items-center justify-between mt-16">
                             <span className="font-medium">© 2021 Lanistar.com</span>
                             <div className="flex items-center gap-52.5">
                                     <div className="flex items-center gap-5">
                                         <span>Powered by</span>
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