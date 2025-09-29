'use client';

import { FC } from 'react';
import { NavLink } from '@/components/NavLink/NavLink';
import styles from './Header.module.css';

export const Header: FC = () => (
  <div className={styles.container}>
    <div/>
    <div  className={styles.title}>Tennis store</div>
    <div  className={styles['navigation-container']}>
      <NavLink href="/">Главная</NavLink>
      <NavLink href="/rackets">Ракетки</NavLink>
    </div>
  </div>
);
