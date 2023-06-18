import styles from "./Header.module.scss"
import { BoxMenu } from "../BoxMenu";
import { StateBanner } from "../StateBanner";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <BoxMenu />
      <StateBanner />
    </div>
  )
}
