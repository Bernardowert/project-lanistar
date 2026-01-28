import card from "@/assets/mockup-card.svg";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function AreaImage(){
    return(
        <div className="-ml-208.75 h-265.5 -mt-38 relative -right-33 z-10">
             <Image
              src={card}
              alt={"Mockup cartões"}
             title={"Mockup cartões"}
              loading="eager"
             draggable={false}
             className="w-364.75"
             />
             <button aria-label="Botão para ir para baixo" className="absolute bottom-0 right-0 w-14 h-14 flex items-center justify-center rounded-full border-2 group border-white/30 transition ease-linear [&:hover,&:focus]:bg-white">
                  <ArrowDown width={30} color="#fff" className="group-hover:stroke-neutral-900 group-focus:stroke-neutral-900"/>
             </button>
        </div>
    )
}