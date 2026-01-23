import { ContainerGRID } from "@/components/containerGRID";
import { AreaGrid } from "./areaGrid";
import Image from "next/image";

export function SectionMoney(){
    return(
        <section 
        className
        =" z-10 h-250 relative pt-27.5
        bg-neutral-color-100 
        before:content-['']  before:absolute before:w-full before:h-full before:bottom-0 before:left-0 before:bg-money before:bg-bottom-left before:bg-no-repeat before:-z-10">
            <ContainerGRID className="flex items-start justify-between">
                <h2 className="text-40 font-medium text-neutral-color-400 max-w-87">CONTROL YOUR <span className="text-white">MONEY FLOW</span></h2>
                <AreaGrid/>
            </ContainerGRID>
            
        </section>
    )
}