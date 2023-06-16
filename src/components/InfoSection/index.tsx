import styles from "./InfoSection.module.scss";
import { LinkButton } from "../LinkButton";
import { useStateContext } from "@/src/data/hooks/useStateContext";
import { FirstClientThumb } from "../Thumbs/client/FirstClientThumb";
import { Thumbs } from "@/src/models/thumbs";
import { SecondClientThumb } from "../Thumbs/client/SecondClientThumb";

export function InfoSection() {
  const { state } = useStateContext();

  const firstTitle = `Busque um ${state} com um filtro eficiente!`

  const thumbs: Thumbs = {
    cliente: {
      first: <FirstClientThumb />,
      second: <SecondClientThumb />,
      firstTitle,
      secondTitle:
        `Registre-se agora e faça parte da nossa comunidade de ${state} satisfeitos!`,
    },
    deslocamento: {
      first: <FirstClientThumb />,
      second: <SecondClientThumb />,
      firstTitle,
      secondTitle: "",
    },
    condutor: {
      first: <FirstClientThumb />,
      second: <SecondClientThumb />,
      firstTitle,
      secondTitle: "",
    },
    veículo: {
      first: <FirstClientThumb />,
      second: <SecondClientThumb />,
      firstTitle,
      secondTitle: "",
    },
  };

  return (
    <>
      <div className={styles.flexSection}>
        <div className={styles.thumb}>{thumbs[state].first}</div>
        <div className={styles.thumbInfo}>
          <h2>{thumbs[state].firstTitle}</h2>
          <div className={styles.thumbButton}>
            <p>Explore todo o conteúdo ao acessar agora mesmo!</p>
            <LinkButton />
          </div>
        </div>
      </div>
      <div className={styles.flexSection}>
        <div className={styles.thumb}>{thumbs[state].second}</div>
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
