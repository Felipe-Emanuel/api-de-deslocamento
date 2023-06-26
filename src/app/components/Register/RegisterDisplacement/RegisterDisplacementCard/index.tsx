import Card from "@mui/material/Card";
import Image from "next/image";
import styles from "./RegisterDisplacementCard.module.scss";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useInput } from "@hooks/useInput";
import { CardActionArea } from "@mui/material";
import { useStateContext } from "@hooks/useStateContext";
import { usePageStateContext } from "@hooks/usePageStateContext";
import { ReactNode } from "react";

interface RegisterDisplacementCardProps {
  initialKm?: number;
  isOnEddit?: boolean;
}

export function RegisterDisplacementCard({
  initialKm,
  isOnEddit = false,
}: RegisterDisplacementCardProps) {
  const { ids } = usePageStateContext();
  const { value } = useInput() || {};
  const { state, data } = useStateContext();

  if (!data) return null;
  const { kmInicial } = data?.[0] || initialKm;

  const { motivo, observação, controle, quilometro_final } = value!;
  const { idCondutor, idVeiculo, idCliente } = ids;

  const newReason =
    motivo === ""
      ? "Qual o motivo de seu deslocamento?"
      : `Motivo da viagem: ${motivo}`;
  const newEnd = `Deslocamento final: ${quilometro_final || 0} Km`;
  const newKm = `KM inicial: ${initialKm ?? kmInicial}`;
  const newObservation =
    observação === "" ? "Tem alguma observação?" : `Observação: ${observação}`;
  const newCheckList =
    controle === ""
      ? "Alguma lista de controle?"
      : `Lista de controle: ${controle}`;
  const newIdConductor =
    idCondutor === ""
      ? "Qual o Id do condutor?"
      : `Id do condutor: ${idCondutor}`;
  const newIdVeiculo =
    idVeiculo === "" ? "Qual o Id do veículo?" : `Id do veículo: ${idVeiculo}`;
  const newIdCliente =
    idCliente === "" ? "Qual o Id do cliente?" : `Id do cliente: ${idCliente}`;

  const renderHeader = (children: ReactNode) => (
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
        src={`https://source.unsplash.com/random/400x400/?trip`}
        height={50}
        width={50}
        alt={`${state} banner`}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0d7avBwACzAFCwWiztQAAAABJRU5ErkJggg=="
        placeholder="blur"
      />
      {children}
    </Typography>
  );

  return (
    <Card data-testid="card" className={styles.card}>
      <CardActionArea>
        <h3 className={styles.floatTitle}>Pré visualização</h3>
        <CardContent>
          {isOnEddit ? renderHeader(newEnd) : renderHeader(newReason)}

          <Typography component="div" variant="overline">
            {newObservation}
          </Typography>

          <Typography component="div" variant="overline">
            {newKm}
          </Typography>
          {!isOnEddit && (
            <>
              <Typography component="div" variant="overline">
                {newCheckList}
              </Typography>
              <Typography component="div" variant="overline">
                {newIdConductor}
              </Typography>
              <Typography component="div" variant="overline">
                {newIdVeiculo}
              </Typography>
              <Typography component="div" variant="overline">
                {newIdCliente}
              </Typography>
            </>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
