'use client';

import { FC, use } from 'react';

import { UserContext } from "@/app/providers/user-provider";
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { IRacket } from '@/services/rackets/types';
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

import styles from './RacketsDetails.module.css';

type Props = {
  data?: IRacket;
};

export const RacketsDetails: FC<Props> = ({ data } ) => {
    const { user } = use(UserContext);
  if (!data) {
    return notFound();
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.brand}>{data.brand.name}</div>
        <div className={styles.title}>{data.name}</div>
        <div className={styles.description}>{data.description}</div>
        {user && 
          (data.userData?.isFavorite ? <MdFavorite size={30} color="red"/> : <MdFavoriteBorder size={30} color="red"/>)
        }
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
