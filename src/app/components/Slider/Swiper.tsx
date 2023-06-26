import styles from "./Slider.module.scss";
import { Swiper } from "swiper/react";
import { ReactNode } from "react";
import { A11y } from "swiper";

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
        slidesPerView={4}
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
