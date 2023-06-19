"use client";
import styles from "./FirstThumb.module.scss";
import { Search } from "../../Search";
import { FloatCard } from "./FloatCard";
import { useStateContext } from "@hooks/useStateContext";

export function FirstThumb() {
  const { data } = useStateContext();

  return (
    <div className={styles.thumb}>
      <FloatCard data={data} />
      <div className={styles.autocomplete}>
       <Search />
      </div>
    </div>
  );
}
