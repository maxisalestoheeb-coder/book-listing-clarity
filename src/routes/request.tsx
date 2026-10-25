import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { EMAIL, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/request")({
  head: () => meta("Get Your Free Audit | Author Visibility Studio", "Tell us about your book to request a free, personalised Amazon listing audit."),
  component: Request,
});

const field = "mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

function Request() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = ["name", "email", "title", "link", "genre", "reader", "notes"].map((k) => `${k}: ${d.get(k) ?? ""}`).join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Free audit request: ${d.get("title")}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <>
      <PageHero eyebrow="Free audit" title="Tell us about your book">
        Your personalised audit is 100% free. We'll email your report, then simply ask whether you'd like to be connected with a specialist.
      </PageHero>
      <Section>
        <form onSubmit={submit} className="grid gap-5 rounded-xl border bg-card p-8 md:grid-cols-2">
          <label className="text-sm font-medium">Your name<input name="name" required className={field} /></label>
          <label className="text-sm font-medium">Email<input name="email" type="email" required className={field} /></label>
          <label className="text-sm font-medium">Book title<input name="title" required className={field} /></label>
          <label className="text-sm font-medium">Amazon link or ASIN<input name="link" className={field} placeholder="Leave blank if not yet published" /></label>
          <label className="text-sm font-medium">Genre<input name="genre" required className={field} /></label>
          <label className="text-sm font-medium">Ideal reader, in one sentence<input name="reader" className={field} /></label>
          <label className="text-sm font-medium md:col-span-2">Anything you'd like us to focus on?<textarea name="notes" rows={4} className={field} /></label>
          <div className="md:col-span-2 flex flex-wrap items-center gap-4">
            <button className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Request My Free Audit</button>
            <p className="text-xs text-muted-foreground">We never ask for your Amazon or KDP password.</p>
          </div>
          {sent && <p className="md:col-span-2 text-sm text-primary">Your email app should open with your details ready — just press send. If it didn't, write to {EMAIL}.</p>}
        </form>
      </Section>
    </>
  );
}
