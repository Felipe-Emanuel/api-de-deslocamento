import styles from "./ModalEddit.module.scss";
import Button from "@mui/material/Button";
import { useInput } from "@hooks/useInput";
import { FormInput } from "@components/FormInput";
import { useNewPost } from "@hooks/useNewPost";
import { ClientCard } from "@components/CardComp/ClientCard";
import { VehicleCard } from "@components/CardComp/VehicleCard";
import { ItemWithType } from "@contexts/PageStateContext";
import { ConductorCard } from "@components/CardComp/ConductorCard";
import { useStateContext } from "@hooks/useStateContext";
import { DisplacementCard } from "@components/CardComp/DisplacementCard";
import { RegisterClientCard } from "@components/Register/RegisterClient/RegisterClientCard";
import { deleteData, putData } from "@services/client";
import { RegisterVehicleCard } from "@components/Register/RegisterVehicle/RegisterVehicleCard";
import { RegisterConductorCard } from "@components/Register/RegisterConductor/RegisterConductorCard";
import { RegisterDisplacementCard } from "@components/Register/RegisterDisplacement/RegisterDisplacementCard";
import { usePageStateContext } from "../../data/hooks/usePageStateContext";

interface ModalEdditProps {
  handleClick: () => void;
  item: ItemWithType | null;
}

const modalEdditoptions = {
  cliente: <RegisterClientCard isOnEddit />,
  deslocamento: <RegisterDisplacementCard isOnEddit />,
  condutor: <RegisterConductorCard isOnEddit />,
  veículo: <RegisterVehicleCard isOnEddit />,
};

export function ModalEddit({ item, handleClick }: ModalEdditProps) {
  if (!item) return null;

  const { id } = item;
  const { state, clearValues } = useStateContext();
  const { getDataAfterUpdate } = useNewPost();
  const {
    updatedConductor,
    updateClient,
    updatedDisplacement,
    updatedVehicle,
  } = useInput() || {};
  const { observação, quilometro_final } = updatedDisplacement?.(id) || {};
  const { habilitação, vencimento } = updatedConductor?.(id) || {};
  const { rodagem, fabricado, modelo } = updatedVehicle?.(id) || {};

  const displacementUpdate = {
    id,
    kmFinal: +quilometro_final!,
    fimDeslocamento: new Date(),
    observacao: observação,
  };

  const conductorUpdate = {
    id,
    categoriaHabilitacao: habilitação,
    vencimentoHabilitacao: vencimento,
  };

  const vehicleUpdate = {
    id,
    marcaModelo: modelo,
    anoFabricacao: +fabricado!,
    kmAtual: +rodagem!,
  };

  const edditFormOptions = {
    cliente: updateClient?.(id),
    condutor: conductorUpdate,
    deslocamento: displacementUpdate,
    veículo: vehicleUpdate,
  };

  const cardsOptions = {
    cliente: <ClientCard data={item} isEddit />,
    condutor: <ConductorCard data={item} isEddit />,
    deslocamento: <DisplacementCard data={item} isEddit />,
    veículo: <VehicleCard data={item} isEddit />,
  };

  const handleUpdate = async () => {
    try {
      await putData(state!, id!, edditFormOptions[state!]).then(() =>
        handleClick(),
      );

        await getDataAfterUpdate();
        window?.localStorage.removeItem(`DESLOCAMENTO:cliente`)
        clearValues()
    } catch (err) {
      return console.error(`${err}`);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteData(state!, id!).then(() => handleClick());

      await getDataAfterUpdate();
    } catch (err) {
      return console.error(`${err}`);
    }
  };

  return (
    <div onClick={handleClick} className={styles.modalContainer}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <div className={styles.cards}>
          {modalEdditoptions[state!]}
          <div className={styles.actualCard}>
            {cardsOptions[state!]}
          </div>
        </div>
        <div className={styles.form}>
            <FormInput
              isEdditForm
              id={id}
              isDisplacementForm={state === "deslocamento"}
            />
        </div>
        <div className={styles.buttons}>
          <Button variant="contained" color="secondary" onClick={handleUpdate}>
            {state === "deslocamento"
              ? "Finalizar deslocamento?"
              : `Atualizar ${state}`}
          </Button>
          <Button variant="contained" color="warning" onClick={handleDelete}>
            Deletar {state}
          </Button>
        </div>
      </div>
    </div>
  );
}
