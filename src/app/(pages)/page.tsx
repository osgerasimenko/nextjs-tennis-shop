import { FC } from 'react';

import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";
import { Card } from '@/components/Card/Card';
import { getRackets } from "@/services/rackets/get-rackets";
import { getTop10Rackets } from "@/services/rackets/get-top-10-rackets";
import styles from './page.module.css';

const Page: FC = async () => {
  const [rackets, racketsTop10] = await Promise.all([
    getRackets({ limit: 10 }),
    getTop10Rackets()
  ]);

  return (
    <div>
      <div  className={styles.headline}>
        <div className={styles.title}>Ракетки</div>
        <Link href="/rackets" prefetch={false} className={styles.link}>Все <MdArrowOutward /></Link>
      </div>
      <div className={styles.container}>
        {rackets?.data?.map((racket) => (
          <Card
            key={racket.id}
            id={racket.id}
            title={racket.name}
            image={racket.imageUrl}
          />
        ))}
      </div>
      <div  className={styles.headline}>
        <div className={styles.title}>Ракетки Top-10</div>
        <Link href="/rackets/top10" prefetch={false} className={styles.link}>Топ-10 <MdArrowOutward /></Link>
      </div>
      <div className={styles.container}>
        {racketsTop10?.data?.map((racket) => (
          <Card
            key={racket.id}
            id={racket.id}
            title={racket.name}
            image={racket.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
