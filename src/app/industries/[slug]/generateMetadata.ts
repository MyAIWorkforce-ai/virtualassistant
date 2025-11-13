import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const data = require(`@/app/data/industries/${params.slug}.json`);

    return {
      title: `${data.heroSection.title} | VirtualAssistant.com.au`,
      description: data.heroSection.description,

      openGraph: {
        title: data.heroSection.title,
        description: data.heroSection.description,
        images: [data.heroSection.image],
      },
    };
  } catch {
    return {
      title: "Industry Not Found",
      description: "This industry does not exist.",
    };
  }
}
