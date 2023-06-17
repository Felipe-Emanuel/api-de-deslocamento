import { usePageStateContext } from "@/src/data/hooks/usePageStateContext";
import { useStateContext } from "@/src/data/hooks/useStateContext";
import { Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const routes = {
  cliente: "/client",
  deslocamento: "/displacement",
  condutor: "/conductor",
  veículo: "/vehicle",
};

export function LinkButton() {
  const { state, setState } = useStateContext();
  const { pageState } = usePageStateContext();
  const asPath = usePathname();

  const backHome = pageState === "início";
  useEffect(() => {
    if (asPath === "/") {
      return setState('cliente')
    }
  }, [asPath])

  return (
    <Link href={backHome ? "/" : routes[state!]}>
      {asPath !== "/" && !backHome ? null : (
        <Button variant="contained" color="secondary">
          {backHome ? "Voltar" : `Buscar por ${state} agora!`}
        </Button>
      )}
    </Link>
  );
}
