'use client';
import Stack from "@mui/material/Stack";
import styles from "./SecondConductorThumb.module.scss";
import Skeleton from "@mui/material/Skeleton";
import { useInput } from "@hooks/useInput";
import { Normalize } from "@/src/functions/Normalize";
import { FormInput } from "../../FormInput";
import { useStateContext } from "@hooks/useStateContext";

export function SecondConductorThumb() {
  const { capitalizeName } = Normalize();
  const { conductor, handleChange } = useInput();
  const { state } = useStateContext();

  const { categoria, condutor, habilitação } = conductor;

  const userName = condutor === "" ? "Seu nome" : capitalizeName(condutor);
  const userCategoryQualification =
    categoria === "" ? "Categoria da Habilitação" : capitalizeName(categoria);
  const useLicense = habilitação === "" ? "Número da licença" : habilitação;

  return (
    <div className={styles.thumb}>
      <h2>Simule um registro de {state} prévio!</h2>
      <div className={styles.floatCard}>
        <Stack spacing={2} className={styles.skeleton}>
          <div>
            <Skeleton variant="circular" width={50} height={50} />
            <h3>{userName}</h3>
          </div>
          <p>{useLicense}</p>
          <p>{userCategoryQualification}</p>
          <Skeleton variant="rounded" width={150} height={10} />
          <Skeleton variant="rounded" width={180} height={10} />
        </Stack>
      </div>
      <FormInput object={conductor} onChange={handleChange} />
    </div>
  );
}
