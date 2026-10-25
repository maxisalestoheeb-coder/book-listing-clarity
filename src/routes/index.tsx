import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCheck, FileText, ShieldCheck, BookOpen } from "lucide-react";
import { CtaButton, NextStep, Section, steps, meta } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => meta("Free Amazon Listing Audit for Authors | Author Visibility Studio", "Tell us about your book and get a personalised, 100% free Amazon listing audit — then choose whether to work with an implementation specialist."),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-12 md:grid-cols-[1.4fr_1fr] md:pt-24">
        <div>
          <p className="eyebrow">100% free personalised audit</p>
          <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">Your book deserves a listing that reads like it was written for its reader.</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Tell us about your book. We study its Amazon listing personally and send you a written audit — completely free. If you'd like help putting it into practice, we can connect you with a specialist.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton>Get My Free Audit</CtaButton>
            <CtaButton to="/sample-audit" variant="outline">See a sample audit</CtaButton>
          </div>
        </div>
        <div className="self-end rounded-xl border bg-card p-8">
          <p className="eyebrow">What the audit covers</p>
          <ul className="mt-5 space-y-3 text-sm">
            {["Title, subtitle & series presentation", "Book description & reader hook", "Keywords and search intent", "Category fit and competition", "Cover thumbnail at search size", "Price, format & look-inside notes"].map((i) => (
              <li key={i} className="flex gap-3 border-b pb-3 last:border-0"><span className="text-primary">✓</span>{i}</li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-muted-foreground">No cost. No password. No obligation.</p>
        </div>
      </section>

      <section className="border-y bg-secondary/50">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 sm:grid-cols-3">
          {[
            { icon: FileText, title: "100% free audit", text: "A personalised report, with no audit fee." },
            { icon: BookOpen, title: "Only your book title", text: "Confirmed with you before we begin." },
            { icon: ShieldCheck, title: "Your account stays yours", text: "We never ask for your publishing password." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div><p className="font-semibold">{title}</p><p className="mt-1 text-sm text-muted-foreground">{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <Section>
        <div className="max-w-2xl">
          <p className="eyebrow">Before & after · illustrative examples</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Small listing changes. A clearer picture of your book.</h2>
          <p className="mt-4 text-muted-foreground">An audit identifies what needs attention. These example scores show how individual listing qualities could be assessed before and after recommended changes are applied.</p>
        </div>
        <div className="mt-8 border-l-2 border-primary bg-secondary/50 px-5 py-4 text-sm text-muted-foreground">
          <strong className="text-foreground">Examples, not customer results.</strong> These are invented illustration scores, not Amazon ratings, verified outcomes, or promises. A score of 100 means the example checklist is complete — not guaranteed sales or rankings.
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { title: "Description clarity", before: 48, after: 98, issue: "A slow opening hides the central story and who it is for.", change: "A sharper reader hook, clear genre cues, and an easier-to-scan description." },
            { title: "Keyword relevance", before: 56, after: 99, issue: "Broad phrases do not clearly match the book's subject or reader intent.", change: "More specific, relevant search phrases tied to the book's themes and audience." },
            { title: "Listing completeness", before: 61, after: 100, issue: "Inconsistent series details and missing format information leave questions unanswered.", change: "Consistent title and series information, with the example's essential details complete." },
          ].map((item) => (
            <article key={item.title} className="rounded-lg border bg-card p-6">
              <p className="text-xs font-semibold uppercase text-muted-foreground">Example checklist score</p>
              <h3 className="mt-2 text-2xl">{item.title}</h3>
              <div className="my-7 grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-y py-5">
                <div><p className="text-xs text-muted-foreground">Before</p><p className="mt-1 text-4xl font-semibold text-muted-foreground">{item.before}<span className="text-sm font-normal">/100</span></p></div>
                <ArrowRight className="size-5 text-primary" aria-hidden="true" />
                <div><p className="text-xs text-primary">After changes</p><p className="mt-1 text-4xl font-semibold text-primary">{item.after}<span className="text-sm font-normal">/100</span></p></div>
              </div>
              <p className="text-sm text-muted-foreground">{item.issue}</p>
              <div className="mt-5 flex gap-2 border-t pt-5"><CheckCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" /><p className="text-sm">{item.change}</p></div>
            </article>
          ))}
        </div>
        <div className="mt-8"><CtaButton to="/sample-audit" variant="outline">Explore the sample audit <ArrowRight className="ml-2 size-4" aria-hidden="true" /></CtaButton></div>
      </Section>

      <section className="border-y bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="eyebrow">Inside your personalised report</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Not just a score.<br />A practical next step.</h2>
            <p className="mt-5 max-w-lg text-muted-foreground">Your book has its own audience, genre, and competition. We review those details personally, then explain what we found and which changes deserve attention first.</p>
            <div className="mt-7"><CtaButton>Request My Free Audit</CtaButton></div>
          </div>
          <div className="divide-y divide-border">
            {[
              { title: "What is already working", text: "The strengths in your listing worth keeping, from clear positioning to an effective reader hook." },
              { title: "Where readers may lose interest", text: "Specific points of confusion in your description, presentation, or category fit, with the reason each matters." },
              { title: "What to prioritise", text: "Recommended improvements organised so you can see what to address first." },
              { title: "A conversation about implementation", text: "After you receive the report, we ask if you want us to connect you with a specialist. They handle implementation and quote their fees directly." },
            ].map((item, i) => (
              <div key={item.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                <span className="mt-1 font-serif text-xl text-primary">0{i + 1}</span>
                <div><h3 className="text-xl">{item.title}</h3><p className="mt-2 text-sm text-muted-foreground">{item.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <p className="eyebrow">How it works</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Four simple steps</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-xl border bg-card p-6">
              <p className="font-serif text-3xl text-accent">{s.n}</p>
              <h3 className="mt-3 text-xl">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 rounded-xl bg-ink p-10 text-ink-foreground md:grid-cols-3 md:p-14">
          <div className="md:col-span-1"><h2 className="text-3xl">Honest about what we can and can't do</h2></div>
          <p className="opacity-85 md:col-span-2">
            No listing service controls Amazon's algorithms, category competition, reviews, or seasonality, so we never promise sales or rankings. What we offer is careful, personal review and practical research — and a free report you can act on yourself, or with a specialist if you choose.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-[1fr_1.5fr]">
          <div><p className="eyebrow">Before you begin</p><h2 className="mt-3 text-3xl md:text-4xl">A few things worth knowing.</h2><div className="mt-6"><CtaButton to="/faq" variant="outline">Read all questions</CtaButton></div></div>
          <div className="divide-y divide-border border-y">
            {[
              { question: "Is the audit really free?", answer: "Yes. Your personalised audit and written report are 100% free. If you choose to work with a specialist afterwards, they explain the implementation work and quote their fees directly." },
              { question: "What do you need to start?", answer: "Only your book title. We confirm it with you before the audit begins so we review the right book." },
              { question: "When will I receive the report?", answer: "Within 24 hours, depending on availability. Your personalised report is delivered by email." },
            ].map((item) => (
              <div key={item.question} className="py-6"><h3 className="text-xl">{item.question}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</p></div>
            ))}
          </div>
        </div>
      </Section>

      <NextStep title="Start with a free audit of your book" body="Send the book title. Your personalised report arrives by email within 24 hours depending on availability — no cost, and no commitment to anything afterwards." />
    </>
  );
}
