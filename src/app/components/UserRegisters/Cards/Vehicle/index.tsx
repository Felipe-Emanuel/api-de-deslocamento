import Typography from "@mui/material/Typography";
import { Cardshell } from "@components/Cardshell";
import { ClientSideVehicle } from "@/src/models/userPosts";
import { Normalize } from "@/src/functions/Normalize";

interface VehicleProps {
  item: ClientSideVehicle;
}

export function Vehicle({ item }: VehicleProps) {
  const { capitalizeName } = Normalize()

  const { fabricado, modelo, placa, rodagem } = item;

  return (
    <Cardshell noToutch header={capitalizeName(modelo || "")} imagePath="vehicle">
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
