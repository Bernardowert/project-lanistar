
import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";



const styles = {
    btnPrimary: ``,
    btnSecondary: ``
}


type buttonStyles = keyof typeof styles;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
   isBtn?:boolean;
   children:ReactNode;
   href?:string;
   btnStyle?: buttonStyles;
   className?:string;
}



export function Button({isBtn = true, children, href = "#", btnStyle = "btnPrimary", className}:ButtonProps){
    const defaultClass = "inline-block text-white font-semibold rounded-md uppercase px-8 py-4 bg-blue-dark-800 [&:hover,&:focus]:bg-blue-dark-900 transition ease-linear";
    const combinedClass = twMerge(defaultClass, className);
    return(
          isBtn ? (
               <button className={`${combinedClass} ${styles[btnStyle]}`}>
                   {children}
               </button>
          ) : (
              <Link href={href} className={`${combinedClass} ${styles[btnStyle]}`}>
                 {children}
              </Link>
          )
    )
}