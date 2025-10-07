"use client";

import { useActionState, useEffect } from "react";
import { signupAction } from "./signup-action";
import { SignupState } from "./types";
import styles from './Signup.module.css';

const Signup = () => {
  const [{ error, redirectTo }, formAction, isPending] = useActionState<
    SignupState,
    FormData
  >(signupAction, {
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
          <input name='password' type='text' required />
        </div>
        {error && <div>{error}</div>}
        <button disabled={isPending}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
