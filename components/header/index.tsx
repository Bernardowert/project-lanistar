'use client'

import { useEffect, useState } from "react";
import { HeaderContent } from "./headerContent";

export function Header(){
    
   const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
       const handleScroll = () => {
         setScrollY(window.scrollY);
         console.log(scrollY);
       }

       window.addEventListener('scroll', handleScroll);

       return () => {
           window.removeEventListener('scroll', handleScroll);
       }
    }, [scrollY]);
    return(
        <header className={`w-full fixed h-24 flex items-center border-b border-gray-600 z-50 ${scrollY > 0 ? 'bg-neutral-color-100' : ''} ${scrollY >= 1050 ? 'border-transparent' : 'border-gray-600' }`}>
           <HeaderContent/>
        </header>
    )
}