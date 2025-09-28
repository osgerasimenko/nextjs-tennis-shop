'use client';

import { FC, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import {rackets} from '@/mocks/rackets';

import styles from './RacketsDetailsClientPage.module.css';

type Props = {
  id: string;
};


export const RacketsDetailsClientPage: FC<Props> = () => {
  const params = useParams();

  const data = useMemo(() => rackets.find(item => item.id.toString() === params.id), [params.id]);

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
