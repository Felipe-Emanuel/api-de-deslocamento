'use cliente';
import styles from "./Slider.module.scss";
import { A11y } from "swiper";
import { Swiper } from "swiper/react";
import { ReactNode } from "react";

import "swiper/css";

type ISwiperComponentProps = {
  children: ReactNode;
  className?: string;
  isHovered?: boolean;
};

export default function SwiperComponent({ children, isHovered = false }: ISwiperComponentProps) {
  const renderSwiper = () => {
    return (
      <Swiper
        draggable
        grabCursor
        breakpoints={{
          550: {
            slidesPerView: 2
          },
          860: {
            slidesPerView: 3
          },
          1280: {
            slidesPerView: 4
          },
          1890: {
            slidesPerView: 5
          },
        }}
        modules={[A11y]}
        className={styles.swiper}
      >
        <div className={isHovered ? styles.overlayHovered : styles.overlay} />
        {children}
      </Swiper>
    );
  };

  return renderSwiper();
}
