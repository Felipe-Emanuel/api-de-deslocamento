import { RegisterClient } from "./RegisterClient";
import { RegisterVehicle } from "./RegisterVehicle";
import { useStateContext } from "@hooks/useStateContext";
import { RegisterConductor } from "./RegisterConductor";
import { RegisterDisplacement } from "./RegisterDisplacement";

const states: { [key: string]: JSX.Element } = {
  cliente: <RegisterClient />,
  deslocamento: <RegisterDisplacement />,
  condutor: <RegisterConductor />,
  veículo: <RegisterVehicle />,
};

export function Register() {
  const { state } = useStateContext();

  return (
    <>
      <h1>Registre um {state} com poucos clicks!</h1>
      {states[state!]}
    </>
  );
}
