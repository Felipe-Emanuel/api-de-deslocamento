export type Conductor = {
  id: number;
  nome: string;
  numeroHabilitacao: string;
  catergoriaHabilitacao: string;
  vencimentoHabilitacao: Date;
};

export type NewConductor = {
  nome: string;
  numeroHabilitacao: string;
  categoriaHabilitacao: string;
  vencimentoHabilitacao: Date;
};

export type UpdateConductor = {
  id: number;
  categoriaHabilitacao: string;
  vencimentoHabilitacao: Date;
};

export type DeleteConductor = {
  id: number;
};
