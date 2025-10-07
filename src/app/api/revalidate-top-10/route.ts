import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { TOP_10_RACKETS_TAG } from "@/services/consts";

export function GET() {
  revalidateTag(TOP_10_RACKETS_TAG);

  return NextResponse.json({ status: 200 });
}
