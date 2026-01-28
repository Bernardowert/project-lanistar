import { SectionCredit } from "@/components/sections/creditCard";
import { SectionHero } from "@/components/sections/hero";
import { SectionSecurity } from "@/components/sections/security";
import { SectionDownload } from "@/components/sections/download";
import { SectionMoney } from "@/components/sections/money";
import { SectionCurrency } from "@/components/sections/currrency";
import { SectionPayment } from "@/components/sections/payment";
import { SectionMindFul } from "@/components/sections/mindful";

export default function Home() {
  return (
     <>
       <SectionHero/>
       <SectionCredit/>
       <SectionSecurity/>
        <SectionPayment/>
       <SectionMoney/>
       <SectionCurrency/>
       <SectionMindFul/>
       <SectionDownload/>
     </>
  );
}
