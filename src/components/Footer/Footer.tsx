import { FC } from 'react';

import styles from './Footer.module.css';

export const Footer: FC = () => {
  return (
    <div className={styles.container}>
      <div  className={styles.title}>Tennis store</div>
      <div  className={styles.copyright}>@ 2025 Tennis Store. All rights reserved.</div>
    </div>
  );
}
