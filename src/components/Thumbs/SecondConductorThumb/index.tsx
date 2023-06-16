import { Normalize } from "@/src/functions/Normalize";
import styles from "./SecondConductorThumb.module.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useStateContext } from "@/src/data/hooks/useStateContext";
import { ChangeEvent, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export function SecondConductorThumb() {
  const { capitalizeName } = Normalize();
  const { state } = useStateContext();
  const [value, setValue] = useState({
    name: "",
    licenseNumber: "",
    categoryQualification: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const { categoryQualification, name, licenseNumber } = value;

  const userName = name === "" ? "Seu nome" : capitalizeName(name);
  const userCategoryQualification =
    categoryQualification === ""
      ? "Categoria da Habilitação"
      : capitalizeName(categoryQualification);
  const useLicense = licenseNumber === "" ? "Número da licença" : licenseNumber;

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
          name="name"
          value={value.name}
          label="Nome"
          color="warning"
          variant="standard"
          size="medium"
        />
        <TextField
          onChange={handleChange}
          name="licenseNumber"
          value={value.licenseNumber}
          label="Número da Habilitação"
          type="number"
          color="warning"
          variant="standard"
          size="medium"
        />

        <TextField
          onChange={handleChange}
          name="categoryQualification"
          value={value.categoryQualification}
          label="Categoria da Habilitação"
          color="warning"
          type="text"
          variant="standard"
          size="medium"
        />
      </Box>
    </div>
  );
}
