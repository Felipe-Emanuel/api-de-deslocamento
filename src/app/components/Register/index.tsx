'use client';
import styles from "./Register.module.scss";
import { useStateContext } from "@hooks/useStateContext";

interface RegisterProps{
}

export function Register({}: RegisterProps) {
  const { state } = useStateContext()

  return (
    <div className={styles.register}>
      <h1>Reistre um {state} com poucos clicks!</h1>

    </div>
  )
}
