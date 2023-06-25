import Card from "@mui/material/Card";
import Image from "next/image";
import styles from "../CardComp.module.scss";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { ItemWithType } from "@contexts/PageStateContext";
import { CardActionArea } from "@mui/material";

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
              src={`https://source.unsplash.com/random/400x400/?headshot`}
              height={50}
              width={50}
              alt={`cliente banner`}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0d7avBwACzAFCwWiztQAAAABJRU5ErkJggg=="
              placeholder="blur"
              className={styles.img}
            />
            {nome}
          </Typography>
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
