"use client";
import { useStateContext } from "@/src/data/hooks/useStateContext";
import styles from "./FirstThumb.module.scss";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Normalize } from "@/src/functions/Normalize";
import { FloatCard } from "./FloatCard";

export function FirstThumb() {
  const { capitalizeName } = Normalize();
  const { state, filteredData, data } = useStateContext();

  return (
    <div className={styles.thumb}>
        <FloatCard data={data} />
      <div className={styles.autocomplete}>
        <Autocomplete
          size="small"
          key={state}
          id={`${state} autocomplete`}
          disablePortal
          options={filteredData || []}
          sx={{ width: 180 }}
          renderInput={(params) => (
            <TextField
              {...params}
              id={params.id}
              variant="standard"
              color="warning"
              label={capitalizeName(state)}
            />
          )}
        />
      </div>
    </div>
  );
}
