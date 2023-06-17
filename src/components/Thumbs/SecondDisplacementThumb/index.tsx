import { Normalize } from "@/src/functions/Normalize";
import styles from "./SecondDisplacementThumb.module.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useStateContext } from "@/src/data/hooks/useStateContext";
import { ChangeEvent, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export function SecondDisplacementThumb() {
  const { capitalizeName } = Normalize();
  const { state } = useStateContext();
  const [value, setValue] = useState({
    homeDisplacement: "",
    reason: "",
    observation: "",
    idConductor: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const { observation, homeDisplacement, reason, idConductor } = value;

  const displacement =
    homeDisplacement === ""
      ? "Início do Deslocamento"
      : capitalizeName(homeDisplacement);
  const userObservation =
    observation === "" ? "Observação" : capitalizeName(observation);
  const useReason = reason === "" ? "Número da licença" : reason;

  return (
    <div className={styles.thumb}>
      <h2>Simule um registro de {state} prévio!</h2>
      <div className={styles.floatCard}>
        <Stack spacing={2} className={styles.skeleton}>
          <h3>{displacement}</h3>
          <p>{useReason}</p>
          <p>{userObservation}</p>
          <p>{idConductor}</p>
          <Skeleton variant="rounded" width={150} height={10} />
          <Skeleton variant="rounded" width={180} height={10} />
        </Stack>
      </div>
      <Box
        className={styles.box}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={handleChange}
          name="homeDisplacement"
          value={homeDisplacement}
          label="Início do Deslocamento"
          color="warning"
          variant="standard"
          size="medium"
        />
        <TextField
          onChange={handleChange}
          name="reason"
          value={reason}
          label="Motivo"
          color="warning"
          variant="standard"
          size="medium"
        />
        <TextField
          onChange={handleChange}
          name="idConductor"
          value={idConductor}
          label="Identificação do Condutor"
          type="number"
          color="warning"
          variant="standard"
          size="medium"
        />
        <TextField
          onChange={handleChange}
          name="observation"
          value={observation}
          label="Observação"
          color="warning"
          type="text"
          variant="standard"
          size="medium"
        />
      </Box>
    </div>
  );
}
