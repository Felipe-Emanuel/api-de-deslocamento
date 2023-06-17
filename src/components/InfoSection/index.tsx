import styles from "./InfoSection.module.scss";
import { LinkButton } from "../LinkButton";
import { useStateContext } from "@/src/data/hooks/useStateContext";
import { Thumbs } from "@/src/models/thumbs";
import { SecondClientThumb } from "../Thumbs/SecondClientThumb";
import { FirstThumb } from "../Thumbs/FirstThumb";
import { SecondConductorThumb } from "../Thumbs/SecondConductorThumb";
import { SecondDisplacementThumb } from "../Thumbs/SecondDisplacementThumb";
import { SecondVehicleThumb } from "../Thumbs/SecondVehicleThumb";
import ParallaxTilt from "react-parallax-tilt";

export function InfoSection() {
  const { state } = useStateContext();

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
          {thumbs[state].secondThumb}
        </ParallaxTilt>
        <div className={styles.thumbInfo}>
          <h2 data-testid="secondTitle">{thumbs[state].secondTitle}</h2>
          <div className={styles.thumbButton}>
            <p>Explore todo o conteúdo ao acessar agora mesmo!</p>
            <LinkButton />
          </div>
        </div>
      </div>
    </>
  );
}
