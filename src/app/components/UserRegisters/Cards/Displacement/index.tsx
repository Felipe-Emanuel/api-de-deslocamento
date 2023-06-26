import Typography from "@mui/material/Typography";
import { Cardshell } from "@components/Cardshell";
import { ClientSideDisplacement } from "@/src/models/userPosts";

interface DisplacementProps{
  item: ClientSideDisplacement;
}

export function Displacement({ item }: DisplacementProps) {
  const {
    controle,
    idCliente,
    idCondutor,
    idVeiculo,
    motivo,
    observação,
    quilometragem,
  } = item;

  return (
    <Cardshell noToutch header={motivo} imagePath="trip">
      <Typography component="div" variant="overline" fontSize={10}>
        Lista de controle: {controle}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Observação sobre a viagem: {observação}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Quilometragem inicial: {quilometragem || 0}
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
  )
}
