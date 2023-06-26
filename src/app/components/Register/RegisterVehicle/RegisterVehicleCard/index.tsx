import Typography from "@mui/material/Typography";
import { useInput } from "@hooks/useInput";
import { Cardshell } from "@components/Cardshell";
import { Normalize } from "@/src/functions/Normalize";

interface RegisterVehicleCardProps {
  isOnEddit?: boolean;
}

export function RegisterVehicleCard({
  isOnEddit = false,
}: RegisterVehicleCardProps) {
  const { capitalizeName } = Normalize();
  const { value } = useInput() || {};

  if (value === undefined) return null;
  const { placa, fabricado, modelo, rodagem } = value;

  const newCarLisence = placa === "" ? "Qual a placa do veículo?" : `Placa: ${placa?.toUpperCase()}`;
  const newModel = modelo === "" ? "Qual o modelo do veículo?" : capitalizeName(modelo || "");
  const newManufacture = fabricado === 0 ? "Qual o ano de fabricação?" : `Data de fabricação ${fabricado}`
  const newActualKm = rodagem === 0 ? "Qual a quilometragem atual?" : `Quilometragem: ${rodagem || 0} Km ${rodagem && rodagem > 1 ? "atuais" : "atual"}`;

  return (
    <Cardshell header={newModel} imagePath="vehicle" preview >
      {!isOnEddit && (
        <Typography component="div" variant="overline" fontSize={10}>
          {newCarLisence}
        </Typography>
      )}
      <Typography gutterBottom component="div" variant="overline" fontSize={10}>
        {newActualKm} - {newManufacture}
      </Typography>
    </Cardshell>
  );
}
