import { FC } from 'react';

import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";
import { Card } from '@/components/Card/Card';
import { rackets } from './consts';
import styles from './page.module.css';

const Page: FC = () => {
  return (
    <div>
      <div  className={styles.headline}>
        <div className={styles.title}>Ракетки</div>
        <Link href="/rackets" prefetch={false} className={styles.link}>Все <MdArrowOutward /></Link>
      </div>
      <div className={styles.container}>
      {rackets.map((racket) => (
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
