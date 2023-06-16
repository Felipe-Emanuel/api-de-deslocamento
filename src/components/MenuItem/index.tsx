import { StateType } from "@/src/data/contexts/StateContext";
import { useStateContext } from "@/src/data/hooks/useStateContext";
import { Box, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";

const states = ["cliente", "deslocamento", "condutor", "veículo"];

export function MenuItem
() {
  const { setState } = useStateContext();
  const [value, setValue] = useState("cliente");

  const handleChange = (e: SyntheticEvent, newValue: StateType) => {
    e.preventDefault();
    setValue(newValue);
    setState(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
      >
        {states.map((state, i) => (
          <Tab key={i} value={state} label={state} />
        ))}
      </Tabs>
    </Box>
  );
}
