import styles from "./UserRegisters.module.scss";
import SwiperComponent from "@components/Slider/Swiper";
import { Client } from "../Cards/Client";
import { Vehicle } from "../Cards/Vehicle";
import { NoData } from "@components/NoData";
import { Section } from "@components/containers/Section";
import { useState } from "react";
import { Normalize } from "@/src/functions/Normalize";
import { Conductor } from "../Cards/Conductor";
import { StateType } from "@/src/app/data/contexts/StateContext";
import { SwiperSlide } from "swiper/react";
import { Displacement } from "../Cards/Displacement";
import { UserRegistersType } from "@/src/models/userPosts";

interface UserRegistersSectionProps {
  data: UserRegistersType[];
  section: StateType | string | undefined;
}

const inflection = require("inflection");

export function UserRegistersSection({
  data = [],
  section = "cliente",
}: UserRegistersSectionProps) {
  if (data.length === 0) return <NoData section={section} />;


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
