import styles from "./StateBanner.module.scss";
import { useStateContext } from "@/src/data/hooks/useStateContext";
import { Normalize } from "@/src/functions/Normalize";
import { Button } from "@mui/material";

export function StateBanner() {
  const { state } = useStateContext();
  const { capitalizeName } = Normalize();

  return (
    <div className={styles.container}>
      <h2>Api</h2>
      <h3>Deslocamento</h3>
      <h4>{capitalizeName(state)}</h4>
      <a href="#demo" >
        <Button variant="contained" color="warning" className={styles.demoButton}>
          Ver Demonstração
        </Button>
      </a>
    </div>
  );
}
