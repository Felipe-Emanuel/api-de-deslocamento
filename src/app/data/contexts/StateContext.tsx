"use client";
import 'react-toastify/dist/ReactToastify.css';
import { Client } from "@/src/models/client";
import { Conductor } from "@/src/models/conductor";
import { Displacement } from "@/src/models/displacement";
import { Vehicle } from "@/src/models/vehicle";
import { ReactNode, createContext, useState, useEffect, Dispatch, SetStateAction } from "react";
import { getData } from "../services/client";
import { toast } from "react-toastify";
import { usePathname } from 'next/navigation';


export type StateType = "cliente" | "deslocamento" | "condutor" | "veículo" | undefined;

interface StateContextProvider {
  children: ReactNode;
}

export type CardType = {
  id?: string | number;
  numeroDocumento: string;
  tipoDocumento: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  nome: string;
  numeroHabilitacao: string;
  catergoriaHabilitacao: string;
  vencimentoHabilitacao: string;
  kmInicial: number,
  kmFinal: number,
  inicioDeslocamento: string,
  fimDeslocamento: string,
  checkList: string,
  motivo: string,
  observacao: string,
  idCondutor: number,
  idVeiculo: number,
  idCliente: number
  placa: string;
  marcaModelo: string;
  anoFabricacao: number;
  kmAtual: number;
}


export type FiltredItem = {
  label: string;
  id: string | number | undefined;
}

type StateContextType = {
  hasSearched: boolean,
  outHome: boolean,
  state: StateType,
  data: CardType[]
  filteredData: FiltredItem[],
  setState: (state: StateType) => void;
  setHasSearched: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<CardType[]>>
};

export const StateContext = createContext<StateContextType>({
  setHasSearched: () => {},
  setState: () => {},
  setData: () => {},
  state: "cliente",
  filteredData: [],
  data: [],
  outHome: false,
  hasSearched: false,
});



export const StateContextProvider = ({ children }: StateContextProvider) => {
  const asPath = usePathname();
  const outHome = asPath !== "/";

  const routes: {[key: string]: StateType} = {
    "/client": 'cliente',
    "/displacement": 'deslocamento',
    "/conductor": "condutor",
    "/vehicle": "veículo" ,
  }

  const initialState = outHome ? routes[asPath] : "cliente"

  const [hasSearched, setHasSearched] = useState(false);
  const [state, setState] = useState<StateType>(initialState);
  const [data, setData] = useState<CardType[]>([]);
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
      outHome,
      hasSearched,
      setState,
      setData,
      setHasSearched,
    }}
  >
    {children}
  </StateContext.Provider>
  );
};
