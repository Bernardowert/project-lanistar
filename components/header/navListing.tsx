import Link from "next/link"
import { useTranslation } from "react-i18next";




interface NavListingProps{
    label: string;
    href: string;
}


export function NavListing(){
    const {t} = useTranslation();

    const items = t('header.nav', {returnObjects: true}) as NavListingProps[]
    return(
        <nav className="flex items-center gap-14">
             {
                items.map(({label,href}, index) => (
                    <Link  href={href} key={`${label}-${index}`} className="font-medium text-white uppercase [&:hover,&:focus]:text-gray-400 transition ease-linear">{label}</Link>
                ))
             }
        </nav>
    )
}