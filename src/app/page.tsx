import Image from "next/image";
import Hero from "../components/Home/Hero";
import AboutUs from "@/components/Home/About";
import DoubleMarquee, { PartnersSection } from "@/components/Home/marquee";
import ProductSection from "@/components/Home/produt";
import ContactPage from "@/components/Home/contact";

export default function Home() {
  return (
    <>
    <div>
      <Hero />
      <AboutUs/>
      <PartnersSection/>
      <ProductSection/>
      <ContactPage/>  
      </div>
    </>
  );
}
