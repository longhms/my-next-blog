"use client";

import { useState } from "react";
import type { ContactPayload } from "@/types/content";

const initialState: ContactPayload = {
  name: "",
  email: "",
  topic: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

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
      setErrors(payload.errors ?? ["Something went wrong."]);
      setSubmitting(false);
      return;
    }

    setStatus(payload.message ?? "Request sent.");
    setValues(initialState);
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="panel space-y-5 p-6 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">Name</span>
          <input
            className="field-input"
            value={values.name}
            onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">Email</span>
          <input
            className="field-input"
            type="email"
            value={values.email}
            onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">Topic</span>
        <input
          className="field-input"
          value={values.topic}
          onChange={(event) => setValues((current) => ({ ...current, topic: event.target.value }))}
          placeholder="Partnership, scouting brief, editorial inquiry..."
        />
      </label>
      <label className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">Message</span>
        <textarea
          className="field-input min-h-36 resize-y"
          value={values.message}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          placeholder="Tell us what you need."
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
        {submitting ? "Sending..." : "Send request"}
      </button>
    </form>
  );
}
