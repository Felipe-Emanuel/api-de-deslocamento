"use client";
import { Client } from "@/src/models/client";
import { Vehicle } from "@/src/models/vehicle";
import { Conductor } from "@/src/models/conductor";
import { SelectChangeEvent } from "@mui/material/Select";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { CardType } from "./StateContext";
import { useStateContext } from "../hooks/useStateContext";
import { UpdatedDisplacement } from "@/src/models/displacement";


export type StatePageType =
  | "início"
  | "explorar"
  | "cadastrar"
  | "meus registros"
  | undefined;

type OptionsType = {
  idCondutor: Conductor[];
  idVeiculo: Vehicle[];
  idCliente: Client[];
};

interface PageStateContextProviderProps {
  children: ReactNode;
}

type PageStateContextType = {
  setPageState: (state: StatePageType) => void;
  setClients: Dispatch<SetStateAction<Client[]>>;
  setConductors: Dispatch<SetStateAction<Conductor[]>>;
  setVehicles: Dispatch<SetStateAction<Vehicle[]>>;
  filtaredData: ({objectKey, id}: filtaredData) => void;
  handleIdChange: (e: SelectChangeEvent<HTMLInputElement | string | number | never[]>, name: string) => void;
  setIds: Dispatch<SetStateAction<{ idCondutor: string | number; idVeiculo: string | number; idCliente: string | number; }>>;
  pageState: StatePageType;
  clients: Client[];
  conductors: Conductor[];
  vehicles: Vehicle[];
  options: OptionsType;
  ids: { idCondutor: string | number; idVeiculo: string | number; idCliente: string | number; };
  filtared: ItemWithType[]
};

export type ItemWithType = Client & Conductor & Vehicle & CardType & UpdatedDisplacement & { type: "idCliente" | "idCondutor" | "idVeiculo" };
export type filtaredData = {
  objectKey: "idCondutor" | "idVeiculo" | "idCliente",
  id: string | number | undefined
}

export const PageStateContext = createContext<PageStateContextType>({
  setPageState: () => {},
  setClients: () => {},
  setConductors: () => {},
  setVehicles: () => {},
  filtaredData: () => {},
  handleIdChange: () => {},
  setIds: () => {},
  pageState: "explorar",
  clients: [],
  conductors: [],
  vehicles: [],
  filtared: [],
  options: {
    idCondutor: [],
    idVeiculo: [],
    idCliente: []
  },
  ids: {
    idCliente: "",
    idCondutor: "",
    idVeiculo: ""
  },
});

export const PageStateContextProvider = ({
  children,
}: PageStateContextProviderProps) => {
  const { clientLS } = useStateContext()
  const [pageState, setPageState] = useState<StatePageType>();
  const [clients, setClients] = useState<Client[]>([]);
  const [conductors, setConductors] = useState<Conductor[]>([]);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filtared, setFiltared] = useState<ItemWithType[]>([]);

  const options: OptionsType = {
    idCondutor: conductors,
    idVeiculo: vehicles,
    idCliente: clients,
  };

  const filtaredData = ({objectKey, id}: filtaredData) => {
    const filteredOptions = (options[objectKey] as ItemWithType[]).filter(obj => obj.id === id);
    const objWithType: ItemWithType = {
      ...filteredOptions[0],
      type: objectKey,
    };

    const updatedFiltared: ItemWithType[] = filtared.filter((item: ItemWithType) => item.type !== objectKey);
    setFiltared([...updatedFiltared, objWithType]);
  };

  const [ids, setIds] = useState({
    idCondutor: clientLS?.idCondutor ?? "",
    idVeiculo: clientLS?.idVeiculo ?? "",
    idCliente: clientLS?.idCliente ?? "",
  });

  const handleIdChange = (e: SelectChangeEvent<HTMLInputElement | string | number | never[]>, name: string) => {
    const value = e.target.value;
    setIds((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  return (
    <PageStateContext.Provider
      value={{
        setPageState,
        setClients,
        setConductors,
        setVehicles,
        filtaredData,
        handleIdChange,
        setIds,
        ids,
        clients,
        filtared,
        conductors,
        vehicles,
        pageState,
        options
      }}
    >
      {children}
    </PageStateContext.Provider>
  );
};
