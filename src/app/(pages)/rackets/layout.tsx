'use client';
import { FC } from 'react';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { usePathname } from 'next/navigation';

const RacketsLayout: FC<
  Readonly<{
    children: React.ReactNode;
  }> 
> = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      <Header pathname={pathname}/>
      {children}
      <Footer/>
    </>
  );
}

export default RacketsLayout;
