import { FC } from 'react';
import { Metadata } from "next";
import NextTopLoader from 'nextjs-toploader';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const metadata: Metadata = {
  title: "Tennis shop",
  description: "Учебный проект интернет-магазина товаров для тенниса",
};

const RootLayout: FC<
  Readonly<{
    children: React.ReactNode;
  }> 
> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NextTopLoader showSpinner={false} />
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout;
