"use client";
import Stack from "@mui/material/Stack";
import styles from "./SecondClientThumb.module.scss";
import Skeleton from "@mui/material/Skeleton";
import { useInput } from "@hooks/useInput";
import { Normalize } from "@/src/functions/Normalize";
import { FormInput } from "../../FormInput";
import { useStateContext } from "@hooks/useStateContext";

export function SecondClientThumb() {
  const { capitalizeName } = Normalize();
  const { client, handleChange } = useInput();
  const { state } = useStateContext();

  const { cidade, nome, número, uf } = client || {};

  const userName = nome === "" ? "Seu nome" : capitalizeName(nome);
  const userNity = cidade === "" ? "Sua Cidade" : capitalizeName(cidade);
  const userUF = uf === "" ? "UF" : uf;
  const adressNumber =
    número === "" ? "Número residencial" : capitalizeName(número);

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
      <FormInput object={client} onChange={handleChange} />
    </div>
  );
}
