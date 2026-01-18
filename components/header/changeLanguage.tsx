'use client'

import Image from "next/image"


import logoUnited from "@/assets/icons/united-states-icon.png"
import { ArrowDown } from "lucide-react"
export function ChangeLanguage(){
    return(
        <button className="flex items-center gap-3">
             <Image
               src={logoUnited}
               alt="Icone Estados Unidos"
               title="Estados Unidos"
               className="w-6 h-6 object-cover rounded-full"
             />
             <ArrowDown color="#07BCFF" />
        </button>
    )
}