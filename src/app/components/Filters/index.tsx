import Button from "@mui/material/Button";
import styles from "./Filters.module.scss";
import { Search } from "../Search";
import { getData } from "@services/client";
import { useEffect } from "react";
import { useStateContext } from "@hooks/useStateContext";

export function Filters() {
  const { state, hasSearched, setHasSearched, setData } = useStateContext();

  const handleClearFilters = async () => {
    setHasSearched(false);
    const resp = await getData(state);
    return setData(resp);
  };

  useEffect(() => {
    setHasSearched(false)
  }, []);

  return (
    <>
      <h2 className={styles.filtersTitle}>Buscar {state} específico</h2>
      <div className={styles.filters}>
        <Search size="small" className={styles.search} />
        {hasSearched && (
          <Button
            color="warning"
            variant="contained"
            onClick={handleClearFilters}
          >
            Limpar filtro
          </Button>
        )}
      </div>
    </>
  );
}
