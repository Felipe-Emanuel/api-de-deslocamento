import Typography from "@mui/material/Typography";
import { Cardshell } from "@components/Cardshell";
import { ClientSideVehicle } from "@/src/models/userPosts";

interface VehicleProps {
  item: ClientSideVehicle;
}

export function Vehicle({ item }: VehicleProps) {
  const { fabricado, modelo, placa, rodagem } = item;

  return (
    <Cardshell noToutch header={modelo} imagePath="vehicle">
      <Typography variant="overline" fontSize={10}>
        Placa: {placa}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Ano de Fabricação: {fabricado}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Quilometragem Atual: {rodagem}
      </Typography>
    </Cardshell>
  );
}
