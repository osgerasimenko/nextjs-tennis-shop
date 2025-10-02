import { FC } from 'react';
import { getBrands } from "@/services/rackets/get-brands";
import { Sidebar } from '@/components/Sidebar/Sidebar';
import styles from './RacketsPage.module.css';

const RacketsLayout: FC<
  Readonly<{
    children: React.ReactNode;
  }> 
> = async ({ children }) => {
  const { data } = await getBrands();

  return (
    <div className={styles.container}>
      <Sidebar data={data}/>
      {children}
    </div>
  );
}

export default RacketsLayout;
