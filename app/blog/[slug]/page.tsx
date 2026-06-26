import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Glow } from "@/components/shared/glow";
import { ArticleJsonLd } from "@/components/shared/json-ld";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        datePublished={post.date}
        url={`https://costdog.dev/blog/${post.slug}`}
      />
      <Glow />
      <div className="grid-bg absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <div className="mb-4 flex items-center gap-2">
          <Badge variant="primary">{post.tag}</Badge>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Calendar className="h-3 w-3" />
            {post.date}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>
        </div>

        <article className="prose prose-invert max-w-none">
          <div
            className="text-foreground [&_h1]:mb-6 [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_li]:mb-1 [&_li]:text-muted [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-muted [&_pre]:mb-6 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-[#0f0f17] [&_pre]:p-4 [&_pre]:text-sm [&_table]:mb-6 [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-border [&_td]:px-3 [&_td]:py-2 [&_td]:text-sm [&_td]:text-muted [&_th]:border [&_th]:border-border [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-sm [&_th]:font-semibold"
            dangerouslySetInnerHTML={{
              __html: post.content
                .split("\n")
                .map((line) => {
                  if (line.startsWith("# "))
                    return `<h1>${line.slice(2)}</h1>`;
                  if (line.startsWith("## "))
                    return `<h2>${line.slice(3)}</h2>`;
                  if (line.startsWith("### "))
                    return `<h3>${line.slice(4)}</h3>`;
                  if (line.startsWith("- "))
                    return `<li>${line.slice(2)}</li>`;
                  if (line.startsWith("```"))
                    return "";
                  if (line.trim() === "") return "";
                  return `<p>${line}</p>`;
                })
                .join("\n"),
            }}
          />
        </article>
      </div>
    </section>
  );
}
