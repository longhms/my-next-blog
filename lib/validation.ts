import type { CommentPayload, ContactPayload, Locale } from "@/types/content";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(payload: ContactPayload, locale: Locale = "en") {
  const errors: string[] = [];

  if (!payload.name.trim()) errors.push(locale === "vi" ? "Ten la bat buoc." : "Name is required.");
  if (!payload.email.trim() || !emailPattern.test(payload.email))
    errors.push(locale === "vi" ? "Can nhap email hop le." : "A valid email is required.");
  if (!payload.topic.trim()) errors.push(locale === "vi" ? "Chu de la bat buoc." : "Topic is required.");
  if (payload.message.trim().length < 20)
    errors.push(
      locale === "vi"
        ? "Noi dung phai dai it nhat 20 ky tu."
        : "Message must be at least 20 characters.",
    );

  return errors;
}

export function validateCommentPayload(payload: CommentPayload, locale: Locale = "en") {
  const errors: string[] = [];

  if (!payload.name.trim()) errors.push(locale === "vi" ? "Ten la bat buoc." : "Name is required.");
  if (!payload.email.trim() || !emailPattern.test(payload.email))
    errors.push(locale === "vi" ? "Can nhap email hop le." : "A valid email is required.");
  if (payload.comment.trim().length < 12)
    errors.push(
      locale === "vi"
        ? "Binh luan phai dai it nhat 12 ky tu."
        : "Comment must be at least 12 characters.",
    );
  if (!payload.postSlug.trim())
    errors.push(locale === "vi" ? "Can co slug bai viet." : "Post slug is required.");

  return errors;
}
