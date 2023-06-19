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
  const { vehicle, handleChange } = useInput();
  const { state } = useStateContext();

  const { licença, modelo, fabricado } = vehicle;

  const displacement =
    licença === "" ? "Placa do carro" : capitalizeName(licença);
  const useryearManufacture =
    fabricado === "" ? "Ano de Fabricação" : fabricado;
  const usemodel = modelo === "" ? "Modelo do Carro" : capitalizeName(modelo);;

  return (
    <div className={styles.thumb}>
      <h2>Simule um registro de {state} prévio!</h2>
      <div className={styles.floatCard}>
        <Stack spacing={2} className={styles.skeleton}>
          <h3>{displacement}</h3>
          <p>{usemodel}</p>
          <p>{useryearManufacture}</p>
          <Skeleton variant="rounded" width={150} height={10} />
          <Skeleton variant="rounded" width={180} height={10} />
        </Stack>
      </div>
      <div className={styles.formInput}>
        <FormInput object={vehicle} onChange={handleChange} />
      </div>
    </div>
  );
}
