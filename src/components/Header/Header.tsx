import { FC } from 'react';
import { NavLink } from '@/components/NavLink/NavLink';
import { AuthLink } from '@/components/AuthLink/AuthLink';
import styles from './Header.module.css';

export const Header: FC = () => (
  <div className={styles.container}>
    <div  className={styles['navigation-container']}>
      <NavLink href="/">Главная</NavLink>
      <NavLink href="/rackets">Ракетки</NavLink>
      <NavLink href="/rackets/top10">Tоп-10</NavLink>
    </div>
    <div  className={styles.title}>Tennis store</div>
    <div  className={styles['navigation-container']}>
      <AuthLink />
    </div>
  </div>
);
