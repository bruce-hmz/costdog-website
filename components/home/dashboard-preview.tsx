"use client";

import { motion } from "framer-motion";
import {
  Activity,
  DollarSign,
  HardDrive,
  Cpu,
  Layers,
  RefreshCw,
} from "lucide-react";

const mockData = {
  cost: "$4.72",
  tokens: "1.2M",
  sessions: "23",
  disk: "48MB",
  models: [
    { name: "claude-sonnet-4-20250514", cost: "$3.21", pct: 68 },
    { name: "claude-haiku-4-5-20251001", cost: "$1.08", pct: 23 },
    { name: "gpt-4o", cost: "$0.43", pct: 9 },
  ],
};

export function DashboardPreview() {
  return (
    <div className="relative rounded-xl border border-border bg-[#0f0f17] p-1 shadow-2xl">
      {/* Window chrome */}
      <div className="flex items-center gap-2 rounded-t-lg bg-[#1a1a2e] px-4 py-2">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-[#666]">CostDog</span>
        </div>
      </div>

      {/* Widget bar */}
      <div className="flex items-center justify-between border-b border-[#27272a] bg-[#0f0f17] px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="text-lg">🐕</span>
          <span className="font-mono text-sm text-[#6C5CE7]">Today</span>
          <span className="font-mono text-sm font-medium text-[#00D2FF]">
            {mockData.cost}
          </span>
          <span className="font-mono text-xs text-[#666]">
            {mockData.tokens} tokens
          </span>
          <span className="font-mono text-xs text-[#666]">
            {mockData.sessions} sessions
          </span>
        </div>
        <div className="flex items-center gap-2">
          <RefreshCw className="h-3 w-3 text-[#666]" />
          <span className="text-xs text-[#666]">▼</span>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-4">
        {/* Tabs */}
        <div className="mb-4 flex gap-1 rounded-lg bg-[#1a1a2e] p-1">
          {["Today", "7D", "30D", "All"].map((tab, i) => (
            <div
              key={tab}
              className={`rounded-md px-3 py-1.5 text-xs font-medium ${
                i === 0
                  ? "bg-[#6C5CE7] text-white"
                  : "text-[#666] hover:text-[#999]"
              }`}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Stats grid */}
        <div className="mb-4 grid grid-cols-3 gap-2">
          {[
            { icon: Activity, label: "Sessions", value: "23" },
            { icon: DollarSign, label: "Cost", value: "$4.72" },
            { icon: HardDrive, label: "Disk", value: "48 MB" },
            { icon: Cpu, label: "Input", value: "842K" },
            { icon: Layers, label: "Output", value: "384K" },
            { icon: RefreshCw, label: "Cache", value: "156K" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg bg-[#1a1a2e] p-3"
            >
              <div className="mb-1 flex items-center gap-1.5">
                <stat.icon className="h-3 w-3 text-[#6C5CE7]" />
                <span className="text-[10px] text-[#666]">{stat.label}</span>
              </div>
              <span className="font-mono text-sm font-medium text-[#fafafa]">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Top models */}
        <div className="rounded-lg bg-[#1a1a2e] p-3">
          <div className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#666]">
            Top Models
          </div>
          {mockData.models.map((model) => (
            <div key={model.name} className="mb-2 last:mb-0">
              <div className="mb-1 flex items-center justify-between">
                <span className="font-mono text-xs text-[#fafafa]">
                  {model.name}
                </span>
                <span className="font-mono text-xs text-[#00D2FF]">
                  {model.cost}
                </span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-[#27272a]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#6C5CE7] to-[#00D2FF]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${model.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
