"use client";
import HeroSection from "@/app/components/IndustriesComponents/HeroSection";
import AboutUs from "@/app/components/IndustriesComponents/AboutUs";
import physiotherapist from "@/app/data/industries/physiotherapist.json";
import KeyBenefits from "@/app/components/IndustriesComponents/KeyBenefits";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function IndustryPage({ params }: PageProps) {
  const data = physiotherapist;

  return (
    <main>
      {/* HERO SECTION */}
      <HeroSection {...data.heroSection} />

      {/* ABOUT-US SECTION */}
      <AboutUs
        heading={data.about.heading}
        sections={data.about.sections} />

       {/* KEYBENEFITS  */}
        <KeyBenefits
        heading={data.keyBenefits.heading}
        subheading={data.keyBenefits.subheading}
        cards={data.keyBenefits.cards}/>
    </main>
  );
}
