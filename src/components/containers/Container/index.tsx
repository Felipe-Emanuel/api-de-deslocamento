import styles from "./Container.module.scss"
import { ReactNode } from "react";

interface ContainerProps{
  children: ReactNode
}

export function Container({children}: ContainerProps) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
