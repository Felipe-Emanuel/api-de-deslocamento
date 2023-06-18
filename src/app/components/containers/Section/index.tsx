import styles from "./Section.module.scss";
import { ReactNode } from "react";

interface SectionProps{
  children: ReactNode;
  id: string;
}

export function Section({children, id = ""}: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      {children}
    </section>
  )
}
