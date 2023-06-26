import Typography from "@mui/material/Typography";
import { useInput } from "@hooks/useInput";
import { Normalize } from "@/src/functions/Normalize";
import { Cardshell } from "@components/Cardshell";

interface RegisterConductorCardProps {
  isOnEddit?: boolean;
}

export function RegisterConductorCard({
  isOnEddit,
}: RegisterConductorCardProps) {
  const { capitalizeName } = Normalize();
  const { value } = useInput() || {};

  if (value === undefined) return null;

  const { condutor, habilitação, categoria, vencimento } = value;

  const newName =
  condutor === "" ? "Qual o seu nome?" : capitalizeName(condutor || '');
const newLicense =
  habilitação === "" ? "Qual o número de sua habilitação?" : `Habilitação: ${habilitação}`;
const newCategory =
  categoria === "" ? "Qual a categoria?" : `Categora: ${capitalizeName(categoria  || '')}`;
const newValidity =
  vencimento === "" ? "Qual o vencimento da sua habilitação?" : `Vencimento da habilitação: ${vencimento}`;

  return (
    <Cardshell header={newName} imagePath="conductor" preview>
      {!isOnEddit ? (
        <>
          <Typography component="div" variant="overline" fontSize={10}>
            {newLicense} - {newCategory}
          </Typography>
          <Typography component="div" variant="overline" fontSize={10}>
            {newValidity}
          </Typography>
        </>
      ) : (
        <>
          <Typography component="div" variant="overline" fontSize={10}>
            {newLicense}
          </Typography>
          <Typography component="div" variant="overline" fontSize={10}>
            {newValidity}
          </Typography>
        </>
      )}
    </Cardshell>
  );
}
