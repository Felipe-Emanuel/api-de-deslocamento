import Card from "@mui/material/Card";
import Image from "next/image";
import styles from "./RegisterClientCard.module.scss";
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

  if (value === undefined) return null;

  const { nome, documento, tipo, logradouro, número, cidade, uf, bairro } =
    value;

  const newName = nome === "" ? "Qual o seu nome?" : nome;

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
    <Card
      data-testid="card"
      className={styles.card}
    >
      <CardActionArea>
        <h3 className={styles.floatTitle}>Pré visualização</h3>

        <CardContent>
          <Typography
            gutterBottom
            component="div"
            variant="overline"
            sx={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 1,
              paddingTop: 4,
            }}
            className={styles.header}
          >
            <Image
              src={`https://source.unsplash.com/random/400x400/?headshot`}
              height={50}
              width={50}
              alt={`${state} banner`}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0d7avBwACzAFCwWiztQAAAABJRU5ErkJggg=="
              placeholder="blur"
              className={styles.floatImage}
            />
            {newName}
          </Typography>
          {!isOnEddit && (
            <>
              <Typography variant="overline" fontSize={10}>{newLicense}</Typography>
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
