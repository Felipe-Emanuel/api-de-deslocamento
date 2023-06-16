"use client";
import { useStateContext } from "@/src/data/hooks/useStateContext";
import styles from "./FirstClientThumb.module.scss";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Normalize } from "@/src/functions/Normalize";

export function FirstClientThumb() {
  const { capitalizeName } = Normalize();
  const { state, filteredData } = useStateContext();

  return (
    <div className={styles.thumb}>
      <Stack spacing={1} className={styles.skeleton}>
        <Skeleton variant="circular" width={40} height={40} sx={{ width: '100%' }} />
        <Skeleton variant="rounded" height={10} sx={{ width: '90%' }} />
        <Skeleton variant="rounded" height={10} sx={{ width: '70%' }} />
        <Skeleton variant="rounded" height={10} sx={{ width: '95%' }} />
        <Skeleton variant="rounded" height={10} sx={{ width: '100%' }} />
        <Skeleton variant="rounded" height={10}  sx={{ width: '66%' }} />
        <Skeleton variant="rounded" height={10} sx={{ width: '83%' }} />
      </Stack>
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
