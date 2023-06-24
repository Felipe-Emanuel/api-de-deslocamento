import Card from "@mui/material/Card";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { ItemWithType } from "@contexts/PageStateContext";
import { CardActionArea } from "@mui/material";

interface ClientCardProps {
  onClick?: () => void;
  isEddit?: boolean;
  data: ItemWithType | null;
}

export function ClientCard({
  data,
  isEddit = false,
  onClick,
}: ClientCardProps) {
  if (!data) return null;

  const {
    nome,
    numeroDocumento,
    tipoDocumento,
    cidade,
    uf,
    numero,
    logradouro,
    bairro
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
          src={`https://source.unsplash.com/random/400x400/?headshot`}
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
            Cliente: {nome}
          </Typography>
          <Typography variant="overline">
            Número do Documento: {numeroDocumento}
          </Typography>
          <Typography component="div" variant="overline">
            Tipo de documento: {tipoDocumento}
          </Typography>
          <Typography variant="overline">
            Cidade: {cidade} - {uf}
          </Typography>
          <Typography component="div" variant="overline">
            Número residencial: {numero}
          </Typography>
          <Typography component="div" variant="overline" color="text.primary">
            Logradouro: {logradouro}
          </Typography>
          <Typography component="div" variant="overline" color="text.primary">
            Bairro: {bairro}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
