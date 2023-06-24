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
  const { displacement } = useInput() || {};
  const { state } = useStateContext();

  if(displacement === undefined) return null;

  const { controle, motivo, observação } = displacement;

  const displacementCheckList =
    controle === "" ? "Algum checklist?" : controle;
  const userObservation =
    observação === "" ? "Observação" : capitalizeName(observação || "");
  const userReason = motivo === "" ? "Motivo do deslocamento" : motivo;

  return (
    <div className={styles.thumb}>
      <h2>Simule um registro de {state} prévio!</h2>
      <div className={styles.floatCard}>
        <Stack spacing={2} className={styles.skeleton}>
          <p data-testid="userReason">{userReason}</p>
          <p data-testid="userObservation">{userObservation}</p>
          <h3 data-testid="displacementCheckList">{displacementCheckList}</h3>
          <Skeleton variant="rounded" width={150} height={10} />
          <Skeleton variant="rounded" width={180} height={10} />
        </Stack>
      </div>
      <div className={styles.formInput}>
        <FormInput />
      </div>
    </div>
  );
}
