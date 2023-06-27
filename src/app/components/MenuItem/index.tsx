"use client";
import * as icon from "../icons";
import { usePathname } from "next/navigation";
import { Box, Tab, Tabs } from "@mui/material";
import { useStateContext } from "@hooks/useStateContext";
import { usePageStateContext } from "@hooks/usePageStateContext";
import { useEffect, ReactElement } from "react";
import { useMenuItem } from "../../data/hooks/useMenuItem";

type statesButtonType = {
  label: string;
  icon: string | ReactElement;
};

export function MenuItem() {
  const { outHome, state } = useStateContext();
  const { pageState, setPageState } = usePageStateContext();
  const { value, handleChange, setValue } = useMenuItem();
  const asPath = usePathname();

  useEffect(() => {
    setValue(outHome ? "explorar" : "cliente");
    setPageState("explorar");
  }, [asPath]);

  const states: statesButtonType[] = [
    {
      label: "cliente",
      icon: <icon.ClientIcon state={state} />,
    },
    {
      label: "deslocamento",
      icon: <icon.DisplacementIcon state={state} />,
    },
    {
      label: "condutor",
      icon: <icon.ConductorIcon state={state} />,
    },
    {
      label: "veículo",
      icon: <icon.VehicleIcon state={state} />,
    },
  ];

  const pageStates: statesButtonType[] = [
    {
      label: "início",
      icon: <icon.HomePageIcon pageState={pageState} />,
    },
    {
      label: "explorar",
      icon: <icon.ExploreIcon pageState={pageState} />,
    },
    {
      label: "cadastrar",
      icon: <icon.RegisterIcon pageState={pageState} />,
    },
    {
      label: "meus registros",
      icon: <icon.MyLastSeenIcon pageState={pageState} />,
    },
  ];

  const paths = outHome ? pageStates : states;
  const initialValue = outHome ? "explorar" : "cliente";

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value || initialValue}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
        variant="fullWidth"
      >
        {paths?.map((state, i) => {
          return (
            <Tab
              key={i}
              icon={state.icon}
              value={state.label}
              label={state.label}
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
