'use client';

import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import Slider from 'react-slick';
import type { Settings } from 'react-slick';
import { Card } from '@/components/Card/Card';
import { MdCircle } from "react-icons/md";
import { rackets as data } from '@/mocks/rackets';

import styles from './RacketsPage.module.css';

const settings: Settings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const RacketsPage: FC = () => {

  const brands = [...data.reduce((acc, item) => {
    const existingBrand = acc.get(item.brand.id);
    if (!existingBrand) {
      acc.set(item.brand.id, { id: item.brand.id, name: item.brand.name });
    }
    return acc;
  }, new Map()).values()];
  
  if (!data) {
    return;
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={classNames(styles.brand, styles.gap)}>Бренд</div>
        <div className={styles.brandList}>
          <div className={styles.row}>
            <MdCircle size={6}/>
            <Link href="./rackets"  className={classNames(styles.link, styles.small_gap)}>All</Link>
          </div>
          {brands.map((brand) => (
            <Link key={brand.id} href={`/?brand_id={brand.id}`} className={classNames(styles.link, styles.gap)}>{brand.name}</Link>
          ))}
        </div>
      </div>
      <div>
      <div className={styles.title}>Ракетки</div>
        <Slider {...settings} className={styles.slider}>
          {data.map((racket) => (
            <Card
              key={racket.id}
              id={racket.id}
              title={racket.name}
              image={racket.imageUrl}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default RacketsPage;
