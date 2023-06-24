import Button from "@mui/material/Button";
import styles from "../RegisterForm.module.scss";
import { useInput } from "@hooks/useInput";
import { FormInput } from "@components/FormInput";
import { useNewPost } from "@hooks/useNewPost";
import { NewConductor } from "@/src/models/conductor";
import { useStateContext } from "@hooks/useStateContext";
import { ClientSideConductor } from "@/src/models/userPosts";
import { RegisterConductorCard } from "./RegisterConductorCard";

export function RegisterConductor() {
  const { handlePostCLick } = useNewPost();
  const { value } = useInput() || {};
  const { state } = useStateContext();

  if(value === undefined) return null;

  const { condutor, habilitação, categoria, vencimento } = value;

  const obj: ClientSideConductor = {
    condutor,
    habilitação,
    categoria,
    vencimento,
  };

  const newConductor: NewConductor = {
    nome: condutor,
    numeroHabilitacao: habilitação,
    categoriaHabilitacao: categoria,
    vencimentoHabilitacao: new Date(),
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
            onClick={() => handlePostCLick(obj, newConductor)}
          >
            Registrar {state}!
          </Button>
        </div>
        <div className={styles.preview}>
          <RegisterConductorCard />
        </div>
      </div>
    </>
  );
}
