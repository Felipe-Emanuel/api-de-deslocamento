'use client';
import Stack from "@mui/material/Stack";
import styles from "./SecondDisplacementThumb.module.scss";
import Skeleton from "@mui/material/Skeleton";
import { useInput } from "@hooks/useInput";
import { FormInput } from "../../FormInput";
import { Normalize } from "@/src/functions/Normalize";
import { useStateContext } from "@hooks/useStateContext";

export function SecondDisplacementThumb() {
  const { capitalizeName } = Normalize();
  const { displacement, handleChange } = useInput();
  const { state } = useStateContext();

  const { Início, motivo, observação } = displacement;

  const displacementTitle =
    Início === "" ? "Início do Deslocamento" : capitalizeName(Início);
  const userObservation =
    observação === "" ? "Observação" : capitalizeName(observação);
  const useReason = motivo === "" ? "Número da licença" : motivo;

  return (
    <div className={styles.thumb}>
      <h2>Simule um registro de {state} prévio!</h2>
      <div className={styles.floatCard}>
        <Stack spacing={2} className={styles.skeleton}>
          <h3>{displacementTitle}</h3>
          <p>{useReason}</p>
          <p>{userObservation}</p>
          <Skeleton variant="rounded" width={150} height={10} />
          <Skeleton variant="rounded" width={180} height={10} />
        </Stack>
      </div>
      <div className={styles.formInput}>
        <FormInput object={displacement} onChange={handleChange} />
      </div>
    </div>
  );
}
