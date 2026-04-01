import { NextResponse } from "next/server";
import { searchPosts } from "@/lib/posts";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") ?? "";
  const results = searchPosts(query).slice(0, 5);

  return NextResponse.json({ results });
}
