import Image from "next/image";
import { ContainerGRID } from "@/components/containerGRID";
import { SectionCredit } from "@/components/sections/creditCard";
import { SectionHero } from "@/components/sections/hero";
import { SectionSecurity } from "@/components/sections/security";

export default function Home() {
  return (
     <>
       <SectionHero/>
       <SectionCredit/>
       <SectionSecurity/>
     </>
  );
}
