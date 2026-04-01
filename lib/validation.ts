import type { CommentPayload, ContactPayload } from "@/types/content";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(payload: ContactPayload) {
  const errors: string[] = [];

  if (!payload.name.trim()) errors.push("Name is required.");
  if (!payload.email.trim() || !emailPattern.test(payload.email))
    errors.push("A valid email is required.");
  if (!payload.topic.trim()) errors.push("Topic is required.");
  if (payload.message.trim().length < 20)
    errors.push("Message must be at least 20 characters.");

  return errors;
}

export function validateCommentPayload(payload: CommentPayload) {
  const errors: string[] = [];

  if (!payload.name.trim()) errors.push("Name is required.");
  if (!payload.email.trim() || !emailPattern.test(payload.email))
    errors.push("A valid email is required.");
  if (payload.comment.trim().length < 12)
    errors.push("Comment must be at least 12 characters.");
  if (!payload.postSlug.trim()) errors.push("Post slug is required.");

  return errors;
}
