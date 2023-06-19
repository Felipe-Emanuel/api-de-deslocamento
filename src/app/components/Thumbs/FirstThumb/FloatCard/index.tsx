import Stack from "@mui/material/Stack";
import styles from "./FloatCard.module.scss";
import Skeleton from "@mui/material/Skeleton";
import { CardType } from "@contexts/StateContext";
import { useStateContext } from "@hooks/useStateContext";

interface FloatCardProps {
  data: CardType[];
}

export function FloatCard({ data = [] }: FloatCardProps) {
  const { state } = useStateContext();
  const SkeletonWidthSizes = [150, 215, 120, 90, 185, 215];

  const renderMessage = () => {
    if (data.length === 0) {
      return <h2>Seja nosso primeiro {state} cadastrado!</h2>;
    }

    return <h2>Nosso último {state} cadastrado!</h2>;
  };

  return (
    <div className={styles.floatCard}>
      <Stack spacing={1} className={styles.skeleton}>
        {renderMessage()}
        <div className={styles.label}>
          <div className={styles.header}>
            <Skeleton variant="circular" width={40} height={40} />
            <p>{data[0]?.nome || data[0]?.checkList || data[0]?.marcaModelo}</p>
          </div>
          <div className={styles.Info}>
            <p>
              {data[0]?.cidade ||
                data[0]?.numeroHabilitacao ||
                data[0]?.kmInicial ||
                data[0]?.placa}
            </p>
            <span>
              {data[0]?.uf ||
                data[0]?.catergoriaHabilitacao ||
                data[0]?.motivo ||
                data[0]?.kmAtual}
            </span>
          </div>
        </div>
        <p>{data[0]?.bairro || data[0]?.observacao}</p>
        {SkeletonWidthSizes.map((size, i) => (
          <Skeleton key={i} variant="rounded" width={size} height={10} />
        ))}
      </Stack>
    </div>
  );
}
