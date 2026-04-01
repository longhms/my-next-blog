"use client";

import { useState } from "react";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import type { ContactPayload } from "@/types/content";

const initialState: ContactPayload = {
  name: "",
  email: "",
  topic: "",
  message: "",
};

interface ContactFormProps {
  locale: Locale;
}

export function ContactForm({ locale }: ContactFormProps) {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const dict = getDictionary(locale);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setErrors([]);
    setStatus("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const payload: { message?: string; errors?: string[] } = await response.json();

    if (!response.ok) {
      setErrors(payload.errors ?? [dict.contactForm.fallbackError]);
      setSubmitting(false);
      return;
    }

    setStatus(payload.message ?? dict.contactForm.fallbackSuccess);
    setValues(initialState);
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="panel space-y-5 p-6 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">{dict.contactForm.name}</span>
          <input
            className="field-input"
            value={values.name}
            onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
            placeholder={dict.contactForm.namePlaceholder}
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">{dict.contactForm.email}</span>
          <input
            className="field-input"
            type="email"
            value={values.email}
            onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            placeholder={dict.contactForm.emailPlaceholder}
          />
        </label>
      </div>
      <label className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">{dict.contactForm.topic}</span>
        <input
          className="field-input"
          value={values.topic}
          onChange={(event) => setValues((current) => ({ ...current, topic: event.target.value }))}
          placeholder={dict.contactForm.topicPlaceholder}
        />
      </label>
      <label className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">{dict.contactForm.message}</span>
        <textarea
          className="field-input min-h-36 resize-y"
          value={values.message}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          placeholder={dict.contactForm.messagePlaceholder}
        />
      </label>
      {errors.length > 0 ? (
        <div className="rounded-[22px] border border-coral/20 bg-coral/10 p-4 text-sm text-coral">
          {errors.join(" ")}
        </div>
      ) : null}
      {status ? (
        <div className="rounded-[22px] border border-pitch/20 bg-pitch/10 p-4 text-sm text-pitch">
          {status}
        </div>
      ) : null}
      <button
        type="submit"
        disabled={submitting}
        className="rounded-full bg-pitch px-5 py-3 text-sm font-semibold text-white transition hover:bg-pitch-deep disabled:opacity-60"
      >
        {submitting ? dict.contactForm.sending : dict.contactForm.send}
      </button>
    </form>
  );
}
