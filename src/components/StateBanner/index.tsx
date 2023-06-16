import styles from "./StateBanner.module.scss";
import { useStateContext } from "@/src/data/hooks/useStateContext";
import { Normalize } from "@/src/functions/Normalize";

export function StateBanner() {
  const { state } = useStateContext();
  const { capitalizeName } = Normalize();

  return (
    <div className={styles.container}>
      <h2>Api</h2>
      <h3>Deslocamento</h3>
      <h4>{capitalizeName(state)}</h4>
    </div>
  );
}
