'use client'

import { ContainerGRID } from "@/components/containerGRID";
import { CardSlides } from "./cardSlides";
import { useTranslation } from "react-i18next";

export function SectionPayment(){
    const {t, i18n} = useTranslation();

    const locale = i18n.language;
    return(
        <section className="overflow-hidden">
            <ContainerGRID>
                 <h2 className={`${locale !== 'en' ? 'text-4xl/normal' : 'text-40/tight'} text-neutral-color-400 font-medium uppercase max-w-123.5 text-center mx-auto mb-22.75`}>{t("sectionPayment.titleNormal")} <span className="text-neutral-color-200">{t("sectionPayment.titleBlack")}</span></h2>
                  <CardSlides/>
            </ContainerGRID>
        </section>
    )
}