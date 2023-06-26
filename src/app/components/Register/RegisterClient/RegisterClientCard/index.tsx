import Typography from "@mui/material/Typography";
import { useInput } from "@/src/app/data/hooks/useInput";
import { Cardshell } from "@components/Cardshell";

interface RegisterClientCardProps {
  isOnEddit?: boolean;
}

export function RegisterClientCard({
  isOnEddit = false,
}: RegisterClientCardProps) {
  const { value } = useInput() || {};

  if (value === undefined) return null;

  const { nome, documento, tipo, logradouro, número, cidade, uf, bairro } =
    value;

  const newName = nome === "" ? "Qual o seu nome?" : nome;

  const newLicense =
    documento === 0
      ? "Qual o número do seu documento?"
      : `Número do documento: ${documento}`;

  const newCategory =
    tipo === "" ? "Qual a tipo do seu documento?" : `Tipo de doumento: ${tipo}`;

  const newInfo =
    logradouro === "" ? "Qual o logradouro?" : `Logradouro: ${logradouro}`;

  const newNumber =
    número === ""
      ? "Qual o número residencial?"
      : `Número residencial: ${número}`;

  const newCity = cidade === "" ? "Qual sua cidade?" : `Cidade: ${cidade}`;
  const newUf = uf === "" ? "Qual o UF?" : `UF ${uf?.toUpperCase()}`;
  const newAdress = bairro === "" ? "Qual o bairro?" : `Bairro ${bairro}`;

  return (
    <Cardshell header={newName} imagePath="headshot" preview>
      {!isOnEddit && (
        <>
          <Typography variant="overline" fontSize={10}>
            {newLicense}
          </Typography>
          <Typography component="div" variant="overline" fontSize={10}>
            {newCategory}
          </Typography>
        </>
      )}
      <Typography variant="overline" fontSize={10}>
        {newCity} - {newUf}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        {newNumber}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        {newInfo}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        {newAdress}
      </Typography>
    </Cardshell>
  );
}
