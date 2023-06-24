import { StateType } from "../app/data/contexts/StateContext";

export type userConductorPostType = {
  postType: StateType;
  id: string | undefined | number | undefined;
  condutor?: string | undefined;
  habilitação?: number | undefined;
  categoria?: string | undefined;
  vencimento?: Date;
  nome?: string | undefined;
  documento?: number | undefined;
  tipo?: string | undefined;
  logradouro?: string | undefined;
  número?: number | undefined;
  cidade?: string | undefined;
  uf?: string | undefined;
  bairro?: string | undefined;
};

export type ConductorHome = {
  condutor: string | undefined;
  habilitação: number | string | undefined;
  categoria: string | undefined;
};

export type ClientSideConductor = {
  condutor: string | undefined;
  habilitação: string | undefined;
  categoria: string | undefined;
  vencimento: string | undefined;
};

export type ClientSideHome = {
  nome: string | undefined;
  cidade: string | undefined;
  uf: string | undefined;
}

export type ClientSideClient = {
  nome: string | undefined;
  documento: number | undefined;
  tipo: string | undefined;
  logradouro: string | undefined;
  número: string | undefined;
  cidade: string | undefined;
  uf: string | undefined;
  bairro: string | undefined;
};

export type DisplacementSideHome = {
  motivo: string | undefined;
  observação: string | undefined;
  controle: string | undefined;
}

export type ClientSideDisplacement = {
  Início?: string | undefined;
  motivo: string | undefined;
  observação: string | undefined;
  quilometragem?: number | undefined;
  controle: string | undefined;
  idCondutor: string | undefined | number;
  idVeiculo: string | undefined | number;
  idCliente: string | undefined | number;
};

export type VehicleHome = {
  placa: string | undefined;
  fabricado: number | string | undefined;
  modelo: string | undefined;
}

export type ClientSideVehicle = {
  placa: string | undefined;
  fabricado: number | undefined;
  modelo: string | undefined;
  rodagem: number | undefined;
};


export type ClientHome = ConductorHome | ClientSideHome | DisplacementSideHome | VehicleHome
export type ClientSide = ClientSideConductor | ClientSideClient | ClientSideDisplacement | ClientSideVehicle & {id: number | string, postType: StateType}
