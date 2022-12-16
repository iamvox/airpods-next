import Image from "next/image";
import Chapternav from "./(sections)/Chapternav";
import Compare from "./(sections)/Compare";
import Connectivity from "./(sections)/Connectivity";
import Hero from "./(sections)/Hero";
import Holiday from "./(sections)/Holiday";
import Navbar from "./(sections)/Navbar";
import Ribbon from "./(sections)/Ribbon";
import PurchaseInfo from "./(sections)/PurchaseInfo";
import Footnote from "./(sections)/Footnote";
import Footer from "./(sections)/Footer";
import Buy from "app/(components)/Buy";
import Breadcrumbs from "./(sections)/Breadcrumbs";
import Directory from "./(sections)/Directory";
export default function Home() {
  return (
    <div className="flex flex-col bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />
      <Chapternav />
      <Ribbon />
      <Hero />
      <Connectivity />
      <Compare />
      <Holiday />
      <PurchaseInfo />
      <Footnote />
      <Breadcrumbs />
      <Directory />
      <Footer />
    </div>
  );
}
