import { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { MdCircle } from "react-icons/md";
import type { IBrand } from '@/services/rackets/types';
import styles from './Sidebar.module.css';

type Props = {
  data?: IBrand[];
}

export const Sidebar: FC<Props> = async({data}) => {
  
  if (!data) {
    return;
  }

  return (
    <div className={styles.sidebar}>
    <div className={classNames(styles.brand, styles.gap)}>Бренд</div>
    <div className={styles.brandList}>
      <div className={styles.row}>
        <MdCircle size={6}/>
        <Link href="./rackets"  className={classNames(styles.link, styles.small_gap)}>All</Link>
      </div>
      {data.map((brand) => (
        <Link key={brand.id} href={`/?brand_id={brand.id}`} className={classNames(styles.link, styles.gap)}>{brand.name}</Link>
      ))}
    </div>

  </div>
  );
}
