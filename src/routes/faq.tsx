import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CtaButton, EMAIL, NextStep, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/faq")({
  head: () => meta("FAQ | Author Visibility Studio", "Clear answers on our free audit, guarantees, independence from Amazon, account access, timing, and specialist fees."),
  component: Faq,
});

const faqs = [
  ["Do you guarantee sales or rankings?", "No. Marketplace visibility depends on algorithms, category competition, price, reviews, seasonality, and reader behaviour — none of which a listing service controls. We offer thoughtful review and research, and we are explicit about that boundary up front."],
  ["Are you Amazon or KDP support?", "No. We are an independent third-party team, not affiliated with or endorsed by Amazon or Kindle Direct Publishing. For account, payment, or publishing issues, contact KDP support directly."],
  ["Do you need my Amazon password?", "Never. We review your public listing only. You keep full control of your account, and any changes are made by you — or by a specialist you choose to work with, through methods you approve."],
  ["What will I receive?", "A personalised written audit, delivered by email as a PDF. It covers your title, description, keywords, categories, cover thumbnail, and pricing context, with prioritised, practical recommendations."],
  ["What do you need from me to begin?", "Your book title, its Amazon link (or ASIN), your genre, and a sentence about your ideal reader. Optional: any goals or concerns you'd like us to focus on."],
  ["How long does a review take?", "Most audits are delivered within 5 business days of receiving your details. If we're busier than usual, we'll tell you when you'll hear back."],
  ["Can you work with a book that isn't published yet?", "Yes. Send your draft title, description, and intended categories, and we'll review them before you publish."],
  ["How are fees and payment handled?", "The audit is 100% free — no card, no deposit. After you receive it, we ask whether you'd like an introduction to an implementation specialist. If you do, the specialist quotes their fee in writing and you agree it with them before any work starts. You're never obliged to proceed."],
];

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <PageHero eyebrow="Questions" title="Clear boundaries, stated before you decide anything">
        If something sits outside what we do, the answer here will say so plainly. Anything not covered below is welcome by email.
      </PageHero>
      <Section className="grid gap-10 md:grid-cols-[1fr_2fr]">
        <aside className="space-y-6">
          <div>
            <h2 className="text-xl">All questions</h2>
            <p className="mt-2 text-sm text-muted-foreground">Eight answers covering guarantees, independence, access, and what you receive.</p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h2 className="text-xl">Something else on your mind?</h2>
            <p className="mt-2 text-sm text-muted-foreground">Write a short note about the book and the question. You'll get a plain answer, not a sales call.</p>
            <a href={`mailto:${EMAIL}`} className="mt-4 block text-sm font-semibold text-primary underline underline-offset-4">{EMAIL}</a>
            <div className="mt-4"><CtaButton>Get My Free Audit</CtaButton></div>
          </div>
        </aside>
        <div className="divide-y rounded-xl border bg-card">
          {faqs.map(([q, a], i) => (
            <div key={q}>
              <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 p-6 text-left font-serif text-lg" aria-expanded={open === i}>
                {q}<span className="text-primary">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="px-6 pb-6 text-muted-foreground">{a}</p>}
            </div>
          ))}
        </div>
      </Section>
      <NextStep title="Ask us the question not listed here" body="Send the book title and the specific thing you're unsure about. If the answer is that you don't need changes, we'll say that too." />
    </>
  );
}
