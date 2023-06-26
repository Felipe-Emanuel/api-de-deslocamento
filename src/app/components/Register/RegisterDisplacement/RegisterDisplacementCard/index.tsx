import Typography from "@mui/material/Typography";
import { useInput } from "@hooks/useInput";
import { Cardshell } from "@components/Cardshell";
import { useStateContext } from "@hooks/useStateContext";
import { usePageStateContext } from "@hooks/usePageStateContext";

interface RegisterDisplacementCardProps {
  initialKm?: number;
  isOnEddit?: boolean;
}

export function RegisterDisplacementCard({
  initialKm,
  isOnEddit = false,
}: RegisterDisplacementCardProps) {
  const { ids } = usePageStateContext();
  const { value } = useInput() || {};
  const { data } = useStateContext();

  if (!data) return null;
  const { kmInicial } = data?.[0] || initialKm;

  const { motivo, observação, controle, quilometro_final } = value!;
  const { idCondutor, idVeiculo, idCliente } = ids;

  const newReason =
    motivo === ""
      ? "Qual o motivo de seu deslocamento?"
      : `Motivo da viagem: ${motivo}`;
  const newEnd = `Deslocamento final: ${quilometro_final || 0} Km`;
  const newKm = `KM inicial: ${initialKm ?? kmInicial}`;
  const newObservation =
    observação === "" ? "Tem alguma observação?" : `Observação: ${observação}`;
  const newCheckList =
    controle === ""
      ? "Alguma lista de controle?"
      : `Lista de controle: ${controle}`;
  const newIdConductor =
    idCondutor === ""
      ? "Qual o Id do condutor?"
      : `Id do condutor: ${idCondutor}`;
  const newIdVeiculo =
    idVeiculo === "" ? "Qual o Id do veículo?" : `Id do veículo: ${idVeiculo}`;
  const newIdCliente =
    idCliente === "" ? "Qual o Id do cliente?" : `Id do cliente: ${idCliente}`;

  return (
    <Cardshell header={isOnEddit ? newEnd : newReason} imagePath="trip" preview>
      <Typography component="div" variant="overline">
        {newObservation}
      </Typography>

      <Typography component="div" variant="overline">
        {newKm}
      </Typography>
      {!isOnEddit && (
        <>
          <Typography component="div" variant="overline">
            {newCheckList}
          </Typography>
          <Typography component="div" variant="overline">
            {newIdConductor}
          </Typography>
          <Typography component="div" variant="overline">
            {newIdVeiculo}
          </Typography>
          <Typography component="div" variant="overline">
            {newIdCliente}
          </Typography>
        </>
      )}
    </Cardshell>
  );
}
