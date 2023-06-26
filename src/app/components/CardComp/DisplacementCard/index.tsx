import Typography from "@mui/material/Typography";
import { Cardshell } from "../../Cardshell";
import { Normalize } from "@/src/functions/Normalize";
import { ItemWithType } from "@contexts/PageStateContext";

interface DisplacementCardProps {
  onClick?: () => void;
  isEddit?: boolean;
  data: ItemWithType | null;
}

export function DisplacementCard({
  data,
  isEddit = false,
  onClick,
}: DisplacementCardProps) {
  const { stringToDate } = Normalize();
  if (!data) return null;

  const {
    checkList,
    quilometro_final,
    motivo,
    observacao,
    idCliente,
    idCondutor,
    idVeiculo,
    kmInicial,
    fimDeslocamento,
    inicioDeslocamento,
  } = data;

  return (
    <Cardshell
      header={motivo}
      onClick={onClick}
      imagePath="trip"
      isEddit={isEddit}
    >
      <Typography component="div" variant="overline" fontSize={10}>
        Quilometragem final: {quilometro_final} Km
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Início do deslocamento: {stringToDate(inicioDeslocamento ?? "") || 0}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Fim do deslocamento:{" "}
        {stringToDate(fimDeslocamento ?? "") || "Em andamento..."}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Lista de controle: {checkList}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Observação sobre a viagem: {observacao}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Quilometragem inicial: {kmInicial || 0}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        id do cliente: {idCliente}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        id do condutor: {idCondutor}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        id do veículo: {idVeiculo}
      </Typography>
    </Cardshell>
  );
}
