export type Client = {
  id?: string | undefined;
  numeroDocumento: string | undefined;
  tipoDocumento: string | undefined;
  nome: string | undefined;
  logradouro: string | undefined;
  numero: string | undefined;
  bairro: string | undefined;
  cidade: string | undefined;
  uf: string | undefined;
};

export type NewClient = {
  numeroDocumento: number | undefined;
  tipoDocumento: string | undefined;
  nome: string | undefined;
  logradouro: string | undefined;
  numero: string | undefined;
  bairro: string | undefined;
  cidade: string | undefined;
  uf: string | undefined;
};

export type UpdateClient = {
  id: string | undefined;
  nome: string | undefined;
  logradouro: string | undefined;
  número: string | undefined;
  bairro: string | undefined;
  cidade: string | undefined;
  uf: string | undefined;
};

export type DeleteClient = {
  id: string | undefined;
};
