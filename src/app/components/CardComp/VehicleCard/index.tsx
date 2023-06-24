import Card from "@mui/material/Card";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { ItemWithType } from "@contexts/PageStateContext";
import { CardActionArea } from "@mui/material";

interface VehicleCardProps {
  onClick?: () => void;
  isEddit?: boolean;
  data: ItemWithType | null;
}

export function VehicleCard({
  data,
  isEddit = false,
  onClick,
}: VehicleCardProps) {
  if (!data) return null;

  const {
    placa,
    marcaModelo,
    anoFabricacao,
    kmAtual
  } = data;

  return (
    <Card
      data-testid="card"
      onClick={onClick}
      variant="outlined"
      sx={{ maxWidth: 345 }}
    >
      {isEddit && <h3>Cliente Atual</h3>}
      <CardActionArea>
        <Image
          src={`https://source.unsplash.com/random/400x400/?vehicle`}
          height={220}
          width={400}
          alt={`cliente banner`}
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
            Placa: {placa}
          </Typography>
          <Typography variant="overline" fontSize={10}>
            Modelo do Veículo: {marcaModelo}
          </Typography>
          <Typography component="div" variant="overline" fontSize={10}>
            Ano de Fabricação: {anoFabricacao}
          </Typography>
          <Typography component="div" variant="overline" color="text.primary" fontSize={10}>
            Quilometragem Atual: {kmAtual}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
