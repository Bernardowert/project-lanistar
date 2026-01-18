import Link from "next/link"


const listing = [
    {
        name:"Security",
        href: "#"
    },
    {
        name:"FEATURES",
        href: "#"
    },
    {
        name:"FUNDAMENTALS",
        href: "#"
    }
]

export function NavListing(){
    return(
        <nav className="flex items-center gap-14">
             {
                listing.map(({name,href}, index) => (
                    <Link  href={href} key={`${name}-${index}`} className="font-medium text-white uppercase [&:hover,&:focus]:text-gray-400 transition ease-linear">{name}</Link>
                ))
             }
        </nav>
    )
}