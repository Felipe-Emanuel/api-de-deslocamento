import Card from "@mui/material/Card";
import Image from "next/image";
import styles from "../CardComp.module.scss";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Normalize } from "@/src/functions/Normalize";
import { ItemWithType } from "@contexts/PageStateContext";
import { CardActionArea } from "@mui/material";

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
    <Card
      data-testid="card"
      onClick={onClick}
      variant="outlined"
      className={!isEddit ? styles.card : styles.cardEdit}
    >
      {isEddit && <h3>Cliente Atual</h3>}
      <CardActionArea>
        <CardContent>
          <Typography
            className={styles.cardHeader}
            gutterBottom
            component="div"
            variant="overline"
            sx={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Image
              src={`https://source.unsplash.com/random/400x400/?conductor`}
              height={50}
              width={50}
              alt={`condutor banner`}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0d7avBwACzAFCwWiztQAAAABJRU5ErkJggg=="
              placeholder="blur"
              className={styles.img}
            />
            {nome}
          </Typography>
          <Typography variant="overline" fontSize={10}>
            Número do Documento: {numeroHabilitacao}
          </Typography>
          <Typography component="div" variant="overline" fontSize={10}>
            Tipo de documento: {catergoriaHabilitacao}
          </Typography>
          <Typography component="div" variant="overline" fontSize={10}>
            Data de Vencimento: {stringToDate(vencimentoHabilitacao)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
