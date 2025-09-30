import { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Card.module.css';

type Props = {
  id: number;
  title: string;
  image: string;
}

export const Card: FC<Props> = ({ id, title, image }) => {
  return (
    <div className={styles.container}>
      <Link href={`/rackets/${id}`} prefetch={false}>
        <Image
            src={image}
            alt={title}
            layout="responsive"
            width={1200}
            height={800}
            className={styles.image}
          />
      </Link>
      <div  className={styles.title}>{title}</div>
    </div>
  );
}
