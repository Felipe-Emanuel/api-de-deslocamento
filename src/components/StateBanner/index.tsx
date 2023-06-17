import styles from "./StateBanner.module.scss";
import { useStateContext } from "@/src/data/hooks/useStateContext";
import { Normalize } from "@/src/functions/Normalize";
import { Button } from "@mui/material";

export function StateBanner() {
  const { state, outHome } = useStateContext();
  const { capitalizeName } = Normalize();

  return (
    <div className={styles.container}>
      {!outHome && (
        <h2>Api</h2>
      )}
      <h3>{outHome ? 'Bem vindo à sessão' : 'Deslocamento'}</h3>
      <h4 className={outHome ? styles.outHomeSubtitle : ''}>{capitalizeName(state!)}</h4>
      <a data-testid="navigation" href={outHome ? `#sessão-${state}` : '#demo'} >
        <Button variant="contained" color="warning" className={styles.demoButton}>
          {outHome ? 'Explorar' : 'Ver Demonstração'}
        </Button>
      </a>
    </div>
  );
}
