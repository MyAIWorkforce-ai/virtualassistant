/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://virtual-assistant-6tdp.vercel.app/", // 🔑 replace with your live domain
  generateRobotsTxt: true,           // ✅ auto create robots.txt
  sitemapSize: 7000,
  exclude: ["/404", "/500"],         // ❌ skip error pages
};
