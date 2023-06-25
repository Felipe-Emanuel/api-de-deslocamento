import Card from "@mui/material/Card";
import Image from "next/image";
import styles from "../CardComp.module.scss";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Normalize } from "@/src/functions/Normalize";
import { ItemWithType } from "@contexts/PageStateContext";
import { CardActionArea } from "@mui/material";

interface DisplacementCardProps {
  onClick?: () => void;
  isEddit?: boolean;
  data: ItemWithType | null;
}

export function DisplacementCard({
  data,
  isEddit = false,
  onClick,
}: DisplacementCardProps) {
  const { stringToDate } = Normalize();
  if (!data) return null;

  const {
    checkList,
    quilometro_final,
    motivo,
    observacao,
    idCliente,
    idCondutor,
    idVeiculo,
    kmInicial,
    fimDeslocamento,
    inicioDeslocamento,
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
              src={`https://source.unsplash.com/random/400x400/?trip`}
              height={50}
              width={50}
              alt={`cliente banner`}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0d7avBwACzAFCwWiztQAAAABJRU5ErkJggg=="
              placeholder="blur"
              className={styles.img}
            />
            {motivo}
          </Typography>
          <Typography component="div" variant="overline" fontSize={10}>
            Quilometragem final: {quilometro_final} Km
          </Typography>
          <Typography component="div" variant="overline" fontSize={10}>
            Início do deslocamento:{" "}
            {stringToDate(inicioDeslocamento ?? "") || 0}
          </Typography>
          <Typography component="div" variant="overline" fontSize={10}>
            Fim do deslocamento:{" "}
            {stringToDate(fimDeslocamento ?? "") || "Em andamento..."}
          </Typography>
          <Typography component="div" variant="overline" fontSize={10}>
            Lista de controle: {checkList}
          </Typography>
          <Typography component="div" variant="overline" fontSize={10}>
            Observação sobre a viagem: {observacao}
          </Typography>
          <Typography component="div" variant="overline" fontSize={10}>
            Quilometragem inicial: {kmInicial || 0}
          </Typography>
          <Typography component="div" variant="overline" fontSize={10}>
            id do cliente: {idCliente}
          </Typography>
          <Typography component="div" variant="overline" fontSize={10}>
            id do condutor: {idCondutor}
          </Typography>
          <Typography component="div" variant="overline" fontSize={10}>
            id do veículo: {idVeiculo}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
