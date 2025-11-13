import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

import HeroSection from "@/app/components/IndustriesComponents/HeroSection";
import AboutUs from "@/app/components/IndustriesComponents/AboutUs";
import KeyBenefits from "@/app/components/IndustriesComponents/KeyBenefits";
import WhyChoose from "@/app/components/IndustriesComponents/WhyChoose";
import PrimaryUses from "@/app/components/IndustriesComponents/PrimaryUses";
import UseCase from "@/app/components/IndustriesComponents/UseCase";
import Form from "@/app/components/IndustriesComponents/Form";
import Navbar from "@/app/_components/Navbar";
import ProductivityGains from "@/app/components/IndustriesComponents/ProductivityGains";
import ExploreOtherIndustries from "@/app/components/IndustriesComponents/ExploreOtherIndustries";
import Footer from "@/app/_components/Footer";

// ✅ Helper to load JSON file
async function getIndustryData(slug: string) {
  const filePath = path.join(process.cwd(), "app/data/industries", `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents);
}

// ✅ Dynamic metadata — replaces <Head>
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = await getIndustryData(params.slug);
  if (!data) return {};

  return {
    title: data.meta?.title || "VirtualAssistant.com.au",
    description:
      data.meta?.description ||
      "Explore our AI-powered solutions across industries to boost productivity and efficiency.",
    keywords:
      data.meta?.keywords ||
      "AI, Automation, Industry Solutions, Productivity, Smart Tools",
    openGraph: {
      title: data.meta?.title,
      description: data.meta?.description,
      url: `https://virtualassistant.com.au/industries/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: data.meta?.title,
      description: data.meta?.description,
    },
  };
}

// ✅ Actual page
export default async function IndustryPage({ params }: { params: { slug: string } }) {
  const data = await getIndustryData(params.slug);
  if (!data) notFound();

  const { heroSection, about, keyBenefits, whyChoose, primaryUses, productivityGains, useCase, form } =
    data;

  return (
    <main>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <HeroSection {...heroSection} />

      {/* ABOUT-US SECTION */}
      <AboutUs heading={about.heading} sections={about.sections} />

      {/* KEY BENEFITS */}
      <KeyBenefits
        heading={keyBenefits.heading}
        subheading={keyBenefits.subheading}
        cards={keyBenefits.cards}
      />

      {/* WHY CHOOSE */}
      <WhyChoose
        heading={whyChoose.heading}
        description={whyChoose.description}
        leftbox={whyChoose.leftBox}
        image={whyChoose.image}
      />

      {/* PRIMARY USES */}
      <PrimaryUses heading={primaryUses.heading} items={primaryUses.items} />

      {/* PRODUCTIVITY GAINS */}
      <ProductivityGains heading={productivityGains.heading} cards={productivityGains.cards} />

      {/* USE CASE */}
      <UseCase title={useCase.title} topBox={useCase.topBox} useCases={useCase.useCases} />

      {/* FORM */}
      <Form title={form.title} subtitle={form.subtitle} />

      {/* EXPLORE OTHER INDUSTRIES */}
      <ExploreOtherIndustries activeSlug={
