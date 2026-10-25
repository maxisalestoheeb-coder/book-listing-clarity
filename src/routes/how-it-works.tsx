import { createFileRoute } from "@tanstack/react-router";
import { NextStep, PageHero, Section, steps, meta } from "@/components/site";

export const Route = createFileRoute("/how-it-works")({
  head: () => meta("How It Works | Author Visibility Studio", "Tell us about your book, get a free personalised audit report, then decide if you want a specialist to implement it."),
  component: HowItWorks,
});

function HowItWorks() {
  return (
    <>
      <PageHero eyebrow="How it works" title="From your book to a clear plan, in four steps">
        Most reports are delivered within 24 hours of receiving your book title, depending on availability.
      </PageHero>
      <Section>
        <ol className="space-y-6">
          {steps.map((s) => (
            <li key={s.n} className="grid gap-4 rounded-xl border bg-card p-8 md:grid-cols-[120px_1fr]">
              <p className="font-serif text-5xl text-accent">{s.n}</p>
              <div>
                <h2 className="text-2xl">{s.t}</h2>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-muted-foreground">You never share your Amazon or KDP password at any stage. The audit is 100% free and you're under no obligation to continue.</p>
      </Section>
      <NextStep title="Ready for step one?" body="Tell us about your book — it takes about two minutes." />
    </>
  );
}
