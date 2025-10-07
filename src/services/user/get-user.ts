import { cookies } from "next/headers";
import { BASE_API_URL } from "@/services/consts";
import type { IUser } from "./types";
import type { Response } from "../types";

export const getUser = async (): Promise<Response<IUser>> => {
  const cookieStore = await cookies();

  const result = await fetch(`${BASE_API_URL}/auth/user`, {
    credentials: "include",
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  if (result.status === 401) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { user: IUser } = await result.json();

  return { isError: false, data: data.user };
};
