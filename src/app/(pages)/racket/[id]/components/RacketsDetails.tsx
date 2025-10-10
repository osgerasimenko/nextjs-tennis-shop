'use client';

import { FC, use } from 'react';

import { UserContext } from "@/app/providers/user-provider";
import { useHydrateFavorite, useIsFavoriteById } from "@/app/hooks/favorite-hooks";
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { IRacket } from '@/services/rackets/types';
import { FavoriteButton } from '@/components/FavoriteButton/FavoriteButton';

import styles from './RacketsDetails.module.css';

type Props = {
  data: IRacket;
};

export const RacketsDetails: FC<Props> = ({ data } ) => {
  const { user } = use(UserContext);

  useHydrateFavorite({
    id: data.id,
    isFavorite: Boolean(data.userData?.isFavorite),
  });

  const isFavoriteGlobal = useIsFavoriteById({
    id: data.id,
    isFavoriteInitial: Boolean(data.userData?.isFavorite),
  });

  if (!data) {
    return notFound();
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.brand}>{data.brand.name}</div>
        <div className={styles.title}>{data.name}</div>
        <div className={styles.description}>{data.description}</div>
        {user && <FavoriteButton id={data.id} isFavorite={isFavoriteGlobal} />}
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
