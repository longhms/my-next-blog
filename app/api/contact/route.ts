import { NextResponse } from "next/server";
import { getCurrentLocale } from "@/lib/server-locale";
import { validateContactPayload } from "@/lib/validation";
import type { ContactPayload } from "@/types/content";

export async function POST(request: Request) {
  const locale = await getCurrentLocale();
  const payload = (await request.json()) as ContactPayload;
  const errors = validateContactPayload(payload, locale);

  if (errors.length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  return NextResponse.json({
    message:
      locale === "vi"
        ? `Cam on ${payload.name}. Tin nhan cua ban da duoc dua vao mock inbox.`
        : `Thanks ${payload.name}. Your message is queued in this mock inbox.`,
  });
}
