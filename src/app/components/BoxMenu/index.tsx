import styles from "./BoxMenu.module.scss";
import { MenuItem } from "../MenuItem";
import { LinkButton } from "../LinkButton";
import { useStateContext } from "@hooks/useStateContext";
import { usePageStateContext } from "@hooks/usePageStateContext";
import { Button } from "@mui/material";
import Link from "next/link";


const subtitles: { [key: string]: string } = {
  cliente: "Encontre seus clientes com facilidade!",
  deslocamento: "Descubra o poder de uma jornada perfeita, do início ao fim!",
  condutor: "Encontre os melhores condutores para suas necessidades!",
  veículo: "Encontre o veículo perfeito para tornar suas viagens memoráveis!",
};

export function BoxMenu() {
  const { state, outHome } = useStateContext();
  const { pageState } = usePageStateContext();

  const fixState = state === undefined ? '' : state

  const subtitlePages = {
    explorar: `Explore nosso catálogo de ${fixState} de forma eficiente!`,
    cadastrar: "Cadastre-se e torne-se um mebro da comunidade!",
    "meus registros": "Visualize e gerencie seus registros de deslocamento!",
    início: "Não é o que busca no momento...?",
  };

  const renderMessage = () => {
    if (state === undefined) return (
      <>
        <h2>Oops! Erro 404...</h2>
        <Link href='/'>
          <Button variant="contained" color="secondary">Voltar...</Button>
        </Link>
      </>
    )

    return (
      <>
      {outHome ? (
        <h2 className={styles.subtitle}>{subtitlePages[pageState!]}</h2>
      ) : (
        <h2 className={styles.subtitle}>{subtitles[state!]}</h2>
      )}
      </>
    )
  }

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>
          {outHome ? 'Continue sua navegação' : 'Faça sua busca por' }
        </h1>
        <MenuItem />
      </div>
      {renderMessage()}
      <LinkButton />
    </div>
  );
}
