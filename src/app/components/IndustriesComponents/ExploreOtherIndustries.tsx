"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import industriesListData from "../../data/industries/industriesList.json";

// TypeScript interface for your industry JSON
interface Industry {
  name: string;
  slug: string;
  image: string;
}

interface ExploreOtherIndustriesProps {
  activeSlug: string; // current industry slug (e.g., "physiotherapy")
}

export default function ExploreOtherIndustries({
  activeSlug,
}: ExploreOtherIndustriesProps) {
  const industriesList: Industry[] = industriesListData;

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
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          Explore Other Industries
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Discover how our AI solutions are transforming other industries too.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {nextIndustries.map((industry, index) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {industry.name}
                </h3>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="inline-block mt-3 bg-[#00A7DE] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#008fc3] transition-all"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
