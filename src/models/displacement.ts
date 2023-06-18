export type Displacement = {
  id: number,
  kmInicial: number,
  kmFinal: number,
  inicioDeslocamento: Date,
  fimDeslocamento: Date,
  checkList: string,
  motivo: string,
  observacao: string,
  idCondutor: number,
  idVeiculo: number,
  idCliente: number
}

export type NewDisplacement = {
  kmInicial: number,
  inicioDeslocamento: Date,
  checkList: string,
  motivo: string,
  observacao: string,
  idCondutor: number,
  idVeiculo: number,
  idCliente: number
}

export type UpdatedDisplacement = {
  id: number,
  kmFinal: number,
  fimDeslocamento: Date,
  observacao: string
}

export type DeleteDisplacement = {
  id: number,
}
