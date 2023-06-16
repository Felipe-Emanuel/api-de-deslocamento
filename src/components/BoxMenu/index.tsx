import styles from "./BoxMenu.module.scss";
import { LinkButton } from "../LinkButton";
import { useStateContext } from "@/src/data/hooks/useStateContext";
import { MenuItem } from "../MenuItem";

const subtitles = {
  cliente: "Encontre seus clientes com facilidade!",
  deslocamento: "Descubra o poder de uma jornada perfeita, do início ao fim!",
  condutor: "Encontre os melhores condutores para suas necessidades!",
  veículo: "Encontre o veículo perfeito para tornar suas viagens memoráveis!"
}
export function BoxMenu() {
  const { state } = useStateContext()

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Faça sua busca por</h1>
        <MenuItem />
      </div>
      <h2 className={styles.subtitle}>{subtitles[state]}</h2>
      <LinkButton />
    </div>
  )
}
