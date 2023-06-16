"use client";
import 'react-toastify/dist/ReactToastify.css';
import { Client } from "@/src/models/client";
import { Conductor } from "@/src/models/conductor";
import { Displacement } from "@/src/models/displacement";
import { Vehicle } from "@/src/models/vehicle";
import { ReactNode, createContext, useState, useEffect } from "react";
import { getData } from "../services/client";
import { toast } from "react-toastify";


export type StateType = "cliente" | "deslocamento" | "condutor" | "veículo";

interface StateContextProvider {
  children: ReactNode;
}

type StateContextType = {
  state: StateType,
  filteredData: filtredItem[],
  setState: (state: StateType) => void;
};

export const StateContext = createContext<StateContextType>({
  setState: () => {},
  state: "cliente",
  filteredData: [],
});

type filtredItem = {
  label: string;
  id: string | number | undefined;
}

export const StateContextProvider = ({ children }: StateContextProvider) => {
  const [state, setState] = useState<StateType>("cliente");
  const [filteredData, setFilteredData] = useState<filtredItem[]>([
    {label: '', id: ''}
  ]);

  const endpoint = state === "veículo" ? "veiculo" : state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getData(endpoint);
        let id = 0

        const updatedFilteredData: filtredItem[] = [];

        if (state === "cliente") {
          resp.forEach((client: Client) => {
            updatedFilteredData.push({ label: client.nome, id: ++id });
          });
        } else if (state === "condutor") {
          resp.forEach((conductor: Conductor) => {
            updatedFilteredData.push({ label: conductor.nome, id: id++ });
          });
        } else if (state === "deslocamento") {
          resp.forEach((displacement: Displacement) => {
            updatedFilteredData.push({ label: displacement.motivo, id: id++ });
          });
        } else if (state === "veículo") {
          resp.forEach((vehicle: Vehicle) => {
            updatedFilteredData.push({ label: vehicle.marcaModelo, id: id++ });
          });
        }

        setFilteredData(updatedFilteredData);
      } catch (error) {
        toast.error(`Erro ao buscar em ${state}`)
      }
    };

    fetchData();
  }, [state]);

  return (
    <StateContext.Provider
    value={{
      state,
      filteredData,
      setState,
    }}
  >
    {children}
  </StateContext.Provider>
  );
};
