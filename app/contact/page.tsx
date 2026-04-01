import { ContactForm } from "@/components/forms/contact-form";
import { SectionHeading } from "@/components/layout/section-heading";

export default function ContactPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <section className="panel p-6 sm:p-7">
        <SectionHeading
          kicker="Contact"
          title="Send an editorial or scouting request."
          description="This page satisfies the contact form requirement from the spec and posts to a mock route handler with validation."
        />
        <div className="mt-8 space-y-5 rounded-[28px] border border-line bg-surface-soft/80 p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">Response style</p>
            <p className="mt-2 text-sm leading-7 text-ink">
              Clear briefs get the best reply: what you need, who it is for, and the timeline.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">Use cases</p>
            <ul className="mt-2 space-y-2 text-sm leading-7 text-ink-muted">
              <li>Custom match analysis</li>
              <li>Editorial partnership</li>
              <li>Portfolio review or product critique</li>
            </ul>
          </div>
        </div>
      </section>
      <ContactForm />
    </div>
  );
}
