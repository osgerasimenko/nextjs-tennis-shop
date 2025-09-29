'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import styles from './NavLink.module.css';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};


export const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const linkClassName = classNames(styles.link, pathname === href ? styles['link-active'] : {});

  return (
    <Link href={href} prefetch={false} className={linkClassName}>
      {children}
    </Link>
  );
};
