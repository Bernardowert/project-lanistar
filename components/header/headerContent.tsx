import Link from "next/link";
import { ContainerGRID } from "../containerGRID";
import Image from "next/image";

import logo from '@/assets/logo-black.png';
import { NavListing } from "./navListing";
import { ChangeLanguage } from "./changeLanguage";
import { RegisterModal } from "./modal";


export function HeaderContent(){
    return(
          <ContainerGRID className="flex items-center justify-between">
                <Link href="/">
                 <Image
                  src={logo}
                  alt="Logo Lanistar"
                  title="Logo Lanistar"
                  loading="eager"
                 />
                </Link>
                <NavListing/>
                <ChangeLanguage/>
                <RegisterModal/>
            </ContainerGRID>
    )
}