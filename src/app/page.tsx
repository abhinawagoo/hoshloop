"use client";

import { useState } from "react";

/* ─── Nav ─────────────────────────────────────────────────────────── */

function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-neutral-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <span className="text-[15px] font-semibold tracking-tight text-neutral-900">
          hoshloop
        </span>
        <div className="flex items-center gap-6">
          <a
            href="#how-it-works"
            className="hidden text-[13px] text-neutral-500 transition-colors hover:text-neutral-900 sm:block"
          >
            How it works
          </a>
          <a
            href="#roi"
            className="hidden text-[13px] text-neutral-500 transition-colors hover:text-neutral-900 sm:block"
          >
            ROI
          </a>
          <a
            href="#faq"
            className="hidden text-[13px] text-neutral-500 transition-colors hover:text-neutral-900 sm:block"
          >
            FAQ
          </a>
          <a
            href="#book"
            className="rounded-full bg-neutral-900 px-4 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-neutral-700"
          >
            Book a call
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero (Step 1 — upgraded headline + subheadline) ─────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.03) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-[12px] font-medium tracking-wide text-neutral-500 uppercase">
            For paid ads agencies
          </span>
        </div>

        <h1 className="text-[36px] leading-[1.1] font-bold tracking-tight text-neutral-900 sm:text-[52px]">
          Increase your paid ads agency margins{" "}
          <span className="text-accent">by&nbsp;30%</span>
          <br />
          without hiring more account&nbsp;managers
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-neutral-500">
          We build custom AI reporting systems that eliminate 10–20&nbsp;hours/week
          of manual reporting and performance analysis for Meta&nbsp;&amp;&nbsp;Google
          Ads&nbsp;agencies.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#book"
            className="inline-flex h-11 items-center rounded-full bg-accent px-6 text-[14px] font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Book a strategy call
          </a>
          <a
            href="#blueprint"
            className="inline-flex h-11 items-center rounded-full border border-neutral-200 px-6 text-[14px] font-medium text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
          >
            Get free AI Blueprint
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Problem (Step 4 — tighter copy) ─────────────────────────────── */

function Problem() {
  const pains = [
    {
      title: "Hours on reports",
      desc: "8–12 hrs/week copying data into slides clients skim for 30 seconds.",
    },
    {
      title: "Inconsistent insights",
      desc: "Different analysts, different metrics. Clients lose trust fast.",
    },
    {
      title: "Margins shrink",
      desc: "More clients = more overhead. Profit per client drops every quarter.",
    },
  ];

  return (
    <section className="border-t border-neutral-100 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-[13px] font-medium tracking-wide text-accent uppercase">
          The problem
        </p>
        <h2 className="mt-3 max-w-xl text-[28px] leading-tight font-bold tracking-tight text-neutral-900 sm:text-[36px]">
          Manual reporting is killing your margins
        </h2>
        <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-neutral-500">
          Agencies managing 10–100 clients are stuck in the same loop:
          pull&nbsp;data, build&nbsp;decks, repeat. It&nbsp;doesn&apos;t&nbsp;scale.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {pains.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-neutral-100 bg-neutral-50/60 p-6"
            >
              <h3 className="text-[15px] font-semibold text-neutral-900">
                {p.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-neutral-500">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Solution (Step 4 — tighter copy) ────────────────────────────── */

function Solution() {
  const features = [
    {
      label: "Automated data pulls",
      desc: "Connect Meta & Google Ads once. Daily syncs, zero manual exports.",
    },
    {
      label: "AI-powered insights",
      desc: "Spend anomalies, winning creatives, optimization ops — surfaced automatically.",
    },
    {
      label: "Client-ready reports",
      desc: "Branded, presentation-quality PDFs delivered weekly. No human effort.",
    },
    {
      label: "Custom to your agency",
      desc: "Your KPIs, your workflows, your client communication style. Not a template.",
    },
  ];

  return (
    <section className="border-t border-neutral-100 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-[13px] font-medium tracking-wide text-accent uppercase">
          The solution
        </p>
        <h2 className="mt-3 max-w-xl text-[28px] leading-tight font-bold tracking-tight text-neutral-900 sm:text-[36px]">
          AI reporting systems built for your&nbsp;agency
        </h2>
        <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-neutral-500">
          Your team focuses on strategy. Hoshloop handles the&nbsp;reporting.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-neutral-100 bg-neutral-100 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.label} className="bg-white p-8">
              <h3 className="text-[15px] font-semibold text-neutral-900">
                {f.label}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-neutral-500">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Visual Proof — Dashboard Mock (Step 2) ──────────────────────── */

function DashboardPreview() {
  return (
    <section className="border-t border-neutral-100 bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-[13px] font-medium tracking-wide text-accent uppercase">
          Visual proof
        </p>
        <h2 className="mt-3 max-w-xl text-[28px] leading-tight font-bold tracking-tight text-neutral-900 sm:text-[36px]">
          What your automated report looks&nbsp;like
        </h2>
        <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-neutral-500">
          Every week, your clients receive something like this — generated
          automatically, branded to your&nbsp;agency.
        </p>

        {/* Dashboard mock */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-neutral-100 px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
            <span className="ml-3 text-[12px] text-neutral-400">
              Weekly Performance Report — Acme Co.
            </span>
          </div>

          <div className="p-6 sm:p-8">
            {/* Performance summary row */}
            <div className="grid gap-4 sm:grid-cols-4">
              {[
                { label: "Total Spend", value: "$24,180", delta: "+4.2%" },
                { label: "Conversions", value: "1,847", delta: "+12.6%" },
                { label: "CPA", value: "$13.09", delta: "-8.3%", good: true },
                { label: "ROAS", value: "4.2x", delta: "+0.6x", good: true },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-neutral-100 bg-neutral-50/80 p-4"
                >
                  <p className="text-[11px] font-medium tracking-wide text-neutral-400 uppercase">
                    {m.label}
                  </p>
                  <p className="mt-1 text-[20px] font-bold tracking-tight text-neutral-900">
                    {m.value}
                  </p>
                  <p
                    className={`mt-0.5 text-[12px] font-medium ${
                      m.good ? "text-emerald-500" : m.delta.startsWith("-") ? "text-emerald-500" : "text-neutral-400"
                    }`}
                  >
                    {m.delta} vs last week
                  </p>
                </div>
              ))}
            </div>

            {/* CPA trend chart mock */}
            <div className="mt-6 rounded-lg border border-neutral-100 p-5">
              <p className="text-[12px] font-medium tracking-wide text-neutral-400 uppercase">
                CPA trend — last 8 weeks
              </p>
              <div className="mt-4 flex items-end gap-2 sm:gap-3" style={{ height: 100 }}>
                {[65, 72, 68, 58, 52, 48, 42, 38].map((h, i) => (
                  <div
                    key={i}
                    className="flex flex-1 flex-col items-center gap-1"
                  >
                    <div
                      className={`w-full rounded-sm ${
                        i === 7 ? "bg-accent" : "bg-neutral-200"
                      }`}
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[10px] text-neutral-300">
                      W{i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Two-col: winning creatives + AI insights */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {/* Winning creatives */}
              <div className="rounded-lg border border-neutral-100 p-5">
                <p className="text-[12px] font-medium tracking-wide text-neutral-400 uppercase">
                  Top performing creatives
                </p>
                <div className="mt-3 space-y-3">
                  {[
                    { name: "UGC Video — Testimonial B", cpa: "$9.20", spend: "$4,800" },
                    { name: "Static — Product Comparison", cpa: "$11.40", spend: "$3,200" },
                    { name: "Carousel — Feature Breakdown", cpa: "$12.80", spend: "$2,600" },
                  ].map((c) => (
                    <div
                      key={c.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-neutral-100" />
                        <span className="text-[13px] text-neutral-700">
                          {c.name}
                        </span>
                      </div>
                      <span className="text-[12px] font-medium text-neutral-900">
                        {c.cpa}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI insights */}
              <div className="rounded-lg border border-accent/20 bg-accent/[0.03] p-5">
                <p className="text-[12px] font-medium tracking-wide text-accent uppercase">
                  AI-generated insights
                </p>
                <ul className="mt-3 space-y-2.5">
                  {[
                    "CPA dropped 8.3% WoW — driven by UGC Testimonial B outperforming benchmarks by 2.1x.",
                    "Google Search CPC up 14% — recommend shifting $1,200/wk to Meta where CPAs are 30% lower.",
                    "Weekend spend efficiency is 22% better. Consider increasing weekend budget caps.",
                  ].map((insight, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-[13px] leading-snug text-neutral-600"
                    >
                      <span className="mt-0.5 shrink-0 text-accent">&#8227;</span>
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Budget reallocation */}
            <div className="mt-6 rounded-lg border border-neutral-100 p-5">
              <p className="text-[12px] font-medium tracking-wide text-neutral-400 uppercase">
                Suggested budget reallocation
              </p>
              <div className="mt-3 space-y-2">
                {[
                  { channel: "Meta — Prospecting", current: "$8,400", suggested: "$9,600", direction: "up" },
                  { channel: "Meta — Retargeting", current: "$4,200", suggested: "$4,200", direction: "same" },
                  { channel: "Google — Search", current: "$7,800", suggested: "$6,600", direction: "down" },
                  { channel: "Google — PMax", current: "$3,780", suggested: "$3,780", direction: "same" },
                ].map((row) => (
                  <div
                    key={row.channel}
                    className="flex items-center justify-between text-[13px]"
                  >
                    <span className="text-neutral-700">{row.channel}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-neutral-400">{row.current}</span>
                      <span className="text-neutral-300">&rarr;</span>
                      <span
                        className={`font-medium ${
                          row.direction === "up"
                            ? "text-emerald-600"
                            : row.direction === "down"
                            ? "text-red-500"
                            : "text-neutral-600"
                        }`}
                      >
                        {row.suggested}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ────────────────────────────────────────────────── */

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Discovery call",
      desc: "Your KPIs, client types, reporting workflow. 30 minutes, no fluff.",
    },
    {
      num: "02",
      title: "We build your system",
      desc: "Ad accounts connected, AI configured, report templates designed.",
    },
    {
      num: "03",
      title: "Reports run on autopilot",
      desc: "Clients get polished reports with insights weekly. You review, not create.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="border-t border-neutral-100 bg-neutral-950 py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-[13px] font-medium tracking-wide text-indigo-400 uppercase">
          How it works
        </p>
        <h2 className="mt-3 max-w-xl text-[28px] leading-tight font-bold tracking-tight sm:text-[36px]">
          From setup to autopilot in&nbsp;2&nbsp;weeks
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {steps.map((s) => (
            <div key={s.num}>
              <span className="font-mono text-[13px] font-semibold text-indigo-400">
                {s.num}
              </span>
              <h3 className="mt-3 text-[17px] font-semibold">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-neutral-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ROI Section ─────────────────────────────────────────────────── */

function ROI() {
  const rows = [
    { label: "Clients managed", before: "40", after: "40" },
    { label: "Hours on reporting / week", before: "32 hrs", after: "2 hrs" },
    { label: "Monthly reporting cost", before: "$12,800", after: "$800" },
    { label: "Annual savings", before: "—", after: "$144,000", highlight: true },
    { label: "Effective margin lift", before: "—", after: "+30%", highlight: true },
  ];

  return (
    <section id="roi" className="border-t border-neutral-100 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-[13px] font-medium tracking-wide text-accent uppercase">
          The math
        </p>
        <h2 className="mt-3 max-w-xl text-[28px] leading-tight font-bold tracking-tight text-neutral-900 sm:text-[36px]">
          Real numbers, not promises
        </h2>
        <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-neutral-500">
          A 40-client agency after switching to Hoshloop.
          Your mileage may vary — the direction&nbsp;won&apos;t.
        </p>

        <div className="mt-14 overflow-hidden rounded-xl border border-neutral-100">
          <div className="grid grid-cols-3 border-b border-neutral-100 bg-neutral-50 px-6 py-3 text-[12px] font-semibold tracking-wide text-neutral-400 uppercase">
            <span />
            <span className="text-center">Before</span>
            <span className="text-center">After Hoshloop</span>
          </div>

          {rows.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-3 border-b border-neutral-50 px-6 py-4 last:border-0"
            >
              <span className="text-[14px] text-neutral-700">{r.label}</span>
              <span className="text-center text-[14px] text-neutral-400">
                {r.before}
              </span>
              <span
                className={`text-center text-[14px] font-semibold ${
                  r.highlight ? "text-accent" : "text-neutral-900"
                }`}
              >
                {r.after}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Hoshloop — Authority Section (Step 3) ───────────────────── */

function WhyHoshloop() {
  return (
    <section className="border-t border-neutral-100 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-[13px] font-medium tracking-wide text-accent uppercase">
          Why Hoshloop
        </p>
        <h2 className="mt-3 text-[28px] leading-tight font-bold tracking-tight text-neutral-900 sm:text-[36px]">
          Built by engineers who understand agency&nbsp;margins
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-neutral-500">
          We don&apos;t sell generic automation tools. We design systems tailored
          to paid acquisition workflows — because that&apos;s the only thing
          we&nbsp;do.
        </p>

        <div className="mx-auto mt-12 grid max-w-2xl gap-px overflow-hidden rounded-xl border border-neutral-100 bg-neutral-100 text-left sm:grid-cols-3">
          {[
            {
              stat: "160+",
              label: "Agency reports automated",
            },
            {
              stat: "10–20 hrs",
              label: "Saved per agency per week",
            },
            {
              stat: "2 weeks",
              label: "Average time to go live",
            },
          ].map((item) => (
            <div key={item.label} className="bg-white p-6 text-center">
              <p className="text-[28px] font-bold tracking-tight text-neutral-900">
                {item.stat}
              </p>
              <p className="mt-1 text-[13px] text-neutral-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA / Book + Blueprint ──────────────────────────────────────── */

function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section
      id="book"
      className="border-t border-neutral-100 bg-neutral-50 py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-5xl gap-16 px-6 sm:grid-cols-2 sm:gap-12">
        <div>
          <p className="text-[13px] font-medium tracking-wide text-accent uppercase">
            Ready to start?
          </p>
          <h2 className="mt-3 text-[24px] leading-tight font-bold tracking-tight text-neutral-900 sm:text-[28px]">
            Book a strategy call
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
            30 minutes. We audit your workflow and show you
            exactly what you&apos;ll&nbsp;save.
          </p>
          <a
            href="https://calendly.com/abhinawago/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-11 items-center rounded-full bg-accent px-6 text-[14px] font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Schedule now
          </a>
        </div>

        <div id="blueprint">
          <p className="text-[13px] font-medium tracking-wide text-accent uppercase">
            Free resource
          </p>
          <h2 className="mt-3 text-[24px] leading-tight font-bold tracking-tight text-neutral-900 sm:text-[28px]">
            AI Reporting Blueprint
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
            Step-by-step guide to automating your reporting stack
            — no technical knowledge&nbsp;required.
          </p>

          {submitted ? (
            <p className="mt-6 text-[14px] font-medium text-accent">
              Check your inbox — the blueprint is on its way.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex gap-2">
              <input
                type="email"
                required
                placeholder="you@agency.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 flex-1 rounded-full border border-neutral-200 bg-white px-4 text-[14px] text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-accent"
              />
              <button
                type="submit"
                className="h-11 cursor-pointer rounded-full bg-neutral-900 px-5 text-[14px] font-medium text-white transition-colors hover:bg-neutral-700"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ (Step 4 — shorter answers) ──────────────────────────────── */

function FAQ() {
  const items = [
    {
      q: "What ad platforms do you support?",
      a: "Meta Ads (Facebook & Instagram) and Google Ads. Additional platforms on request.",
    },
    {
      q: "How long does setup take?",
      a: "Most agencies go live in 2 weeks. Complex setups may take up to 3.",
    },
    {
      q: "Do I need technical knowledge?",
      a: "No. We handle everything — API connections, AI config, report design. You just review.",
    },
    {
      q: "Can I customize the reports?",
      a: "Fully. Your brand, your KPIs, your client style. These aren't templates.",
    },
    {
      q: "What does it cost?",
      a: "Depends on client count and complexity. Most agencies see ROI in the first month. Book a call for a transparent quote.",
    },
    {
      q: "What if I'm not happy?",
      a: "30-day satisfaction guarantee. If it doesn't save you meaningful time and money, full refund.",
    },
  ];

  return (
    <section id="faq" className="border-t border-neutral-100 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-[13px] font-medium tracking-wide text-accent uppercase">
          FAQ
        </p>
        <h2 className="mt-3 text-[28px] leading-tight font-bold tracking-tight text-neutral-900 sm:text-[36px]">
          Common questions
        </h2>

        <div className="mt-12 divide-y divide-neutral-100">
          {items.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between text-left"
      >
        <span className="text-[15px] font-medium text-neutral-900">{q}</span>
        <span className="ml-4 shrink-0 text-[18px] text-neutral-400">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="mt-3 text-[14px] leading-relaxed text-neutral-500">
          {a}
        </p>
      )}
    </div>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-neutral-100 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <span className="text-[13px] text-neutral-400">
          &copy; {new Date().getFullYear()} Hoshloop. All rights reserved.
        </span>
        <div className="flex gap-6">
          <a
            href="https://x.com/hoshloop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-neutral-400 transition-colors hover:text-neutral-600"
          >
            X
          </a>
          <a
            href="https://linkedin.com/company/hoshloop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-neutral-400 transition-colors hover:text-neutral-600"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/hoshloop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-neutral-400 transition-colors hover:text-neutral-600"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-[13px] text-neutral-400 transition-colors hover:text-neutral-600"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-[13px] text-neutral-400 transition-colors hover:text-neutral-600"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <DashboardPreview />
        <HowItWorks />
        <ROI />
        <WhyHoshloop />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
