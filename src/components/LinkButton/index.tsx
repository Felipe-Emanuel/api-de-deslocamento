import { useStateContext } from "@/src/data/hooks/useStateContext";
import { Button } from "@mui/material";
import Link from "next/link";


const routes = {
  cliente: "/client",
  deslocamento: "/displacement",
  condutor: "/conductor",
  veículo: "vehicle"
}

export function LinkButton() {
  const { state } = useStateContext()

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
