'use client';

import { FC } from 'react';
import Image from 'next/image';
import { rackets } from '@/mocks/rackets';

import styles from './RacketsDetailsPage.module.css';

type Props = {
  id: string;
};

export const RacketsDetailsPage: FC<Props> = ({ id } ) => {

  const data = rackets.find(item => item.id.toString() === id);

  if (!data) {
    return;
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.brand}>{data.brand.name}</div>
        <div className={styles.title}>{data.name}</div>
        <div className={styles.description}>{data.description}</div>
      </div>
      <Image
        src={data.imageUrl}
        alt={data.name}
        layout="responsive"
        width={1200}
        height={800}
        className={styles.image}
      />
      <div className={styles.price}>&euro;{data.price}</div>
    </div>
  );
}
