import { ChangeEvent, useState } from "react";
import { useStateContext } from "@/src/data/hooks/useStateContext";
import styles from "./SecondClientThumb.module.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Normalize } from "@/src/functions/Normalize";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export function SecondClientThumb() {
  const { capitalizeName } = Normalize();
  const { state } = useStateContext();
  const [value, setValue] = useState({
    name: "",
    city: "",
    uf: "",
    number: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const { city, name, number, uf } = value;

  const userName = name === "" ? "Seu nome" : capitalizeName(name);
  const userNity = city === "" ? "Sua Cidade" : capitalizeName(city);
  const userUF = uf === "" ? "UF" : uf;
  const adressNumber =
    number === "" ? "Número residencial" : capitalizeName(number);

  return (
    <div className={styles.thumb}>
      <div className={styles.floatCard}>
        <div>
          <Skeleton variant="circular" width={40} height={40} />
        </div>
        <h2>{userName}</h2>
        <div>
          <p>{userNity}</p>
          <span>{userUF}</span>
        </div>
        <p>{adressNumber}</p>
        <Stack spacing={0} className={styles.skeleton}>
          <Skeleton variant="rounded" width={150} height={10} />
          <Skeleton variant="rounded" width={180} height={10} />
        </Stack>
      </div>
      <h2>Novo Cadastro de {state}</h2>
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
          id="Nome"
          label="Nome"
          color="warning"
          variant="standard"
          size="medium"
        />
        <div>
          <TextField
            onChange={handleChange}
            name="city"
            value={value.city}
            id="Cidade"
            label="Cidade"
            color="warning"
            variant="standard"
            size="medium"
          />
          <TextField
            onChange={handleChange}
            name="uf"
            value={value.uf}
            id="UF"
            label="UF"
            color="warning"
            variant="standard"
            size="small"
            className={styles.uf}
          />
        </div>
        <TextField
          onChange={handleChange}
          name="number"
          value={value.number}
          id="Número"
          label="Número"
          color="warning"
          type="number"
          variant="standard"
          size="medium"
        />
      </Box>
    </div>
  );
}
