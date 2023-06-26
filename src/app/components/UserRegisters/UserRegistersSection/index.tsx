import styles from "./UserRegisters.module.scss";
import SwiperComponent from "../../Slider/Swiper";
import { Client } from "../Cards/Client";
import { Vehicle } from "../Cards/Vehicle";
import { Section } from "../../containers/Section";
import { useState } from "react";
import { Normalize } from "@/src/functions/Normalize";
import { Conductor } from "../Cards/Conductor";
import { SwiperSlide } from "swiper/react";
import { Displacement } from "../Cards/Displacement";
import { UserRegistersType } from "@/src/models/userPosts";

interface UserRegistersSectionProps {
  data: UserRegistersType[];
  section: string;
}

const inflection = require("inflection");

export function UserRegistersSection({
  data = [],
  section = "",
}: UserRegistersSectionProps) {
  if (data.length === 0) return null;

  const [isHovered, setIsHovered] = useState(false);

  const changeHover = () => setIsHovered((isHovered) => !isHovered);

  const { capitalizeName } = Normalize();

  const normalizePlurals = () => {
    const pluralize = inflection.pluralize(section);

    if (section === "condutor") return "Condutores";

    return capitalizeName(pluralize);
  };

  return (
    <Section id={section}>
      <h1>Meus {normalizePlurals()} Cadastrados!</h1>
      <SwiperComponent className={styles.container} isHovered={isHovered}>
        {data?.map((client: UserRegistersType, i: number) => {
          const cardOption: { [key: string]: JSX.Element } = {
            cliente: <Client item={client} />,
            deslocamento: <Displacement item={client} />,
            condutor: <Conductor item={client} />,
            veículo: <Vehicle item={client} />,
          };

          return (
            <SwiperSlide
              key={i}
              onMouseEnter={changeHover}
              onMouseLeave={changeHover}
            >
              {cardOption[section]}
            </SwiperSlide>
          );
        })}
      </SwiperComponent>
    </Section>
  );
}
