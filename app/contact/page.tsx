"use client";

import { motion } from "framer-motion";
import { ExternalLink as Github, Mail, MessageSquare } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Glow } from "@/components/shared/glow";
import { SITE_CONFIG } from "@/lib/constants";

const channels = [
  {
    icon: Github,
    title: "GitHub",
    description:
      "Open an issue for bug reports, feature requests, or general questions.",
    href: SITE_CONFIG.github + "/issues",
    cta: "Open an Issue",
  },
  {
    icon: MessageSquare,
    title: "Discussions",
    description:
      "Join the conversation on GitHub Discussions for Q&A and ideas.",
    href: SITE_CONFIG.github + "/discussions",
    cta: "Start a Discussion",
  },
  {
    icon: Mail,
    title: "Email",
    description: "For private inquiries, partnerships, or press.",
    href: "mailto:hello@costdog.dev",
    cta: "Send an Email",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <Glow />
        <div className="grid-bg absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="primary" className="mb-6">
              Contact
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Let's
              <br />
              <span className="gradient-text">talk</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              Have questions, feedback, or want to collaborate? We'd love to
              hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact channels */}
      <Section>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {channels.map((channel, i) => (
            <motion.a
              key={channel.title}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={
                channel.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full text-center transition-all duration-200 hover:border-primary/30 hover:shadow-md">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <channel.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {channel.title}
                </h3>
                <p className="mb-4 text-sm text-muted">
                  {channel.description}
                </p>
                <span className="text-sm font-medium text-primary">
                  {channel.cta} →
                </span>
              </Card>
            </motion.a>
          ))}
        </div>
      </Section>
    </>
  );
}
