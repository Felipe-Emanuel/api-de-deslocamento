export type Displacement = {
  id: number | undefined,
  kmInicial: number | undefined,
  kmFinal: number | undefined,
  inicioDeslocamento: Date,
  fimDeslocamento: Date,
  checkList: string | undefined,
  motivo: string | undefined,
  observacao: string | undefined,
  idCondutor: number | undefined,
  idVeiculo: number | undefined,
  idCliente: number | undefined
}

export type NewDisplacement = {
  kmInicial: number | undefined,
  inicioDeslocamento: Date,
  checkList: string | undefined,
  motivo: string | undefined,
  observacao: string | undefined,
  idCondutor: string | undefined | number,
  idVeiculo: string | undefined | number,
  idCliente: string | undefined | number
}

export type UpdatedDisplacement = {
  id: number | undefined,
  quilometro_final: number | undefined,
  deslocamento_final: string | undefined,
  observação: string | undefined
}

export type DeleteDisplacement = {
  id: number | undefined,
}
