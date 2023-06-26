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
  const { conductor } = useInput() || {};
  const { state } = useStateContext();

  const { categoria, condutor, habilitação } = conductor!;

  const userName = condutor === "" ? "Seu nome" : capitalizeName(condutor || "");
  const userCategoryQualification =
    categoria === "" ? "Categoria da Habilitação" : capitalizeName(categoria || "");
  const userLicense = habilitação === "" ? "Número da licença" : habilitação;

  return (
    <div className={styles.thumb} data-testid="second-conductor-thumb">
      <h2>Simule um registro de {state} prévio!</h2>
      <div className={styles.floatCard}>
        <Stack spacing={2} className={styles.skeleton}>
          <div>
            <Skeleton variant="circular" sx={{ background: "#fff" }} width={50} height={50} />
            <h3 data-testid="user-name">{userName}</h3>
          </div>
          <p data-testid="user-license">{userLicense}</p>
          <p data-testid="user-category-qualification">{userCategoryQualification}</p>
          <Skeleton variant="rounded" sx={{ background: "#fff" }} width={150} height={10} />
          <Skeleton variant="rounded" sx={{ background: "#fff" }} width={180} height={10} />
        </Stack>
      </div>
      <FormInput />
    </div>
  );
}
