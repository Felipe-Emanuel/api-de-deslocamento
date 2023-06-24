import styles from "./StateBanner.module.scss";
import { Button } from "@mui/material";
import { Normalize } from "@/src/functions/Normalize";
import { useStateContext } from "@hooks/useStateContext";
import { usePageStateContext } from "../../data/hooks/usePageStateContext";

export function StateBanner() {
  const { state, outHome } = useStateContext();
  const { pageState } = usePageStateContext();
  const { capitalizeName } = Normalize();

  return (
    <div className={styles.container}>
      {!outHome && (
        <h2>Api</h2>
      )}
      <h3>{outHome ? 'Bem vindo à sessão' : 'Deslocamento'}</h3>
      <h4 className={outHome ? styles.outHomeSubtitle : ''}>{capitalizeName(state!)}</h4>
      <a data-testid="navigation" href={outHome ? `#main-section` : '#demo'} >
        <Button variant="contained" color="warning" className={styles.demoButton}>
          {outHome ? pageState : 'Ver Demonstração'}
        </Button>
      </a>
    </div>
  );
}
