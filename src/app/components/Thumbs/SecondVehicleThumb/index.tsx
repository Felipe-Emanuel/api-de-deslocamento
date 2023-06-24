'use client';
import Stack from "@mui/material/Stack";
import styles from "./SecondVehicleThumb.module.scss";
import Skeleton from "@mui/material/Skeleton";
import { useInput } from "@hooks/useInput";
import { Normalize } from "@/src/functions/Normalize";
import { FormInput } from "../../FormInput";
import { useStateContext } from "@hooks/useStateContext";

export function SecondVehicleThumb() {
  const { capitalizeName } = Normalize();
  const { vehicle } = useInput() || {};
  const { state } = useStateContext();

  if(vehicle === undefined) return null;

  const { placa, modelo, fabricado } = vehicle;

  const license =
    placa === "" ? "Placa do carro" : capitalizeName(placa || "");
  const carYearManufacture =
    fabricado === "" ? "Ano de Fabricação" : fabricado;
  const carModel = modelo === "" ? "Modelo do Carro" : capitalizeName(modelo || "");

  return (
    <div className={styles.thumb}>
      <h2>Simule um registro de {state} prévio!</h2>
      <div className={styles.floatCard}>
        <Stack spacing={2} className={styles.skeleton}>
          <p data-testid="carModel">{carModel}</p>
          <p data-testid="carYearManufacture">{carYearManufacture}</p>
          <h3 data-testid="license">{license}</h3>
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
