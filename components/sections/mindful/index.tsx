'use client'
import { ContainerGRID } from "@/components/containerGRID";
import { CardsMind } from "./cardsMind";
import Image from "next/image";


import iconInstagram from "@/assets/icons/icon-blue-instagram.png";
import { useTranslation } from "react-i18next";

export function SectionMindFul(){
    const {t} = useTranslation();


    return(
        <section className="pt-34">
            <ContainerGRID>
                  <div className="mb-20.5 flex items-center justify-between">
                       <h2 className="text-40 uppercase font-medium text-neutral-color-300"><span className="text-neutral-color-400">{t("sectionMindFul.title")}</span> {t("sectionMindFul.titleBlack")}</h2>
                       <a href="#" rel="noreferrer noopener" className="flex items-center gap-3 group">
                        <Image
                         src={iconInstagram}
                         alt="Icone do Instagram em cor azul"
                         title="Instagram"
                        />
                         <span className="font-semibold text-neutral-color-400 uppercase transition-colors ease-linear group-hover:text-blue-dark-800 group-focus:text-blue-dark-800">{t("sectionMindFul.follow")}</span>
                       </a>
                  </div>
                  <CardsMind/>
                 
            </ContainerGRID>
        </section>
    )
}