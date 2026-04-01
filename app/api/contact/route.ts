import { NextResponse } from "next/server";
import { validateContactPayload } from "@/lib/validation";
import type { ContactPayload } from "@/types/content";

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const errors = validateContactPayload(payload);

  if (errors.length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  return NextResponse.json({
    message: `Thanks ${payload.name}. Your message is queued in this mock inbox.`,
  });
}
