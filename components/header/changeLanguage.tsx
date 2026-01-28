'use client'

import Image, { StaticImageData } from "next/image"
import { ChevronUp } from "lucide-react"
import { useState } from "react"

import logoUnited from "@/assets/icons/united-states-icon.png"
import brazil from "@/assets/icons/brasil-icon.png"
import espanha from "@/assets/icons/espanha.png"
import i18n from "@/i18n"

type Language = "en" | "pt" | "es"

const allLangs: Record<
  Language,
  { src: StaticImageData; alt: string; title: string }
> = {
  en: {
    src: logoUnited,
    alt: "Icone Estados Unidos",
    title: "Estados Unidos",
  },
  pt: {
    src: brazil,
    alt: "Icone Brasil",
    title: "Brasil",
  },
  es: {
    src: espanha,
    alt: "Icone Espanha",
    title: "Espanha",
  },
}

export function ChangeLanguage() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] =
    useState<Language>("en")

  function toggleDropdown() {
    setIsOpen((prev) => !prev)
  }

  function changeLanguage(lang: Language) {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang)
    setIsOpen(false)
  }

  const availableLanguages = (
    Object.keys(allLangs) as Language[]
  ).filter((lang) => lang !== currentLanguage)

  return (
    <div className="relative">
      <button
        className="flex items-center gap-3"
        onClick={toggleDropdown}
      >
        <Image
          src={allLangs[currentLanguage].src}
          alt={allLangs[currentLanguage].alt}
          title={allLangs[currentLanguage].title}
          className="w-6 h-6 object-cover rounded-full"
        />
        <ChevronUp
          color="#07BCFF"
          strokeWidth={1.5}
          className={isOpen ? "rotate-0" : "rotate-180"}
        />
      </button>


      {isOpen && (
        <div className="w-full max-w-12 bg-white rounded-lg absolute top-8 left-0 shadow-md">
          <div className="flex flex-col items-center gap-2 p-2">
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className="hover:scale-105 transition"
              >
                <Image
                  src={allLangs[lang].src}
                  alt={allLangs[lang].alt}
                  title={allLangs[lang].title}
                  className="w-6 h-6 rounded-full"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
