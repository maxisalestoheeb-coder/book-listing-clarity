import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const EMAIL = "hello@authorvisibilitystudio.com";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/sample-audit", label: "Sample Audit" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
] as const;

export function CtaButton({ to = "/request", children, variant = "primary" }: { to?: string; children: ReactNode; variant?: "primary" | "outline" }) {
  const cls =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "border border-foreground/25 text-foreground hover:bg-secondary";
  return (
    <Link to={to} className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors ${cls}`}>
      {children}
    </Link>
  );
}

export function Header() {
  return (
    <header className="border-b bg-background/90 backdrop-blur sticky top-0 z-20">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink font-serif text-lg text-ink-foreground">A</span>
          <span className="leading-tight">
            <span className="block font-serif text-lg">Author Visibility Studio</span>
            <span className="block text-xs text-muted-foreground">Independent listing review</span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground font-semibold" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
          <CtaButton>Get My Free Audit</CtaButton>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-serif text-xl">Author Visibility Studio</p>
          <p className="mt-3 text-sm opacity-80">
            Amazon visibility support — an independent team, not affiliated with Amazon. Free personalised listing audits for authors and independent publishers.
          </p>
          <a href={`mailto:${EMAIL}`} className="mt-4 block text-sm underline underline-offset-4">{EMAIL}</a>
        </div>
        <FooterCol title="Services" links={[["Free Listing Audit", "/services"], ["Keyword & Category Research", "/services"], ["Description Copywriting", "/services"], ["Specialist Implementation", "/services"], ["Follow-up Review", "/services"]]} />
        <FooterCol title="Studio" links={[["How It Works", "/how-it-works"], ["Sample Audit", "/sample-audit"], ["About", "/about"], ["FAQ", "/faq"]]} />
        <FooterCol title="Details" links={[["Privacy Policy", "/privacy"], ["Terms", "/terms"], ["Contact", "/request"]]} />
      </div>
      <div className="border-t border-ink-foreground/15">
        <div className="mx-auto max-w-6xl space-y-2 px-6 py-6 text-xs opacity-75">
          <p>Studio base: Asheville, North Carolina · © 2026 Author Visibility Studio. All rights reserved.</p>
          <p>
            Third-party disclosure: Author Visibility Studio is a third-party service and is not affiliated with or endorsed by Amazon or Kindle Direct Publishing. We never request your Amazon or Kindle Direct Publishing password, and you retain full control of your publishing account.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest opacity-70">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map(([l, to]) => (
          <li key={l}><Link to={to} className="opacity-90 hover:opacity-100 hover:underline">{l}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">{title}</h1>
      {children && <div className="mt-6 max-w-2xl text-lg text-muted-foreground">{children}</div>}
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-6xl px-6 py-12 ${className}`}>{children}</section>;
}

export function NextStep({ title, body }: { title: string; body: string }) {
  return (
    <Section>
      <div className="rounded-xl bg-secondary p-10 md:p-14">
        <p className="eyebrow">Next step</p>
        <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">{body}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton>Get My Free Audit</CtaButton>
          <CtaButton to="/sample-audit" variant="outline">See a sample audit</CtaButton>
        </div>
      </div>
    </Section>
  );
}

export const steps = [
  { n: "01", t: "Tell us about your book", d: "Share the title, link, genre, and what you hope readers feel. Two minutes, no account access." },
  { n: "02", t: "We personalise your audit", d: "A real person studies your title, cover, description, keywords, categories, and the competition around it." },
  { n: "03", t: "You receive your report", d: "A clear, written audit with prioritised findings and practical fixes — 100% free, yours to keep." },
  { n: "04", t: "Optional: meet a specialist", d: "If you want help applying the changes, we ask whether you'd like an introduction to a vetted implementation specialist. No pressure." },
];

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  };
}
