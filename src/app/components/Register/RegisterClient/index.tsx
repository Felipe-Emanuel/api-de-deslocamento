import Button from "@mui/material/Button";
import styles from "../RegisterForm.module.scss";
import { useInput } from "@hooks/useInput";
import { FormInput } from "@components/FormInput";
import { NewClient } from "@/src/models/client";
import { useNewPost } from "@hooks/useNewPost";
import { useStateContext } from "@hooks/useStateContext";
import { ClientSideClient } from "@/src/models/userPosts";
import { RegisterClientCard } from "./RegisterClientCard";

export function RegisterClient() {
  const { handlePostCLick } = useNewPost();
  const { value } = useInput() || {};
  const { state } = useStateContext();

  if (value === undefined) return null;

  const { nome, documento, tipo, logradouro, número, cidade, uf, bairro } =
    value;

  const obj: ClientSideClient = {
    nome,
    documento,
    tipo,
    logradouro,
    bairro,
    número,
    cidade,
    uf,
  };

  const newClient: NewClient = {
    nome,
    numeroDocumento: documento,
    tipoDocumento: tipo,
    logradouro,
    numero: número,
    bairro,
    cidade,
    uf,
  };

  return (
    <>
      <div className={styles.register}>
        <div className={styles.form}>
          <h2>Por favor, preencha os campos abaixo</h2>
          <FormInput />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            onClick={() => handlePostCLick(obj, newClient)}
          >
            Registrar {state}!
          </Button>
        </div>
          <RegisterClientCard />
      </div>
    </>
  );
}
