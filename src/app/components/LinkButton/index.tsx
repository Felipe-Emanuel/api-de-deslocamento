'use client'
import Link from "next/link";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useStateContext } from "@hooks/useStateContext";
import { usePageStateContext } from "@hooks/usePageStateContext";
interface LinkButtonProps {
  label?: string;
  onClick?: () => void;
}

export function LinkButton({ label, ...props }: LinkButtonProps) {
  const { state, paths, setState } = useStateContext();
  const { pageState } = usePageStateContext();
  const asPath = usePathname();

  const backHome = pageState === "início";
  
  useEffect(() => {
    if (asPath === "/") {
      return setState('cliente')
    }
  }, [asPath])

  if(state === undefined) return null;

  return (
    <Link {...props} href={backHome ? "/" : paths[state]}>
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
