"use client";

import { use, useTransition } from "react";
import { BASE_API_URL } from "@/services/consts";
import { UserContext } from "@/app/providers/user-provider";

import { FC } from 'react';
import { NavLink } from '@/components/NavLink/NavLink';
import styles from './AuthLink.module.css';

export const AuthLink: FC = () => {
  const { user } = use(UserContext);
  const [isPending, startTransition] = useTransition();

  const handleLogout = async () => {
  await fetch(`${BASE_API_URL}/auth/logout`, {
    credentials: "include",
    method: "DELETE",
  });

  location.assign("/");
};

  return (
    <div  className={styles['navigation-container']}>
      {!user ?
        <>
          <NavLink href="/login">Войти</NavLink>
          <NavLink href="/signup">Регистрация</NavLink>
        </>
      :
        <>
          <div>Привет,&nbsp;{user.login}!</div>
          <button disabled={isPending} onClick={() => startTransition(handleLogout)}>
            Logout
          </button>
        </>
      }
    </div>
  )
};
