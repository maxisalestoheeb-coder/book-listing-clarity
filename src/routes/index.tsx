import { createFileRoute } from "@tanstack/react-router";
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

      <NextStep title="Start with a free audit of your book" body="Send the title and a link. Your personalised report arrives by email — no cost, and no commitment to anything afterwards." />
    </>
  );
}
