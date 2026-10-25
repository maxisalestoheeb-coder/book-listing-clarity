import { createFileRoute } from "@tanstack/react-router";
import { NextStep, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => meta("Services | Author Visibility Studio", "Free personalised listing audit, keyword and category research, description copy, and specialist implementation for authors."),
  component: Services,
});

const services = [
  { t: "Free Listing Audit", tag: "Free", d: "A personalised written review of your Amazon listing: title, description, keywords, categories, cover thumbnail, and pricing context, with prioritised recommendations." },
  { t: "Keyword & Category Research", tag: "In every audit", d: "We look at how readers actually search for books like yours and which categories give your book a fair, relevant home." },
  { t: "Description Copywriting", tag: "In every audit", d: "Notes on your hook, structure, and readability — plus example rewrites of your opening lines so you can see the difference." },
  { t: "Specialist Implementation", tag: "On request", d: "After your report, we ask if you'd like us to connect you with a vetted specialist who can apply the changes for you. Their scope and fee are agreed directly with you before any work begins." },
  { t: "Follow-up Review", tag: "Free", d: "Made changes? Send the updated listing within 60 days and we'll take a second look, free of charge." },
];

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="One free audit. Everything else is your choice.">
        Every engagement starts with a personalised audit that costs nothing. If you want the changes handled for you, we connect you with a specialist.
      </PageHero>
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.t} className="rounded-xl border bg-card p-8">
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{s.tag}</span>
              <h2 className="mt-4 text-2xl">{s.t}</h2>
              <p className="mt-3 text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>
      <NextStep title="Request your free audit" body="Tell us about your book and we'll begin your personalised review." />
    </>
  );
}
