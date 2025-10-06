import { BASE_API_URL, TOP_10_RACKETS_TAG } from "@/services/consts";
import type { IRacket, Response } from "./types";

export const getTop10Rackets = async (): Promise<Response<IRacket[]>> => {
  const result = await fetch(`${BASE_API_URL}/top-10`, {
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
