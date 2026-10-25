import { createFileRoute } from "@tanstack/react-router";
import { EMAIL, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/terms")({
  head: () => meta("Terms | Author Visibility Studio", "Terms for Author Visibility Studio's free listing audit and specialist introductions."),
  component: () => (
    <>
      <PageHero eyebrow="Terms" title="Simple terms for a free service">Last updated October 2026.</PageHero>
      <Section className="max-w-3xl space-y-4 text-muted-foreground">
        <p>The listing audit is provided free of charge. It contains observations and recommendations, not guarantees of sales, rankings, or visibility.</p>
        <p>Author Visibility Studio is independent and not affiliated with or endorsed by Amazon or Kindle Direct Publishing. You remain responsible for your account and any changes made to it.</p>
        <p>Introductions to implementation specialists are optional. Any paid work is agreed directly between you and the specialist, in writing, before it begins.</p>
        <p>Questions: {EMAIL}</p>
      </Section>
    </>
  ),
});
