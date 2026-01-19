import { ContainerGRID } from "@/components/containerGRID";
import Image from "next/image";


import iconVerified from "@/assets/icons/icon-green-okay.svg";



const listing = [
    "Instant spending notifications across all your payment cards",
    "Free Lanistar-to-Lanistar payments",
    "Spend in multiple currencies",
    "Track your spending"
]

export function SectionCredit(){
    return(
        <section className="py-28">
              <ContainerGRID className="flex items-start gap-48">
                   <h2 className="text-6xl font-light text-neutral-color-300 max-w-lg"><span className="text-neutral-color-400">LANISTAR</span> PAYMENT CARD</h2>
                   <ul className="space-y-6 max-w-listingSection">
                      {
                         listing.map((item,index) => (
                             <li key={`${item} + ${index}`} className="flex items-start gap-6">
                                <div className="w-6 h-6 flex items-center justify-center bg-greenDark-900/10 rounded-full">
                                <Image
                                  src={iconVerified}
                                  alt="Icone verificado verde"
                                  title="Icone verificado verde"
                                />
                                </div> 
                               <p className="text-neutral-color-300 text-lg font-medium">{item}</p>
                             </li>
                         ))
                      }

                   </ul>
              </ContainerGRID>
        </section>
    )
}