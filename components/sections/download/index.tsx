import { Button } from "@/components/button";
import { ContainerGRID } from "@/components/containerGRID";
import { AreaImage } from "./areaImage";

export function SectionDownload(){
    return(
        <section className="h-148.75 bg-download bg-no-repeat bg-center bg-cover pt-25.25">
             <ContainerGRID className="flex items-start justify-between">
                <div className="w-full max-w-lg">
                    <h2 className="text-6xl text-white-500/70">WHAT’S BETTER THAN AIR MILES? <span className="text-white-500">ACTUAL AIR.</span></h2>
                    <p className="text-white-400 text-lg mt-6.25 mb-8">We plant a tree for everyone who pre-registers and every new customer. And we’re planning to plant millions.</p>
                    <Button>PRE-REGISTER NOW</Button>
                </div>

                <AreaImage/>
             </ContainerGRID>
        </section>
    )
}