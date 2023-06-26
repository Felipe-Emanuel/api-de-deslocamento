import Typography from "@mui/material/Typography";
import { Cardshell } from "@components/Cardshell";
import { ClientSideConductor } from "@/src/models/userPosts";

interface ConductorProps{
  item: ClientSideConductor;
}

export function Conductor({ item }: ConductorProps) {
  const {
    categoria,
    condutor,
    habilitação,
  } = item;

  return (
    <Cardshell noToutch header={condutor} imagePath="conductor">
      <Typography variant="overline" fontSize={10}>
        Número do Documento: {habilitação}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Tipo de documento: {categoria}
      </Typography>
    </Cardshell>
  )
}
