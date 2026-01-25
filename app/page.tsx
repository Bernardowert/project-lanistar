import Image from "next/image";
import { ContainerGRID } from "@/components/containerGRID";
import { SectionCredit } from "@/components/sections/creditCard";
import { SectionHero } from "@/components/sections/hero";
import { SectionSecurity } from "@/components/sections/security";
import { SectionDownload } from "@/components/sections/download";
import { SectionMoney } from "@/components/sections/money";
import { SectionCurrency } from "@/components/sections/currrency";
import { SectionPayment } from "@/components/sections/payment";

export default function Home() {
  return (
     <>
       <SectionHero/>
       <SectionCredit/>
       <SectionSecurity/>
        <SectionPayment/>
       <SectionDownload/>
       <SectionMoney/>
       <SectionCurrency/>
     </>
  );
}
