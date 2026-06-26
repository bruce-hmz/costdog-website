import { getAllBlogPosts } from "@/lib/blog";
import { SITE_CONFIG } from "@/lib/constants";

export async function GET() {
  const posts = getAllBlogPosts();

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_CONFIG.name} Blog</title>
    <description>Insights, guides, and technical deep dives on AI cost management.</description>
    <link>${SITE_CONFIG.url}/blog</link>
    <atom:link href="${SITE_CONFIG.url}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts
      .map(
        (post) => `
    <item>
      <title>${post.title}</title>
      <description>${post.description}</description>
      <link>${SITE_CONFIG.url}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_CONFIG.url}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`,
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
