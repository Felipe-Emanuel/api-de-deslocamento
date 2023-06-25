import Button from "@mui/material/Button";
import styles from "./RegisterDisplacement.module.scss";
import { getData } from "@services/client";
import { Vehicle } from "@/src/models/vehicle";
import { useInput } from "@hooks/useInput";
import { FormInput } from "@components/FormInput";
import { useNewPost } from "@hooks/useNewPost";
import { useStateContext } from "@hooks/useStateContext";
import { NewDisplacement } from "@/src/models/displacement";
import { usePageStateContext } from "@hooks/usePageStateContext";
import { useEffect, useState } from "react";
import { ClientSideDisplacement } from "@/src/models/userPosts";
import { RegisterDisplacementCard } from "./RegisterDisplacementCard";

export function RegisterDisplacement() {
  const { handlePostCLick } = useNewPost();
  const { value } = useInput() || {};
  const { state } = useStateContext();
  const { ids } = usePageStateContext();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [initialKm, setInitialKm] = useState(0);

  if (value === undefined) return null;
  const { motivo, observação, controle } = value;

  const { idCondutor, idVeiculo, idCliente } = ids;

  const obj: ClientSideDisplacement = {
    motivo,
    quilometragem: initialKm,
    observação,
    controle,
    idCondutor,
    idVeiculo,
    idCliente,
  };

  useEffect(() => {
    const get = async () => {
      await getData("veiculo").then((vehicles) => setVehicles(vehicles));
    };

    get();
  }, []);
  useEffect(() => {
    if (idVeiculo) {
      const vehicleById = vehicles.filter(
        (vehicle) => vehicle.id === idVeiculo
      );
      setInitialKm(vehicleById?.[0].kmAtual!);
    }
  }, [idVeiculo]);

  const newConductor: NewDisplacement = {
    kmInicial: initialKm,
    inicioDeslocamento: new Date(),
    checkList: controle,
    motivo,
    observacao: observação,
    idCondutor,
    idVeiculo,
    idCliente,
  };

  return (
    <div className={styles.register}>
      <div className={styles.preview}>
        <div>
          <div className={styles.form}>
            <div>
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
          </div>
        </div>
        <RegisterDisplacementCard initialKm={initialKm} />
      </div>
    </div>
  );
}
