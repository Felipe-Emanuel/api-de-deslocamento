import styles from "./InfoSection.module.scss";
import { LinkButton } from "../LinkButton";
import { useStateContext } from "@/src/data/hooks/useStateContext";
import { Thumbs } from "@/src/models/thumbs";
import { SecondClientThumb } from "../Thumbs/SecondClientThumb";
import { FirstThumb } from "../Thumbs/FirstThumb";
import { SecondConductorThumb } from "../Thumbs/SecondConductorThumb";

export function InfoSection() {
  const { state } = useStateContext();

  const firstTitle = `Busque um ${state} com um filtro eficiente!`;

  const thumbs: Thumbs = {
    cliente: {
      secondThumb: <SecondClientThumb />,
      secondTitle: `Registre-se agora e faça parte da nossa comunidade de ${state} satisfeitos!`,
    },
    deslocamento: {
      secondThumb: <SecondClientThumb />,
      secondTitle: ``,
    },
    condutor: {
      secondThumb: <SecondConductorThumb />,
      secondTitle: `Junte-se a nós e seja um dos habilidosos condutores em nossa comunidade!`,
    },
    veículo: {
      secondThumb: <SecondClientThumb />,
      secondTitle: ``,
    },
  };

  return (
    <>
      <div className={styles.flexSection}>
        <div className={styles.thumb}>
          <FirstThumb />
        </div>
        <div className={styles.thumbInfo}>
          <h2>{firstTitle}</h2>
          <div className={styles.thumbButton}>
            <p>Explore todo o conteúdo ao acessar agora mesmo!</p>
            <LinkButton />
          </div>
        </div>
      </div>
      <div className={styles.flexSection}>
        <div className={styles.thumb}>{thumbs[state].secondThumb}</div>
        <div className={styles.thumbInfo}>
          <h2>{thumbs[state].secondTitle}</h2>
          <div className={styles.thumbButton}>
            <p>Explore todo o conteúdo ao acessar agora mesmo!</p>
            <LinkButton />
          </div>
        </div>
      </div>
    </>
  );
}
