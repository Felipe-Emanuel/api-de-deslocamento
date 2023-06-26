import styles from "./Slider.module.scss";
import { A11y } from "swiper";
import { Swiper } from "swiper/react";
import { ReactNode } from "react";
import { useWindow } from "@hooks/useWindow";

import "swiper/css";

type ISwiperComponentProps = {
  children: ReactNode;
  className?: string;
  isHovered?: boolean;
};

export default function SwiperComponent({ children, isHovered = false }: ISwiperComponentProps) {
  const { width } = useWindow()

  const renderSwiper = () => {
    return (
      <Swiper
        draggable
        grabCursor
        slidesPerView={width > 500 ? 4 : 2}
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
