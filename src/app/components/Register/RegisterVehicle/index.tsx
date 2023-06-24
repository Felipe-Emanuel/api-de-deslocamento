import Button from "@mui/material/Button";
import styles from "../RegisterForm.module.scss";
import { useInput } from "@hooks/useInput";
import { FormInput } from "@components/FormInput";
import { useNewPost } from "@hooks/useNewPost";
import { NewVehicle } from "@/src/models/vehicle";
import { useStateContext } from "@hooks/useStateContext";
import { RegisterVehicleCard } from "./RegisterVehicleCard";

export function RegisterVehicle() {
  const { handlePostCLick } = useNewPost();
  const { clientForm, value } = useInput();
  const { state } = useStateContext();

  const { placa, fabricado, modelo, rodagem } = value;

  const newConductor: NewVehicle = {
    placa,
    marcaModelo: modelo,
    anoFabricacao: fabricado,
    kmAtual: rodagem,
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
            onClick={() => handlePostCLick(clientForm, newConductor)}
          >
            Registrar {state}!
          </Button>
        </div>
        <div className={styles.preview}>
          <RegisterVehicleCard />
        </div>
      </div>
    </>
  );
}
