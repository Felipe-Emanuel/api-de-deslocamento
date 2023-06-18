export type Vehicle = {
  id: number;
  placa: string;
  marcaModelo: string;
  anoFabricacao: number;
  kmAtual: number;
};

export type NewVehicle = {
  placa: string,
  marcaModelo: string,
  anoFabricacao: 0,
  kmAtual: 0
};

export type UpdatedVehicle = {
  id: 0,
  marcaModelo: string,
  anoFabricacao: 0,
  kmAtual: 0
};

export type DeleteVehicle = {
  id: 0,
};
