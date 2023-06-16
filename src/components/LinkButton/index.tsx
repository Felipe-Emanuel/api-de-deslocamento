import { Button } from "@mui/material";
import Link from "next/link";

interface LinkButtonProps{
 state: "cliente" | "deslocamento" | "condutor" | "veículo"
}

const routes = {
  cliente: "/client",
  deslocamento: "/displacement",
  condutor: "/conductor",
  veículo: "vehicle"
}

export function LinkButton({state = "cliente"}: LinkButtonProps) {
  return (
    <Link href={routes[state]} >
     <Button
        variant="contained"
        color="secondary"
      >
        Buscar por {state} agora!
      </Button>
    </Link>
  )
}
