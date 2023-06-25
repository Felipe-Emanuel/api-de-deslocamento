export type Conductor = {
  id: number | undefined;
  nome: string | undefined;
  numeroHabilitacao: string | undefined;
  catergoriaHabilitacao: string | undefined;
  vencimentoHabilitacao: string | Date;
};

export type NewConductor = {
  nome: string | undefined;
  numeroHabilitacao: string | undefined;
  categoriaHabilitacao: string | undefined;
  vencimentoHabilitacao: string | Date;
};

export type UpdatedConductor = {
  id: number | undefined;
  habilitação: string | undefined;
  vencimento: string | undefined;
};

export type DeleteConductor = {
  id: number | undefined;
};
