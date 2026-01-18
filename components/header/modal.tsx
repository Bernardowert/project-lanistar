import Image from "next/image";


import logoRegister from '@/assets/icons/icon-register.svg';
export function RegisterModal(){
    return(
        <button className="flex items-center gap-4">
            <Image
             src={logoRegister}
             alt="Logo Register"
             title="Logo Register"
             loading="eager"
            />
            <span className="font-medium text-blue-light-900">PRE-REGISTER NOW</span>
        </button>
    )
}