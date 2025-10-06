import { BASE_API_URL } from "@/services/consts";
import type { IRacket, Response } from "./types";

type Params = {
  id: string;
};

export const getMetaRacketById = async ({ id }: Params): Promise<Response<IRacket>> => {
  const result = await fetch(`${BASE_API_URL}/meta/product/${id}`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { product: IRacket } = await result.json();

  return { isError: false, data: data.product };
};
