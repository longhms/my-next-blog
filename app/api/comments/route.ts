import { NextResponse } from "next/server";
import { getCurrentLocale } from "@/lib/server-locale";
import { validateCommentPayload } from "@/lib/validation";
import type { CommentPayload } from "@/types/content";

export async function POST(request: Request) {
  const locale = await getCurrentLocale();
  const payload = (await request.json()) as CommentPayload;
  const errors = validateCommentPayload(payload, locale);

  if (errors.length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  return NextResponse.json({
    message:
      locale === "vi"
        ? `Da nhan binh luan cho ${payload.postSlug}. Trong app that su, binh luan se cho duyet.`
        : `Comment received for ${payload.postSlug}. In a real app this would wait for moderation.`,
  });
}
