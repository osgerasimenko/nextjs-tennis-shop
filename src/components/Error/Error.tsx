import { FC } from 'react';
import styles from './Error.module.css';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
}

export const Error: FC<Props> = ({ error, reset }) => {
  return (
    <div className={styles.container}>
      <div>{error.message}</div>
      <div><a onClick={reset}>try again</a></div>
    </div>
  );
}
