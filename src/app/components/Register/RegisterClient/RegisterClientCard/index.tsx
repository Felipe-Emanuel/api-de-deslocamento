import Card from "@mui/material/Card";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useInput } from "@/src/app/data/hooks/useInput";
import { CardActionArea } from "@mui/material";
import { useStateContext } from "@/src/app/data/hooks/useStateContext";

interface RegisterClientCardProps {
  isOnEddit?: boolean;
}

export function RegisterClientCard({
  isOnEddit = false,
}: RegisterClientCardProps) {
  const { value } = useInput() || {};
  const { state } = useStateContext();

  if(value === undefined) return null;

  const { nome, documento, tipo, logradouro, número, cidade, uf, bairro } =
    value;

  const newName = nome === "" ? "Qual o seu nome?" : `Cliente: ${nome}`;

  const newLicense =
    documento === 0
      ? "Qual o número do seu documento?"
      : `Número do documento: ${documento}`;

  const newCategory =
    tipo === ""
      ? "Qual a tipo do seu documento?"
      : `Tipoe de doumento: ${tipo}`;

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
    <Card data-testid="card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <h3>Pré visualização</h3>
        <Image
          src={`https://source.unsplash.com/random/400x400/?space`}
          height={250}
          width={400}
          alt={`${state} banner`}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0d7avBwACzAFCwWiztQAAAABJRU5ErkJggg=="
          placeholder="blur"
        />
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            variant="overline"
            sx={{ fontWeight: "bold" }}
          >
            {newName}
          </Typography>
          {!isOnEddit && (
            <>
              <Typography variant="overline">{newLicense}</Typography>
              <Typography component="div" variant="overline">
                {newCategory}
              </Typography>
            </>
          )}
          <Typography variant="overline">
            {newCity} - {newUf}
          </Typography>
          <Typography component="div" variant="overline">
            {newNumber}
          </Typography>
          <Typography component="div" variant="overline" color="text.primary">
            {newInfo}
          </Typography>
          <Typography component="div" variant="overline" color="text.primary">
            {newAdress}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
