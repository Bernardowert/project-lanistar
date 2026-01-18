import Image from "next/image";


import logoRegister from '@/assets/icons/icon-register.svg';


import image01 from "@/assets/be-icon.png";
import image02 from "@/assets/getMoving-icon.png";
import image03 from "@/assets/pinkCard-icon.png";

import iconGlobal from "@/assets/icons/icon-global.png";
import iconGreen from "@/assets/icons/icon-green-okay.svg";
import { X } from "lucide-react";

const imagesModal = [
    {
        src:image01,
        alt:"Icone be",
        style:"absolute bottom-[84px] z-10"
    },
    {
        src:image02,
        alt:"Icone be",
        style:""
    },
    {
        src:image03,
        alt:"Icone be",
        style:"absolute right-[-25px]"
    }
]


const selectCountry = [
    "+55",
    "+1",
    "+56",
]




export function RegisterModal(){
    return(
       <>
            <button className="flex items-center gap-4">
            <Image
             src={logoRegister}
             alt="Logo Register"
             title="Logo Register"
             loading="eager"
            />
            <span className="font-medium text-blue-light-900">PRE-REGISTER NOW</span>
             </button>

             <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center">
                 <div className="w-full h-full fixed top-0 left-0 bg-black/50 -z-10">
                      
                 </div>

                <div className="w-full max-w-modal h-modal bg-white flex items-start">
                 <div className="w-full max-w-card-ImageModal h-full relative flex items-center justify-center bg-pinkDark-900">
                        {
                                imagesModal.map(({src,alt,style}, index) => (
                                    <Image
                                    draggable="false"
                                     src={src}
                                     alt={alt}
                                     key={`${"key"+ index}`}
                                     className={style}
                                    />
                                ))
                            }
                 </div>

                 <div className="w-full pl-14 pt-12 pr-9 pb-24">
                       <div className="flex items-center justify-between">
                            <Image
                              src={iconGlobal}
                              alt="Icon global"
                              title="Icon Global"
                            />
                            <button className="w-9 h-9 flex items-center justify-center" aria-label="Botão para fechar modal">
                                <X size={24} color="#A6AEB8" />
                            </button>
                       </div>
                       <div className="max-w-paragraph space-y-4 mt-8 mb-10">
                          <h3 className="text-3xl text-neutral-color-300">GET THE APP, AND GET ON THE WAITLIST<span className="text-blue-dark-800">.</span></h3>
                          <p className="text-neutral-color-300">When this drops, you’re going to be right there to catch it. Plus, we’ll plant a tree just for you. Really.</p>
                       </div>
                       <form className="flex items-center gap-5">
                           <div className="flex flex-1 max-w-cardModalForm h-14 items-center border border-neutral-color-500 rounded-md">
                                <select name="country" className="h-full text-lg text-neutral-color-200 ">
                                    {
                                        selectCountry.map((item, index) => (
                                            <option key={`${item}-${index}`} value={item}>{item}</option>
                                        ))
                                    }
                                </select>
                                <input type="number" name="input-name" placeholder="Phone number" className="w-full h-full pl-4 placeholder:text-neutral-600" required/>
                           </div>
                            <button>send contact</button>
                       </form>
                       <div className="flex items-center gap-6 mt-12">
                          <div className="w-6 h-6 flex items-center justify-center bg-greenDark-900 rounded-full">
                           <Image
                            src={iconGreen}
                            alt="Icon green okay"
                            title="Icon green"
                            />
                          </div>
                           <p className="text-neutral-700">Instant spending notifications across all your payment cards</p>
                       </div>
                 </div>
                </div>
             </div>
       </>
    )
}