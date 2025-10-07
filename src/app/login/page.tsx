"use client";

import { useActionState, useEffect } from "react";
import { loginAction } from "./login-action";
import { LoginState } from "./types";
import styles from './Login.module.css';

const Login = () => {
  const [{ error, redirectTo }, formAction, isPending] = useActionState<
    LoginState,
    FormData
  >(loginAction, {
    error: "",
  });

  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);

  return (
    <div className={styles.container}>
      <form action={formAction}>
        <div>
          <label htmlFor='login'>Login:</label>
          <input name='login' type='text' required />
        </div>

        <div>
          <label htmlFor='password'>Password:</label>
          <input name='password' type='password' required />
        </div>
        {error && <div>{error}</div>}
        <button disabled={isPending}>Login</button>
      </form>
    </div>
  );
};

export default Login;
