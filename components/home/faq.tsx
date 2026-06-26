"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/section";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section className="bg-surface">
      <SectionHeader
        badge="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know about CostDog."
      />

      <div className="mx-auto mt-12 max-w-2xl">
        {FAQS.map((faq, i) => (
          <motion.div
            key={i}
            className="border-b border-border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <button
              className="flex w-full items-center justify-between gap-4 py-4 text-left"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="text-sm font-medium text-foreground">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-muted transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="pb-4 text-sm text-muted">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
