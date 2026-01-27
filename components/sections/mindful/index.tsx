import { ContainerGRID } from "@/components/containerGRID";
import { CardsMind } from "./cardsMind";
import Image from "next/image";


import iconInstagram from "@/assets/icons/icon-blue-instagram.png";

export function SectionMindFul(){
    return(
        <section className="pt-34">
            <ContainerGRID>
                  <div className="mb-20.5 flex items-center justify-between">
                       <h2 className="text-40 font-medium text-neutral-color-300"><span className="text-neutral-color-400">GET</span> MINDFUL</h2>
                       <a href="#" rel="noreferrer noopener" className="flex items-center gap-3 group">
                        <Image
                         src={iconInstagram}
                         alt="Icone do Instagram em cor azul"
                         title="Instagram"
                        />
                         <span className="font-semibold text-neutral-color-400 uppercase transition-colors ease-linear group-hover:text-blue-dark-800 group-focus:text-blue-dark-800">Follow us</span>
                       </a>
                  </div>
                  <CardsMind/>
                 
            </ContainerGRID>
        </section>
    )
}