import { FC } from 'react';
import styles from './NotFound.module.css';

export const NotFound: FC<
    Readonly<{
      children: React.ReactNode;
    }> 
    > = ({children}) => {
    return (
      <div className={styles.container}>{children}</div>
    );
}
