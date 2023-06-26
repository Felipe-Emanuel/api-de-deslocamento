import Typography from "@mui/material/Typography";
import { Cardshell } from "../../Cardshell";
import { Normalize } from "@/src/functions/Normalize";
import { ItemWithType } from "@contexts/PageStateContext";

interface ConductorCardProps {
  onClick?: () => void;
  isEddit?: boolean;
  data: ItemWithType | null;
}

export function ConductorCard({
  data,
  isEddit = false,
  onClick,
}: ConductorCardProps) {
  const { stringToDate } = Normalize();
  if (!data) return null;

  const {
    nome,
    numeroHabilitacao,
    catergoriaHabilitacao,
    vencimentoHabilitacao,
  } = data;

  return (
    <Cardshell
      header={nome}
      isEddit={isEddit}
      imagePath="conductor"
      onClick={onClick}
    >
      <Typography variant="overline" fontSize={10}>
        Número do Documento: {numeroHabilitacao}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Tipo de documento: {catergoriaHabilitacao}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Data de Vencimento: {stringToDate(vencimentoHabilitacao)}
      </Typography>
    </Cardshell>
  );
}
