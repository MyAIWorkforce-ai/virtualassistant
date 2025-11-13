import { notFound } from "next/navigation";
import Head from "next/head";
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

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let data;
  try {
    data = require(`@/app/data/industries/${slug}.json`);
  } catch (error) {
    console.error(`JSON file not found for slug: ${slug} | ${error}`);
    notFound(); 
  }

  return (
    <>

      <Head>
        <title>{data.meta?.title || "Industry Page"}</title>
        <meta
          name="description"
          content={
            data.meta?.description ||
            "Explore our AI-powered solutions across industries to boost productivity and efficiency."
          }
        />
        <meta
          name="keywords"
          content={
            data.meta?.keywords ||
            "AI, Automation, Industry Solutions, Productivity, Smart Tools"
          }
        />
      </Head>

      <main>
        {/* NAVBAR */}
        <Navbar />

        {/* HERO SECTION */}
        <HeroSection {...data.heroSection} />

        {/* ABOUT-US SECTION */}
        <AboutUs
          heading={data.about.heading}
          sections={data.about.sections}
        />

        {/* KEY BENEFITS */}
        <KeyBenefits
          heading={data.keyBenefits.heading}
          subheading={data.keyBenefits.subheading}
          cards={data.keyBenefits.cards}
        />

        {/* WHY CHOOSE US */}
        <WhyChoose
          heading={data.whyChoose.heading}
          description={data.whyChoose.description}
          leftbox={data.whyChoose.leftBox}
          image={data.whyChoose.image}
        />

        {/* PRIMARY USES */}
        <PrimaryUses
          heading={data.primaryUses.heading}
          items={data.primaryUses.items}
        />

        {/* PRODUCTIVITY GAINS */}
        <ProductivityGains
          heading={data.productivityGains.heading}
          cards={data.productivityGains.cards}
        />

        {/* USE CASE */}
        <UseCase
          title={data.useCase.title}
          topBox={data.useCase.topBox}
          useCases={data.useCase.useCases}
        />

        {/* FORM */}
        <Form
          title={data.form.title}
          subtitle={data.form.subtitle}
        />

        {/* EXPLORE OTHER INDUSTRIES */}
        <ExploreOtherIndustries activeSlug={slug} />

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}
