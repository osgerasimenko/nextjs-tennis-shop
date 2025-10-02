import { FC } from 'react';
import { Card } from '@/components/Card/Card';
import { Slider } from '@/components/Slider/Slider';
import { getTop10Rackets } from "@/services/rackets/get-top-10-rackets";


import styles from './RacketsTop10Page.module.css';

const RacketsTop10Page: FC = async () => {
  
  const { data } = await getTop10Rackets();

  if (!data) {
    return;
  }

  return (
    <div>
      <div className={styles.title}>Ракетки Top 10</div>
      <Slider>
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
  );
}

export default RacketsTop10Page;
