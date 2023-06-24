'use client'
import Link from "next/link";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useStateContext } from "@hooks/useStateContext";
import { usePageStateContext } from "@hooks/usePageStateContext";

const routes = {
  cliente: "/client",
  deslocamento: "/displacement",
  condutor: "/conductor",
  veículo: "/vehicle",
};

interface LinkButtonProps {
  label?: string;
  onClick?: () => void;
}

export function LinkButton({ label, ...props }: LinkButtonProps) {
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
    <Link {...props} href={backHome ? "/" : routes[state!]}>
      {asPath !== "/" && !backHome ? null : (
        <Button variant="contained" color="secondary">
          {label ? label : (
            backHome ? "Voltar" : `Buscar por ${state} agora!`
          )}
        </Button>
      )}
    </Link>
  );
}
