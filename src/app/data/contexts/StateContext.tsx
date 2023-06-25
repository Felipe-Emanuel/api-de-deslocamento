"use client";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { Client } from "@/src/models/client";
import { Vehicle } from "@/src/models/vehicle";
import { getData } from "../services/client";
import { Conductor } from "@/src/models/conductor";
import { usePathname } from 'next/navigation';
import { ItemWithType } from './PageStateContext';
import { Displacement } from "@/src/models/displacement";
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ReactNode, createContext, useState, useEffect, Dispatch, SetStateAction, ChangeEvent } from "react";

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
  vencimentoHabilitacao: string | Date;
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

export interface ClientLS {
  nome?: string | undefined;
  cidade?: string | undefined;
  documento?: number | undefined;
  tipo?: string | undefined;
  logradouro?: string | undefined;
  bairro?: string | undefined;
  uf?: string | undefined;
  número?: string | undefined;
  condutor?: string | undefined;
  habilitação?: string | undefined;
  categoria?: string | undefined;
  vencimento?: string | undefined;
  Início?: number | undefined;
  deslocamento_final?: string | undefined;
  quilometro_final?: number | undefined;
  quilometragem?: string | undefined;
  motivo?: string | undefined;
  observação?: string | undefined;
  deslocamento?: string | undefined;
  controle?: string | undefined;
  licença?: string | undefined;
  modelo?: string | undefined;
  fabricado?: number | undefined;
  placa?: string | undefined;
  rodagem?: number | undefined;
}

type StateContextType = {
  hasSearched: boolean,
  outHome: boolean,
  state: StateType,
  value: ClientLS,
  clientLS: { idCondutor: string | number; idVeiculo: string | number; idCliente: string | number; };
  data: ItemWithType[] | null
  filteredData: FiltredItem[],
  setState: (state: StateType) => void;
  setHasSearched: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<CardType[] & ItemWithType[] | null>>
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const StateContext = createContext<StateContextType>({
  setHasSearched: () => {},
  setState: () => {},
  setData: () => {},
  handleChange: () => {},
  state: "cliente",
  filteredData: [],
  value: {},
  data: [],
  clientLS: {
    idCliente: "",
    idCondutor: "",
    idVeiculo: ""
  },
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
  const clientLS = useLocalStorage()?.getLocalStorage("cliente");

  const [hasSearched, setHasSearched] = useState(false);
  const [state, setState] = useState<StateType>(initialState);
  const [data, setData] = useState<CardType[] & ItemWithType[] | null>([]);
  const [filteredData, setFilteredData] = useState<FiltredItem[]>([
    {label: '', id: ''}
  ]);

  const [value, setValue] = useState<ClientLS>({
    nome: clientLS?.nome ?? "",
    cidade: clientLS?.cidade ?? "",
    documento: clientLS?.documento ?? "",
    tipo: clientLS?.tipo ?? "",
    logradouro: clientLS?.logradouro ?? "",
    bairro: clientLS?.bairro ?? "",
    uf: clientLS?.uf ?? "",
    número: clientLS?.número ?? "",

    condutor: clientLS?.condutor ?? "",
    habilitação: clientLS?.habilitação ?? "",
    categoria: clientLS?.categoria ?? "",
    vencimento: clientLS?.vencimento ?? "",

    Início: clientLS?.Início ?? "",
    deslocamento_final: clientLS?.deslocamento_final ?? "",
    quilometro_final: clientLS?.quilometro_final ?? "",
    quilometragem: clientLS?.Início ?? "",
    motivo: clientLS?.motivo ?? "",
    observação: clientLS?.observação ?? "",
    deslocamento: clientLS?.deslocamento ?? "",
    controle: clientLS?.controle ?? "",

    licença: clientLS?.licença ?? "",
    modelo: clientLS?.modelo ?? "",
    fabricado: clientLS?.fabricado ?? "",
    placa: clientLS?.placa ?? "",
    rodagem: clientLS?.rodagem ?? "",
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getData(state);
        const updatedFilteredData: FiltredItem[] = [];

        if (state === "cliente") {
          resp.forEach((client: Client) => {
            updatedFilteredData.push({ label: client.nome!, id: client.id });
          });
        } else if (state === "condutor") {
          resp.forEach((conductor: Conductor) => {
            updatedFilteredData.push({ label: conductor.nome!, id: conductor.id });
          });
        } else if (state === "deslocamento") {
          resp.forEach((displacement: Displacement) => {
            updatedFilteredData.push({ label: displacement.motivo!, id: displacement.id});
          });
        } else if (state === "veículo") {
          resp.forEach((vehicle: Vehicle) => {
            updatedFilteredData.push({ label: vehicle.marcaModelo!, id: vehicle.id});
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setValue((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  return (
    <StateContext.Provider
    value={{
      state,
      filteredData,
      data,
      outHome,
      hasSearched,
      value,
      clientLS,
      setState,
      setData,
      setHasSearched,
      handleChange
    }}
  >
    {children}
  </StateContext.Provider>
  );
};
