import Typography from "@mui/material/Typography";
import { Cardshell } from "../../Cardshell";
import { ItemWithType } from "@contexts/PageStateContext";

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

  const { placa, marcaModelo, anoFabricacao, kmAtual } = data;

  return (
    <Cardshell
      onClick={onClick}
      isEddit={isEddit}
      header={marcaModelo}
      imagePath="vehicle"
    >
      <Typography variant="overline" fontSize={10}>
        Placa: {placa}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Ano de Fabricação: {anoFabricacao}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Quilometragem Atual: {kmAtual}
      </Typography>
    </Cardshell>
  );
}
