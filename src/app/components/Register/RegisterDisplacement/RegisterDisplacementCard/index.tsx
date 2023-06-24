import Card from "@mui/material/Card";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { toast } from "react-toastify";
import { useInput } from "@hooks/useInput";
import { useEffect } from "react";
import { CardActionArea } from "@mui/material";
import { useStateContext } from "@hooks/useStateContext";
import { usePageStateContext } from "@hooks/usePageStateContext";

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

  if(!data) return null;
  const { kmInicial } = data?.[0] || initialKm

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

    useEffect(() => {
      if(kmInicial && quilometro_final! < kmInicial ) {
        toast.warning("A quilometragem final não pode ser menor que a quilometragem inicial")
      }

    }, [value])

  return (
    <Card data-testid="card" variant="outlined" sx={{ maxWidth: 345 }}>
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
            <Typography gutterBottom variant="overline" component="div" data-testid="reason">
              {newReason}
            </Typography>
          )}
          {isOnEddit ? (
            <Typography variant="overline">{newEnd}</Typography>
          ) : (

            <Typography variant="overline">{newKm}</Typography>
          )}
          <Typography component="div" variant="overline">
            {newObservation}
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
