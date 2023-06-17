import { Normalize } from "@/src/functions/Normalize";
import styles from "./SecondVehicleThumb.module.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useStateContext } from "@/src/data/hooks/useStateContext";
import { ChangeEvent, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export function SecondVehicleThumb() {
  const { capitalizeName } = Normalize();
  const { state } = useStateContext();
  const [value, setValue] = useState({
    licensePlate: "",
    model: "",
    yearManufacture: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const { yearManufacture, licensePlate, model } = value;

  const displacement =
    licensePlate === ""
      ? "Placa do carro"
      : capitalizeName(licensePlate);
  const useryearManufacture =
    yearManufacture === "" ? "Ano de Fabricação" : capitalizeName(yearManufacture);
  const usemodel = model === "" ? "Modelo do Carro" : model;

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
          name="licensePlate"
          value={licensePlate}
          label="Placa do carro"
          color="warning"
          variant="standard"
          size="medium"
        />
        <TextField
          onChange={handleChange}
          name="model"
          value={model}
          label="Modelo do Carro"
          color="warning"
          variant="standard"
          size="medium"
        />
        <TextField
          onChange={handleChange}
          name="yearManufacture"
          value={yearManufacture}
          label="Ano de Fabricação"
          color="warning"
          type="text"
          variant="standard"
          size="medium"
        />
      </Box>
    </div>
  );
}
