import styles from "./BoxMenu.module.scss";
import { MenuItem } from "../MenuItem";
import { LinkButton } from "../LinkButton";
import { useStateContext } from "@/src/data/hooks/useStateContext";
import { usePageStateContext } from "@/src/data/hooks/usePageStateContext";

const subtitles: { [key: string]: string } = {
  cliente: "Encontre seus clientes com facilidade!",
  deslocamento: "Descubra o poder de uma jornada perfeita, do início ao fim!",
  condutor: "Encontre os melhores condutores para suas necessidades!",
  veículo: "Encontre o veículo perfeito para tornar suas viagens memoráveis!",
};

export function BoxMenu() {
  const { state, outHome } = useStateContext();
  const { pageState } = usePageStateContext();

  const subtitlePages = {
    explorar: `Explore nosso catálogo de ${state} de forma eficiente!`,
    cadastrar: "Cadastre-se e torne-se um mebro da comunidade!",
    "meus registros": "Visualize e gerencie seus registros de deslocamento!",
    início: "Não é o que busco no momento...",
  };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>
          {outHome ? 'Continue sua navegação' : 'Faça sua busca por' }
        </h1>
        <MenuItem />
      </div>
      {outHome ? (
        <h2 className={styles.subtitle}>{subtitlePages[pageState!]}</h2>
      ) : (
        <h2 className={styles.subtitle}>{subtitles[state!]}</h2>
      )}
      <LinkButton />
    </div>
  );
}
