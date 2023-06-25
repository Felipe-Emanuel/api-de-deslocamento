import Card from "@mui/material/Card";
import Image from "next/image";
import styles from "./RegisterVehicleCard.module.scss"
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useInput } from "@hooks/useInput";
import { Normalize } from "@/src/functions/Normalize";
import { CardActionArea } from "@mui/material";
import { useStateContext } from "@hooks/useStateContext";

interface RegisterVehicleCardProps {
  isOnEddit?: boolean;
}

export function RegisterVehicleCard({ isOnEddit = false} : RegisterVehicleCardProps) {
  const { capitalizeName } = Normalize();
  const { value } = useInput() || {};
  const { state } = useStateContext();

  if(value === undefined) return null;
  const { placa, fabricado, modelo, rodagem } = value;

  const newCarLisence = placa === "" ? "Qual a placa do veículo?" : `Placa: ${placa?.toUpperCase()}`;
  const newModel = modelo === "" ? "Qual o modelo do veículo?" : capitalizeName(modelo || "");
  const newManufacture = fabricado === 0 ? "Qual o ano de fabricação?" : `Data de fabricação ${fabricado}`
  const newActualKm = rodagem === 0 ? "Qual a quilometragem atual?" : `Quilometragem: ${rodagem || 0} Km ${rodagem && rodagem > 1 ? "atuais" : "atual"}`;

  return (
    <Card data-testid="card" className={styles.card}>
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
            paddingTop: 5,
          }}
          className={styles.header}
        >
           <Image
            src={`https://source.unsplash.com/random/250x250/?vehicle`}
            height={50}
            width={50}
            alt={`${state} banner`}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0d7avBwACzAFCwWiztQAAAABJRU5ErkJggg=="
            placeholder="blur"
            className={styles.floatImage}
          />
            {newModel}</Typography>
          {!isOnEddit && (
            <Typography component="div" variant="overline" fontSize={10}>{newCarLisence}</Typography>
          )}
          <Typography gutterBottom component="div" variant="overline" fontSize={10}>
            {newActualKm} - {newManufacture}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
