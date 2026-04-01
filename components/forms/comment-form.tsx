"use client";

import { useState } from "react";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types/content";

interface CommentFormProps {
  postSlug: string;
  locale: Locale;
}

export function CommentForm({ postSlug, locale }: CommentFormProps) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [status, setStatus] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const dict = getDictionary(locale);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setErrors([]);
    setStatus("");

    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        postSlug,
      }),
    });

    const payload: { message?: string; errors?: string[] } = await response.json();

    if (!response.ok) {
      setErrors(payload.errors ?? [dict.commentForm.fallbackError]);
      setSubmitting(false);
      return;
    }

    setStatus(payload.message ?? dict.commentForm.fallbackSuccess);
    setValues({
      name: "",
      email: "",
      comment: "",
    });
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="panel space-y-4 p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row">
        <label className="w-full space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">{dict.commentForm.name}</span>
          <input
            className="field-input"
            value={values.name}
            onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
            placeholder={dict.commentForm.namePlaceholder}
          />
        </label>
        <label className="w-full space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">{dict.commentForm.email}</span>
          <input
            className="field-input"
            type="email"
            value={values.email}
            onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            placeholder={dict.commentForm.emailPlaceholder}
          />
        </label>
      </div>
      <label className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">{dict.commentForm.comment}</span>
        <textarea
          className="field-input min-h-32 resize-y"
          value={values.comment}
          onChange={(event) => setValues((current) => ({ ...current, comment: event.target.value }))}
          placeholder={dict.commentForm.commentPlaceholder}
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
        className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white disabled:opacity-60"
      >
        {submitting ? dict.commentForm.posting : dict.commentForm.post}
      </button>
    </form>
  );
}
