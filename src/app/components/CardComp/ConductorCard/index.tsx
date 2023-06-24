import Card from "@mui/material/Card";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { ItemWithType } from "@contexts/PageStateContext";
import { CardActionArea } from "@mui/material";
import { Normalize } from "@/src/functions/Normalize";

interface ConductorCardProps {
  onClick?: () => void;
  isEddit?: boolean;
  data: ItemWithType | null;
}

export function ConductorCard({
  data,
  isEddit = false,
  onClick,
}: ConductorCardProps) {
  const { stringToDate } = Normalize()
  if (!data) return null;

  const {
    nome,
    numeroHabilitacao,
    catergoriaHabilitacao,
    vencimentoHabilitacao
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
          src={`https://source.unsplash.com/random/400x400/?conductor`}
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
            Condutor: {nome}
          </Typography>
          <Typography variant="overline" fontSize={10}>
            Número do Documento: {numeroHabilitacao}
          </Typography>
          <Typography component="div" variant="overline" fontSize={10}>
            Tipo de documento: {catergoriaHabilitacao}
          </Typography>
          <Typography component="div" variant="overline" color="text.primary" fontSize={10}>
            Data de Vencimento: {stringToDate(vencimentoHabilitacao)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
