import { BASE_API_URL } from "@/services/consts";
import type { IBrand } from "./types";
import type { Response } from "../types";

export const getBrands = async (): Promise<Response<IBrand[]>> => {
  const result = await fetch(`${BASE_API_URL}/brands`);

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: IBrand[] = await result.json();

  return { isError: false, data };
};
