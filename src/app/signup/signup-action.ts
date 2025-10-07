"use server";

import { BASE_API_URL } from "@/services/consts";
import { parseSetCookie } from "@/helpers/parse-set-cookie";
import { SignupState } from "./types";
import { cookies } from "next/headers";

export const signupAction = async (_: SignupState, formData: FormData) => {
  const login = formData.get("login")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  const result = await fetch(`${BASE_API_URL}/auth/signup`, {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (result.status !== 200) {
    return { error: "invalid login or password" };
  }

  const cookiesStore = await cookies();
  const setCookieHeader = result.headers.getSetCookie();

  if (setCookieHeader) {
    const parsed = parseSetCookie(setCookieHeader);
    for (const cookie of parsed) {
      cookiesStore.set(cookie.name, cookie.value, cookie.options);
    }
  }

  return { error: "", redirectTo: "/" };
};
