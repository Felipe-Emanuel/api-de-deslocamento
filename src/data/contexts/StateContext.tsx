"use client";
import 'react-toastify/dist/ReactToastify.css';
import { Client } from "@/src/models/client";
import { Conductor } from "@/src/models/conductor";
import { Displacement } from "@/src/models/displacement";
import { Vehicle } from "@/src/models/vehicle";
import { ReactNode, createContext, useState, useEffect, Dispatch, SetStateAction } from "react";
import { getData } from "../services/client";
import { toast } from "react-toastify";


export type StateType = "cliente" | "deslocamento" | "condutor" | "veículo";

interface StateContextProvider {
  children: ReactNode;
}

export type Card = {
  nome: string;
  cidade: string;
  uf: string;
  bairro: string;
  numeroHabilitacao: string;
  catergoriaHabilitacao: string;
  checkList: string;
  kmInicial: string;
  motivo: string;
  observacao: string;
  marcaModelo: string;
  placa: string;
  kmAtual: string;
}

export type FiltredItem = {
  label: string;
  id: string | number | undefined;
}

type StateContextType = {
  state: StateType,
  data: Card[]
  filteredData: FiltredItem[],
  setState: (state: StateType) => void;
  setData: Dispatch<SetStateAction<Card[]>>
};

export const StateContext = createContext<StateContextType>({
  setState: () => {},
  setData: () => {},
  state: "cliente",
  filteredData: [],
  data: [],
});



export const StateContextProvider = ({ children }: StateContextProvider) => {
  const [state, setState] = useState<StateType>("cliente");
  const [data, setData] = useState<Card[]>([]);
  const [filteredData, setFilteredData] = useState<FiltredItem[]>([
    {label: '', id: ''}
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getData(state);
        const updatedFilteredData: FiltredItem[] = [];

        if (state === "cliente") {
          resp.forEach((client: Client) => {
            updatedFilteredData.push({ label: client.nome, id: client.id });
          });
        } else if (state === "condutor") {
          resp.forEach((conductor: Conductor) => {
            updatedFilteredData.push({ label: conductor.nome, id: conductor.id });
          });
        } else if (state === "deslocamento") {
          resp.forEach((displacement: Displacement) => {
            updatedFilteredData.push({ label: displacement.motivo, id: displacement.id});
          });
        } else if (state === "veículo") {
          resp.forEach((vehicle: Vehicle) => {
            updatedFilteredData.push({ label: vehicle.marcaModelo, id: vehicle.id});
          });
        }

        setData(resp)
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
      data,
      setState,
      setData,
    }}
  >
    {children}
  </StateContext.Provider>
  );
};
