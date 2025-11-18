import { PAGINATION } from "@/_services/blogs";
import axios from "axios";
import { getServerSideSitemapLegacy } from "next-sitemap";

const BLOG_API_URL = process.env.NEXT_PUBLIC_BLOG_URL;
const AUTH_TOKEN = process.env.NEXT_PUBLIC_APP_TOKEN;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export async function getServerSideProps(ctx) {
  const response = await axios.get(
    `${BLOG_API_URL}/cms/blogs?limit=${PAGINATION.limit}&page=${PAGINATION.page}`,
    {
      headers: {
        Authorization: AUTH_TOKEN,
      },
    }
  );

  const blogs = await response.data;

  const fields = blogs.data.map((i) => ({
    loc: `${SITE_URL}/blogs/${i.seo_url}`,
    lastmod: new Date().toISOString(),
  }));
  return getServerSideSitemapLegacy(ctx, fields);
}

export default function site() {}
