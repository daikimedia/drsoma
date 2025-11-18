module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://drsomaplasticsurgery.com",
  generateRobotsTxt: false, // (optional)
  generateIndexSitemap: false,
  exclude: ["/server-sitemap.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL}/server-sitemap.xml`, // <==== Add here
    ],
  },
  // ...other options
};
