import Card from "@mui/material/Card";
import Image from "next/image";
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
  const newModel = modelo === "" ? "Qual o modelo do veículo?" : `Modelo do veículo: ${capitalizeName(modelo || "")}`;
  const newManufacture = fabricado === 0 ? "Qual o ano de fabricação?" : `Data de fabricação ${fabricado}`
  const newActualKm = rodagem === 0 ? "Qual a quilometragem atual?" : `Quilometragem: ${rodagem || 0} Km ${rodagem && rodagem > 1 ? "atuais" : "atual"}`;

  return (
    <Card data-testid="card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <h3>Pré visualização</h3>
        <Image
          src={`https://source.unsplash.com/random/250x250/?space`}
          height={250}
          width={350}
          alt={`${state} banner`}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0d7avBwACzAFCwWiztQAAAABJRU5ErkJggg=="
          placeholder="blur"
        />
        <CardContent>
          {!isOnEddit && (
            <Typography variant="caption">{newCarLisence}</Typography>
          )}
          <Typography gutterBottom variant="overline" component="div">
            {newModel} - {newManufacture}
          </Typography>
          <Typography variant="body2">{newActualKm}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
