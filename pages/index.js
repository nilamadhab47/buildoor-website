import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import NoCodeToolSection from "@/sections/NoCodeToolSection";
import FeatureSection from "@/sections/FeatureSection";
import MainCta from "@/sections/MainCta";
import FeatureSectionII from "@/sections/FeatureSectionII";
import Pricing from "@/sections/Pricing";
import Newsletter from "@/sections/Newsletter";
import Footer from "@/sections/Footer";
import MouseCursor from "@/components/MouseCursor";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col justify-between bg-black text-white ${inter.className}`}
    >
      <Navbar />
      {/* <MouseCursor/> */}
      <Hero />
      <NoCodeToolSection />
      <FeatureSection />
      <MainCta />
      <FeatureSectionII />
      <Pricing />
      <Newsletter/>
      <Footer />
    </main>
  );
}
