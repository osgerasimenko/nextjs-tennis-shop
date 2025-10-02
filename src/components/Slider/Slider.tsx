'use client';

import { FC } from 'react';
import SliderComponents  from 'react-slick';
import type { Settings } from 'react-slick';
import styles from './Slider.module.css';

const settings: Settings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export const Slider: FC<
Readonly<{
  children: React.ReactNode;
}> 
> = ({ children }) => (
  <SliderComponents {...settings} className={styles.slider}>
    {children}
  </SliderComponents>
);
