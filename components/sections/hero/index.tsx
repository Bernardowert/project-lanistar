'use client'
import "@/i18n/index.ts"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/button";
import { ContainerGRID } from "@/components/containerGRID";
import { AreaImage } from "./areaImage";


export function SectionHero(){
   const {t} = useTranslation();
    return(
        <section className="bg-neutral-color-100 h-289.25 pt-47.25 overflow-hidden">
            <ContainerGRID className="flex items-start justify-between">
                 <div className="w-full max-w-148 relative z-20">
                     <h1 className="text-white font-light text-7xl">{t("sectionHero.titleHero")}</h1>
                     <p className="text-white-900 text-2xl mt-6 mb-10">{t("sectionHero.textHero")}</p>
                     <Button>{t("sectionHero.btnText")}</Button>
                     <p className="mt-16 text-neutral-color-600 max-w-64.5 uppercase"><strong className="font-semibold">{t("sectionHero.textStrong")}</strong>: {t("sectionHero.text2026")}</p>
                 </div>
                 <AreaImage/>
            </ContainerGRID>
        </section>
    )
}