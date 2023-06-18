"use client";
import styles from "./FirstThumb.module.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Normalize } from "@/src/functions/Normalize";
import { FloatCard } from "./FloatCard";
import { FiltredItem } from "@contexts/StateContext";
import { getDataById } from "@services/client";
import { useStateContext } from "@hooks/useStateContext";
import { SyntheticEvent, useState } from "react";

export function FirstThumb() {
  const { capitalizeName } = Normalize();
  const { state, filteredData, data, setData } = useStateContext();
  const [selectedOption, setSelectedOption] = useState<FiltredItem | null>(null);

  const handleOptionChange = (
    e: SyntheticEvent<Element, Event>,
    value: FiltredItem | null
  ) => {
    e.preventDefault();
    setSelectedOption(value);
  };

  const handleFormSubmit = async () => {
    if (selectedOption) {
      const selectedId = selectedOption.id;

      const resp = await getDataById(state!, String(selectedId))
      setData([resp])
    }
  };

  return (
    <div className={styles.thumb}>
      <FloatCard handleFormSubmit={handleFormSubmit} data={data} />
      <div className={styles.autocomplete}>
        <Autocomplete
          onChange={handleOptionChange}
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
              label={capitalizeName(state!)}
            />
          )}
        />
      </div>
    </div>
  );
}
