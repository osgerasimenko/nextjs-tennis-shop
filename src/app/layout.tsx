import { FC } from 'react';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RootLayout: FC<
  Readonly<{
    children: React.ReactNode;
  }> 
> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout;
