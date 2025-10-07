import { BASE_API_URL, TOP_10_RACKETS_TAG } from "@/services/consts";
import type { IRacket } from "./types";
import type { Response } from "../types";
import { cookies } from "next/headers";

export const getTop10Rackets = async (): Promise<Response<IRacket[]>> => {
  const cookieStore = await cookies();

  const result = await fetch(`${BASE_API_URL}/top-10`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
    next: {
      revalidate: 15,
      tags: [TOP_10_RACKETS_TAG],
    },
  });

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: IRacket[] = await result.json();

  return { isError: false, data };
};
