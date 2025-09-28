import { FC } from 'react';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

const HomePageLayout: FC<
  Readonly<{
    children: React.ReactNode;
  }> 
> = ({ children }) => {
  return (
    <>
      <Header/>
        {children}
      <Footer/>
    </>
  );
}

export default HomePageLayout;
