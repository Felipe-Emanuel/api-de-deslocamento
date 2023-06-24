import Card from "@mui/material/Card";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useInput } from "@hooks/useInput";
import { Normalize } from "@/src/functions/Normalize";
import { CardActionArea } from "@mui/material";
import { useStateContext } from "@hooks/useStateContext";

interface RegisterConductorCardProps {
  isOnEddit?: boolean;
}

export function RegisterConductorCard({ isOnEddit }: RegisterConductorCardProps) {
  const { capitalizeName } = Normalize();
  const { value } = useInput() || {};
  const { state } = useStateContext();

  if(value === undefined) return null;

  const { condutor, habilitação, categoria, vencimento } = value;

  const newName =
    condutor === "" ? "Qual o seu nome?" : `Nome do condutor: ${capitalizeName(condutor || '')}`;
  const newLicense =
    habilitação === "" ? "Qual o número de sua habilitação?" : `Número da habilitação: ${habilitação}`;
  const newCategory =
    categoria === "" ? "Qual a categoria?" : `Categora: ${capitalizeName(categoria  || '')}`;
  const newValidity =
    vencimento === "" ? "Qual o vencimento da sua habilitação?" : `Vencimento da habilitação: ${vencimento}`;

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
            <>
              <Typography gutterBottom variant="h5" component="div">
                {newName}
              </Typography>
            <Typography variant="caption">
              {newLicense} - {newCategory}
            </Typography>
            </>
          )}
            <Typography variant="caption">
              {newLicense}
            </Typography>
          <Typography variant="body2">{newValidity}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
