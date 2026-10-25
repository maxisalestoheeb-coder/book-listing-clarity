import { createFileRoute } from "@tanstack/react-router";
import { EMAIL, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/privacy")({
  head: () => meta("Privacy Policy | Author Visibility Studio", "How Author Visibility Studio handles the information you share for your free audit."),
  component: () => (
    <>
      <PageHero eyebrow="Privacy Policy" title="Your information, handled plainly">Last updated October 2026.</PageHero>
      <Section className="max-w-3xl space-y-4 text-muted-foreground">
        <p>We collect only what you send us: your name, email, and book details. We use it to prepare your audit and reply to you.</p>
        <p>We never request your Amazon or KDP password. If you ask to be introduced to an implementation specialist, we share your book details and contact information with that specialist only with your permission.</p>
        <p>We don't sell your data. You can ask us to delete your information at any time by writing to {EMAIL}.</p>
      </Section>
    </>
  ),
});
