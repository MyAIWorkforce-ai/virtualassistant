"use client";
import { FaCalendarCheck } from "react-icons/fa";
import { motion } from "framer-motion";

import data from "@/app/data/blogs.json";
import { useState } from "react";

interface HeroSection {
  page_title: string;
  span_title: string;
  introduction: string;
}

interface BlogPost {
  category: string;
  title: string;
  description: string;
  image_url: string;
  read_more: string;
}

interface BlogsSectionData {
  heading: string;
  span_heading: string;
  categories: string[];
  blogs: BlogPost[];
}

interface CtaSection {
  page_title: string;
  description: string;
  bottom_text: string;
}

interface BlogsData {
  hero_section: HeroSection;
  blogs_section: BlogsSectionData;
  cta_section: CtaSection;
}

const Blogs = () => {
 const { hero_section, blogs_section, cta_section } = data as BlogsData;

const [activeCategory, setActiveCategory] = useState("All");
 const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
const [showErrorScreen, setShowErrorScreen] = useState(false);
 const filteredPosts =
    activeCategory == "All"
      ? blogs_section.blogs
      : blogs_section.blogs.filter((post) => post.category == activeCategory);

  const featuredPost = selectedPost || filteredPosts[0];

  const gridPosts = filteredPosts.filter(
    (post) => post.title !== featuredPost?.title
  );

if (showErrorScreen) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] px-6 text-center">
        <h1 className="text-9xl font-bold text-[#E8F6FF] mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-Poppins font-bold text-black mb-4">
          Page Not Found
        </h2>
        <p className="text-[#797A7D] text-lg mb-8 max-w-md">
          The blog post you are looking for is currently unavailable or has been moved.
        </p>
        <button 
          onClick={() => setShowErrorScreen(false)} 
          className="bg-[#0097DA] text-white font-Poppins font-medium px-8 py-3 rounded-full shadow-md hover:bg-[#007EB8] transition"
        >
          Go Back to Blogs
        </button>
      </div>
    );
  }


  return (
    <>
      {/* HERO */}
      <motion.section className="py-20 px-4 md:px-20 lg:px-36 bg-gradient-to-b from-[#E8F6FF] to-[#F0F9FF] flex justify-center"
      >
        <motion.div className="flex flex-col items-center text-center max-w-4xl mt-6"
           initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}>
     <h1 className="text-3xl sm:text-4xl md:text-5xl font-Poppins font-bold mb-6 leading-tight">
            <span className="text-black">{hero_section.page_title} </span>
            <span className="text-[#00A7DE]">{hero_section.span_title}</span> <span className="text-black"> Tips</span>
    </h1>

      <p className="font-Poppins text-[#797A7D] max-w-3xl text-base sm:text-lg leading-relaxed mb-8">
            {hero_section.introduction} </p>

     <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <a
              href="https://admin.virtualassistant.com.au/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#0097DA] text-white font-medium px-6 py-2.5 rounded-full hover:bg-[#007EB8] transition w-full sm:w-auto">
                Start 14 Day Free Trial
              </button>
            </a>

            <a
              href="https://calendar.app.google/g5bCnhaSJocufjFr5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-medium px-6 py-2.5 rounded-full border-2 border-[#00A7DE] hover:shadow-[0_0_15px_#00A7DE] hover:scale-105 transition w-full sm:w-auto text-center"
            >
              Book a Demo
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* BLOGS */}
<motion.section className="py-16 px-4 md:px-12 lg:px-20 max-w-7xl mx-auto font-Poppins flex flex-col gap-8 items-center"    initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}>
 <div className="h-1 bg-[#098DC9] w-60 mb-6" />

        <p className="text-[#797A7D] text-base sm:text-lg md:text-xl text-center max-w-4xl mb-8">
          {blogs_section.heading}
          <span className="text-[#098DC9]"> AI Virtual Receptionists </span>          {blogs_section.span_heading} </p>

        {/* CATEGORY BAR */}
<div className="w-fit mx-auto mb-16">
  <div className="   grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-row md:justify-center   gap-3 p-3     bg-[#E8F6FF]  rounded-3xl md:rounded-full transition-all duration-300 ease-in-out ">
    {blogs_section.categories.map((cat) => (
      <button
        key={cat}
        onClick={() => {
          setActiveCategory(cat);
          setSelectedPost(null);
        }}
        className={`
          px-5 py-2.5 rounded-full text-sm font-normal md:font-semibold tracking-tight md:tracking-normal transition-all duration-200 whitespace-nowrap
          ${
            activeCategory === cat
              ? "bg-[#00A7DE] text-white shadow-md transform scale-105"
              : "bg-white text-black hover:bg-[#00A7DE] hover:text-white hover:-translate-y-4 duration-400 hover:shadow-sm"
          }
        `}
      >
        {cat}
      </button>
    ))}
  </div>
</div>

     {/* FEATURED POST */}
        {featuredPost && (
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-16 w-full bg-[#F8FBFF] rounded-3xl p-6 sm:p-10">
            <div className="flex-1 w-full">
              <img
                src={featuredPost.image_url}
                alt={featuredPost.title}
                className="w-full h-auto rounded-full hover:scale-110 duration-500  object-cover" /></div>

            <div className="flex-1 flex flex-col space-y-4">
              <span className="bg-[#E0F5FF] text-[#00A7DE] px-4 py-1 rounded-full text-xs font-bold uppercase w-fit">
                {featuredPost.category} </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-snug">
        {featuredPost.title}
          </h2>

          <p className="text-[#797A7D] text-base sm:text-lg leading-relaxed">
                                {featuredPost.description}
        </p>

         <button 
         className="text-[#098DC9] font-bold hover:underline self-start"
         onClick={() => setShowErrorScreen(true)}>
                Read More...
         </button>
            </div>
          </div>
        )}

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {gridPosts.map((post) => (
       <motion.div
         initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          viewport={{once:false}}
          
              key={post.title}
              onClick={() => setSelectedPost(post)}      className="flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition cursor-pointer"        >
              <div className="h-48 sm:h-56 w-full">
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="h-full w-full hover:scale-130 duration-800 object-cover" />  </div>

              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block bg-[#E8F6FF] text-[#00A7DE] px-3 py-1 rounded-full text-xs font-semibold w-fit mb-3">
                       {post.category}</span>
                <h3 className="text-lg sm:text-xl font-Poppins font-semibold text-black mb-2 leading-tight">
                  {post.title}
                </h3>

                          <p className="text-[#797A7D] font-Poppins text-sm sm:text-base leading-relaxed mb-4 flex-1">
                  {post.description}
                        </p>

                <span><button
                onClick={() => setShowErrorScreen(true)}
                className="text-[#098DC9] font-bold  text-sm hover:underline mt-auto">
                  Read More...
                </button></span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA SECTION */}
      <section className="py-16 px-4 md:px-20 lg:px-36 bg-gradient-to-b from-[#8FD8F8] via-[#00BAF2] to-[#0097DA] flex justify-center">
        <motion.div className="flex flex-col items-center text-center max-w-4xl mt-6 gap-6"
           initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          viewport={{once:false}}>

          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-Poppins font-bold">
            {cta_section.page_title}
          </h1>

          <p className="font-Poppins text-white text-base sm:text-lg leading-relaxed">
            {cta_section.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto flex-wrap">
            <a
              href="https://admin.virtualassistant.com.au/register"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="bg-white text-[#00A7DE] font-medium px-6 py-2.5 rounded-lg hover:bg-[#00A7DE] hover:text-white transition w-full sm:w-auto">
                Start 14 Day Free Trial
              </button>
            </a>

           <a
  href="https://calendar.app.google/g5bCnhaSJocufjFr5"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Book a demo via Google Calendar"
  className="flex items-center justify-center gap-1  text-[#00A7DE] font-medium px-6 py-2.5 rounded-lg border-2    bg-white   hover:shadow-[0_0_15px_#00A7DE] hover:bg-[#00A7DE] hover:text-white  hover:scale-105  transition   w-full sm:w-auto text-center">
  <FaCalendarCheck className="text-lg" />
  <span>Book a Demo</span>
</a>

          </div>

          <p className="font-Poppins text-white text-base sm:text-lg leading-relaxed mt-4 max-w-3xl">
            {cta_section.bottom_text}
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default Blogs;
