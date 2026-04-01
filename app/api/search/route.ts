import { NextResponse } from "next/server";
import { normalizeLocale } from "@/lib/i18n";
import { searchPosts } from "@/lib/posts";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") ?? "";
  const locale = normalizeLocale(searchParams.get("locale"));
  const results = searchPosts(query, locale).slice(0, 5);

  return NextResponse.json({ results });
}
