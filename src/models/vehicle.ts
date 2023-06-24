export type Vehicle = {
  id: number | undefined;
  placa: string | undefined;
  marcaModelo: string | undefined;
  anoFabricacao: number | undefined;
  kmAtual: number | undefined;
};

export type NewVehicle = {
  placa: string | undefined,
  marcaModelo: string | undefined,
  anoFabricacao: number | undefined,
  kmAtual: number | undefined
};

export type UpdatedVehicle = {
  id: number | undefined,
  modelo: string | undefined,
  fabricado: number | undefined,
  rodagem: number | undefined
};

export type DeleteVehicle = {
  id: number | undefined,
};
