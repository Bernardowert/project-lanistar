import { Button } from "@/components/button";
import { ContainerGRID } from "@/components/containerGRID";
import { AreaImage } from "./areaImage";

export function SectionHero(){
    return(
        <section className="bg-neutral-color-100 h-289.25 pt-47.25 overflow-hidden">
            <ContainerGRID className="flex items-start justify-between">
                 <div className="w-full max-w-148 relative z-20">
                     <h1 className="text-white font-light text-7xl">BE UNTOUCHABLE</h1>
                     <p className="text-white-900 text-2xl mt-6 mb-10">A polymorphic payment card for those who know influence is the only currency that matters.</p>
                     <Button>PRE-REGISTER NOW</Button>
                     <p className="mt-16 text-neutral-color-600 max-w-64.5"><strong className="font-semibold">COMING 2026</strong>: GET THE APP TO GET ON THE WAITLIST.</p>
                 </div>
                 <AreaImage/>
            </ContainerGRID>
        </section>
    )
}