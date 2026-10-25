import { createFileRoute } from "@tanstack/react-router";
import { NextStep, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => meta("About | Author Visibility Studio", "An author-first Amazon visibility support team in Asheville, North Carolina offering free Amazon listing audits."),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About" title="A small, independent team that reads before it recommends">
        Author Visibility Studio is based in Asheville, North Carolina. We are an Amazon visibility support team — we work for authors.
      </PageHero>
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Why the audit is free", "Most authors don't need a big package — they need someone to look closely and tell them what's worth fixing. A free audit lets you see our thinking before deciding anything."],
            ["How we stay honest", "We don't promise sales or rankings. If your listing is already in good shape, your report will say so."],
            ["Our specialist network", "For authors who want hands-on help, we introduce vetted implementation specialists. You agree scope and fees with them directly, and only if you choose to."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border bg-card p-8">
              <h2 className="text-2xl">{t}</h2>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>
      <NextStep title="Let us take a look at your book" body="Send the book title and we'll begin your free audit." />
    </>
  );
}
