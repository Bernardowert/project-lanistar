import { ContainerGRID } from "@/components/containerGRID";
import { CardSlides } from "./cardSlides";

export function SectionPayment(){
    return(
        <section className="overflow-hidden">
            <ContainerGRID>
                 <h2 className="text-40/tight text-neutral-color-400 font-medium uppercase max-w-123.5 text-center mx-auto mb-[5.6875rem]">One payment card per Account? <span className="text-neutral-color-200">Yeah no.</span></h2>
                  <CardSlides/>
            </ContainerGRID>
        </section>
    )
}