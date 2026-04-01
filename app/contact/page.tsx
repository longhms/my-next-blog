import { ContactForm } from "@/components/forms/contact-form";
import { SectionHeading } from "@/components/layout/section-heading";
import { getDictionary } from "@/lib/i18n";
import { getCurrentLocale } from "@/lib/server-locale";

export default async function ContactPage() {
  const locale = await getCurrentLocale();
  const dict = getDictionary(locale);

  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <section className="panel p-6 sm:p-7">
        <SectionHeading
          kicker={dict.contactPage.kicker}
          title={dict.contactPage.title}
          description={dict.contactPage.description}
        />
        <div className="mt-8 space-y-5 rounded-[28px] border border-line bg-surface-soft/80 p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">{dict.contactPage.responseStyle}</p>
            <p className="mt-2 text-sm leading-7 text-ink">{dict.contactPage.responseText}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">{dict.contactPage.useCases}</p>
            <ul className="mt-2 space-y-2 text-sm leading-7 text-ink-muted">
              {dict.contactPage.useCaseItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <ContactForm locale={locale} />
    </div>
  );
}
