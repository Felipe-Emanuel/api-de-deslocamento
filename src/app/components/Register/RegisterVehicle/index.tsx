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
  const { vehicleForm, value } = useInput() || {};
  const { state } = useStateContext();

  if (value === undefined) return null;

  const { placa, fabricado, modelo, rodagem } = value;

  const newVehicle: NewVehicle = {
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
            onClick={() => handlePostCLick(vehicleForm!, newVehicle)}
          >
            Registrar {state}!
          </Button>
        </div>
        <RegisterVehicleCard />
      </div>
    </>
  );
}
