import Typography from "@mui/material/Typography";
import { Cardshell } from "@components/Cardshell";
import { ClientSideClient } from "@/src/models/userPosts";

interface ClientProps {
  item: ClientSideClient;
}

export function Client({ item }: ClientProps) {
  const { bairro, cidade, documento, logradouro, nome, número, tipo, uf } =
    item;

  return (
    <Cardshell header={nome} imagePath="headshot">
      <Typography variant="overline" fontSize={10}>
        Número do Documento: {documento}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Tipo de documento: {tipo}
      </Typography>
      <Typography variant="overline" fontSize={10}>
        Cidade: {cidade} - {uf}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Número residencial: {número}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Logradouro: {logradouro}
      </Typography>
      <Typography component="div" variant="overline" fontSize={10}>
        Bairro: {bairro}
      </Typography>
    </Cardshell>
  );
}
