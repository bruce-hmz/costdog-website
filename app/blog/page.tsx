import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Glow } from "@/components/shared/glow";
import { getAllBlogPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, guides, and technical deep dives on AI cost management.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <Glow />
        <div className="grid-bg absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="primary" className="mb-6">
            Blog
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Thoughts on
            <br />
            <span className="gradient-text">AI cost intelligence</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Insights, guides, and technical deep dives on AI cost management.
          </p>
        </div>
      </section>

      {/* Posts */}
      <Section>
        <div className="mx-auto grid max-w-4xl gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <Card className="transition-all duration-200 hover:border-primary/30 hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="default">{post.tag}</Badge>
                      <span className="flex items-center gap-1 text-xs text-muted">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted">{post.description}</p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
