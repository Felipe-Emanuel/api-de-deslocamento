import Card from "@mui/material/Card";
import Image from "next/image";
import styles from "./RegisterConductorCard.module.scss";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useInput } from "@hooks/useInput";
import { Normalize } from "@/src/functions/Normalize";
import { CardActionArea } from "@mui/material";
import { useStateContext } from "@hooks/useStateContext";

interface RegisterConductorCardProps {
  isOnEddit?: boolean;
}

export function RegisterConductorCard({
  isOnEddit,
}: RegisterConductorCardProps) {
  const { capitalizeName } = Normalize();
  const { value } = useInput() || {};
  const { state } = useStateContext();

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
    <Card data-testid="card" className={styles.card}>
      <CardActionArea>
        <h3 className={styles.floatTitle}>Pré visualização</h3>
        <Typography
          gutterBottom
          component="div"
          variant="overline"
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 1,
            paddingTop: 5,
          }}
          className={styles.header}
        >
          <Image
            src={`https://source.unsplash.com/random/250x250/?conductor`}
            height={50}
            width={50}
            alt={`${state} banner`}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0d7avBwACzAFCwWiztQAAAABJRU5ErkJggg=="
            placeholder="blur"
            className={styles.floatImage}
          />
          {newName}
        </Typography>
        <CardContent>
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
