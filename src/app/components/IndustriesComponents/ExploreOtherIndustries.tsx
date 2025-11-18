"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import industriesList from "@/app/data/industries/industriesList.json";

interface Industry {
  name: string;
  slug: string;
  image: string;
  description: string; 
}

interface ExploreOtherIndustriesProps {
  activeSlug: string;
}

export default function ExploreOtherIndustries({
  activeSlug,
}: ExploreOtherIndustriesProps) {
   const industries: Industry[] = industriesList;

  const currentIndex = industriesList.findIndex(
    (industry) => industry.slug === activeSlug
  );

  const nextIndustries = [
    industriesList[(currentIndex + 1) % industriesList.length],
    industriesList[(currentIndex + 2) % industriesList.length],
    industriesList[(currentIndex + 3) % industriesList.length],
  ];

  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="className=font-poppins text-[#00A7DE] font-bold text-[51px] leading-[40px] tracking-[0] text-center"
        >
          Explore Other Industries
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto px-30 mb-10"
        >
        Discover how our AI solutions are transforming various industries.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-25">
          {nextIndustries.map((industry, index) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition-transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  width={64}
                  height={64}
                  className="rounded-lg object-cover"
                  priority
                />
                <h3 className="text-lg text-black font-semibold">
                  {industry.name}
                </h3>
              </div>

              <p className="text-[#797A7D] mb-4">
                {industry.description}
              </p>

              <Link
                href={`/industries/${industry.slug}`}
                className="text-[#00A7DE] font-medium hover:underline"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
