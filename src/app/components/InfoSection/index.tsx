"use client";
import styles from "./InfoSection.module.scss";
import ParallaxTilt from "react-parallax-tilt";
import { Thumbs } from "@/src/models/thumbs";
import { LinkButton } from "../LinkButton";
import { FirstThumb } from "../Thumbs/FirstThumb";
import { useStateContext } from "@hooks/useStateContext";
import { SecondClientThumb } from "../Thumbs/SecondClientThumb";
import { SecondVehicleThumb } from "../Thumbs/SecondVehicleThumb";
import { usePageStateContext } from "@hooks/usePageStateContext";
import { SecondConductorThumb } from "../Thumbs/SecondConductorThumb";
import { SecondDisplacementThumb } from "../Thumbs/SecondDisplacementThumb";

export function InfoSection() {
  const { state } = useStateContext();
  const { setPageState } = usePageStateContext();

  const firstTitle = `Busque um ${state} com um filtro eficiente!`;

  const thumbs: Thumbs = {
    cliente: {
      secondThumb: <SecondClientThumb />,
      secondTitle: `Registre-se agora e faça parte da nossa comunidade de ${state} satisfeitos!`,
    },
    deslocamento: {
      secondThumb: <SecondDisplacementThumb />,
      secondTitle: `Registre seus deslocamentos e tenha um histórico completo das suas viagens!`,
    },
    condutor: {
      secondThumb: <SecondConductorThumb />,
      secondTitle: `Junte-se a nós e seja um dos habilidosos condutores em nossa comunidade!`,
    },
    veículo: {
      secondThumb: <SecondVehicleThumb />,
      secondTitle: `Explore nossa frota de veículos disponíveis e encontre o carro perfeito para suas necessidades!`,
    },
  };

  return (
    <>
      <div className={styles.flexSection}>
        <ParallaxTilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          className={styles.thumb}
        >
          <FirstThumb />
        </ParallaxTilt>
        <div className={styles.thumbInfo}>
          <h2>{firstTitle}</h2>
          <div className={styles.thumbButton}>
            <p>Explore todo o conteúdo ao acessar agora mesmo!</p>
            <LinkButton />
          </div>
        </div>
      </div>
      <div className={styles.flexSection}>
        <ParallaxTilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          className={styles.thumb}
        >
          {thumbs[state || "cliente"].secondThumb}
        </ParallaxTilt>
        <div className={styles.thumbInfo}>
          <h2 data-testid="secondTitle">{thumbs[state || "cliente"].secondTitle}</h2>
          <div className={styles.thumbButton}>
            <p>Acesse e continue seu cadastro agora mesmo!</p>
            <LinkButton
              label="Continuar cadastro"
              onClick={() => setPageState("cadastrar")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
