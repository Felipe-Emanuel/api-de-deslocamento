import Typography from "@mui/material/Typography";
import { Cardshell } from "../../Cardshell";
import { ItemWithType } from "@contexts/PageStateContext";

interface ClientCardProps {
  onClick?: () => void;
  isEddit?: boolean;
  data: ItemWithType | null;
}

export function ClientCard({
  data,
  isEddit = false,
  onClick,
}: ClientCardProps) {
  if (!data) return null;

  const {
    nome,
    numeroDocumento,
    tipoDocumento,
    cidade,
    uf,
    numero,
    logradouro,
    bairro,
  } = data;

  return (
    <Cardshell
      onClick={onClick}
      header={nome}
      isEddit={isEddit}
      imagePath="headshot"
    >
      <Typography variant="overline" fontSize={10}>
        Número do Documento: {numeroDocumento}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Tipo de documento: {tipoDocumento}
      </Typography>
      <Typography variant="overline" fontSize={10}>
        Cidade: {cidade} - {uf}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Número residencial: {numero}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Logradouro: {logradouro}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Bairro: {bairro}
      </Typography>
    </Cardshell>
  );
}
