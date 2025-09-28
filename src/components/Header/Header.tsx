import { FC } from 'react';

import Link from 'next/link';
import classNames from 'classnames';
import styles from './Header.module.css';

type Props = {
  pathname?: string;
}

export const Header: FC<Props> = ({ pathname }) => {
  return (
    <div className={styles.container}>
      <div/>
      <div  className={styles.title}>Tennis store</div>
      <div  className={styles['navigation-container']}>
        <Link href="/" prefetch={false} className={classNames(styles.link, !pathname ? styles['link-active'] : {})}>Главная</Link>
        <Link href="/rackets" prefetch={false} className={classNames(styles.link, pathname === "/rackets" ? styles['link-active'] : {})}>Ракетки</Link>
      </div>
    </div>
  );
}
