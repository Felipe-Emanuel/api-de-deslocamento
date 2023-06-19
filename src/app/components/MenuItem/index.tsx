"use client";
import * as icon from "../icons";
import { StateType } from "@contexts/StateContext";
import { usePathname } from "next/navigation";
import { StatePageType } from "@contexts/PageStateContext";
import { Box, Tab, Tabs } from "@mui/material";
import { useStateContext } from "@hooks/useStateContext";
import { usePageStateContext } from "@hooks/usePageStateContext";
import {
  SyntheticEvent,
  useState,
  SetStateAction,
  useEffect,
  ReactElement,
  JSXElementConstructor,
} from "react";

type statesButtonType = {
  label: string;
  icon: string | ReactElement<JSXElementConstructor<any>>;
};

export function MenuItem() {
  const { outHome, state, setState } = useStateContext();
  const { pageState, setPageState } = usePageStateContext();
  const asPath = usePathname();
  const [value, setValue] = useState<SetStateAction<string>>();

  useEffect(() => {
    setValue(outHome ? "explorar" : "cliente");
    setPageState("explorar");
  }, [asPath]);

  const handleChange = (
    e: SyntheticEvent,
    newValue: (StateType & StatePageType)
  ) => {
    e.preventDefault();
    setValue(newValue);

    if (outHome) {
      return setPageState(newValue);
    }

    setState(newValue);
  };

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
  const initialValue = outHome ? 'explorar' : 'cliente'

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
