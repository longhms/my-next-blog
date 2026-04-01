import { NextResponse } from "next/server";
import { validateCommentPayload } from "@/lib/validation";
import type { CommentPayload } from "@/types/content";

export async function POST(request: Request) {
  const payload = (await request.json()) as CommentPayload;
  const errors = validateCommentPayload(payload);

  if (errors.length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  return NextResponse.json({
    message: `Comment received for ${payload.postSlug}. In a real app this would wait for moderation.`,
  });
}
