'use client'

import { Button } from "@/components/button";
import { ContainerGRID } from "@/components/containerGRID";
import { AreaImage } from "./areaImage";
import { useTranslation } from "react-i18next";

export function SectionDownload(){
    const {t, i18n} = useTranslation();

    const locale = i18n.language;
    return(
        <section className="h-148.75 bg-download bg-no-repeat bg-center bg-cover pt-25.25 relative overflow-hidden">
             <ContainerGRID className="flex items-start justify-between">
                <div className="w-full max-w-lg">
                    <h2 className={`${locale !== 'en' ? 'text-5xl' : 'text-6xl'} text-white-500/70`}>{t("sectionDownload.title")} <span className="text-white-500">{t("sectionDownload.titleWhite")}</span></h2>
                    <p className="text-white-400 text-lg mt-6.25 mb-8">{t("sectionDownload.text")}</p>
                    <Button>{t("sectionDownload.buttonTxt")}</Button>
                </div>

                <AreaImage/>
             </ContainerGRID>
        </section>
    )
}