import { notFound } from "next/navigation";
import HeroSection from "@/app/components/IndustriesComponents/HeroSection";
import AboutUs from "@/app/components/IndustriesComponents/AboutUs";
import KeyBenefits from "@/app/components/IndustriesComponents/KeyBenefits";
import WhyChoose from "@/app/components/IndustriesComponents/WhyChoose";
import PrimaryUses from "@/app/components/IndustriesComponents/PrimaryUses";
import UseCase from "@/app/components/IndustriesComponents/UseCase";
import Form from "@/app/components/IndustriesComponents/Form";
import ProductivityGains from "@/app/components/IndustriesComponents/ProductivityGains";
import ExploreOtherIndustries from "@/app/components/IndustriesComponents/ExploreOtherIndustries";
import { Metadata } from "next";


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;

try {
  const data = await import(`@/app/data/industries/${slug}.json`);
  const titleWords = data.heroSection.title.split(" ");
  const remainingWords = titleWords.slice(2).join(" ");

  return {
    title: `AI Virtual Receptionist for ${remainingWords} | VirtualAssistant.com.au`,
    description: data.heroSection.metaDescription,
    keywords: data.heroSection.metaKeywords,
    openGraph: {
      title: `AI Virtual Receptionist for ${remainingWords} | VirtualAssistant.com.au`,
      description: data.heroSection.metaDescription,
      images: [data.heroSection.image],
    },
  };
} catch (err) {
  return {
    title: "Industry Not Found",
    description: "This industry does not exist.",
  };
}
}

export default async function IndustryPage({ params }: { params: { slug: string } }) {
  const { slug } =await params;

  let data;
  try {
    data = await import(`@/app/data/industries/${slug}.json`);
  } catch (error) {
    console.error(`JSON file not found for slug: ${slug} | ${error}`);
    notFound();
  }

  return (
    <main className="pt-24 md:pt-20 lg:pt-16">
  
      {/* HERO SECTION */}
      <HeroSection {...data.heroSection} />

      {/* ABOUT-US SECTION */}
      <AboutUs heading={data.about.heading} sections={data.about.sections} />

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
      <PrimaryUses heading={data.primaryUses.heading} items={data.primaryUses.items} />

      {/* PRODUCTIVITY GAINS */}
      <ProductivityGains heading={data.productivityGains.heading} cards={data.productivityGains.cards} />

      {/* USE CASE */}
      <UseCase title={data.useCase.title} topBox={data.useCase.topBox} useCases={data.useCase.useCases} />

      {/* FORM */}
      <Form title={data.form.title} subtitle={data.form.subtitle} />

      {/* EXPLORE OTHER INDUSTRIES */}
      <ExploreOtherIndustries activeSlug={slug} />


    </main>
  );
}
