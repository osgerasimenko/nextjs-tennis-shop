import { FC } from 'react';
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
          {children}
      </body>
    </html>
  );
}

export default RootLayout;
