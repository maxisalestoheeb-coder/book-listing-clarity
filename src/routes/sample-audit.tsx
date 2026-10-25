import { createFileRoute } from "@tanstack/react-router";
import { NextStep, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/sample-audit")({
  head: () => meta("Sample Audit | Author Visibility Studio", "See what a free personalised Amazon listing audit looks like, using an illustrative example book."),
  component: Sample,
});

const findings = [
  { area: "Title & subtitle", p: "High", obs: "Subtitle repeats the genre but not the promise. Readers scanning search results can't tell this is a slow-burn small-town mystery.", fix: "Lead the subtitle with the setting and tone: “A Blue Ridge Cozy Mystery”." },
  { area: "Description", p: "High", obs: "The first 200 characters are a review quote; the story hook sits below the fold.", fix: "Open with the inciting moment in one sentence, then stakes, then the quote." },
  { area: "Keywords", p: "Medium", obs: "Three of seven keyword slots repeat words already in the title.", fix: "Use reader phrases such as “amateur sleuth bookshop” and “mountain town mystery”." },
  { area: "Categories", p: "Medium", obs: "Listed in a broad category with heavy competition from long-running series.", fix: "Consider a more specific sub-category that matches the book's actual content." },
  { area: "Cover thumbnail", p: "Low", obs: "Author name is legible, title is not, at search-result size.", fix: "Discuss increasing title contrast with your designer." },
];

function Sample() {
  return (
    <>
      <PageHero eyebrow="Sample audit" title="What your free report looks like">
        An illustrative example for a fictional cozy mystery, <em>The Ledger at Laurel Creek</em>. Your audit is written specifically for your book.
      </PageHero>
      <Section>
        <div className="overflow-hidden rounded-xl border bg-card">
          <div className="grid gap-2 border-b bg-secondary p-6 md:grid-cols-3">
            <p><span className="block text-xs text-muted-foreground">Book</span>The Ledger at Laurel Creek</p>
            <p><span className="block text-xs text-muted-foreground">Format</span>Kindle eBook & paperback</p>
            <p><span className="block text-xs text-muted-foreground">Overall</span>Strong book, under-explained listing</p>
          </div>
          {findings.map((f) => (
            <div key={f.area} className="grid gap-4 border-b p-6 last:border-0 md:grid-cols-[180px_1fr_1fr]">
              <div>
                <h2 className="text-lg">{f.area}</h2>
                <p className="mt-1 text-xs font-semibold text-primary">Priority: {f.p}</p>
              </div>
              <p className="text-sm"><span className="block text-xs text-muted-foreground">What we observed</span>{f.obs}</p>
              <p className="text-sm"><span className="block text-xs text-muted-foreground">Suggested change</span>{f.fix}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Every report ends with one question: would you like us to connect you with a specialist to implement these changes? Saying no is completely fine.</p>
      </Section>
      <NextStep title="Get a report like this for your book" body="Free, personalised, and yours to keep." />
    </>
  );
}
