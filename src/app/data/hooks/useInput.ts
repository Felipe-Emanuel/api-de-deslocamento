"use client";
import { useEffect } from "react";
import { useDebounce } from "./useDebounce";
import { UpdateClient } from "@/src/models/client";
import { UpdatedVehicle } from "@/src/models/vehicle";
import { useLocalStorage } from "./useLocalStorage";
import { useStateContext } from "./useStateContext";
import { UpdatedConductor } from "@/src/models/conductor";
import { usePageStateContext } from "./usePageStateContext";
import { UpdatedDisplacement } from "@/src/models/displacement";
import {
  ClientSideHome,
  ConductorHome,
  DisplacementSideHome,
  VehicleHome,
  ClientSideClient,
  ClientSideConductor,
  ClientSideDisplacement,
  ClientSideVehicle,
} from "@/src/models/userPosts";

export const useInput = () => {
  const { ids } = usePageStateContext();
  const { value } = useStateContext();
  const { debounced } = useDebounce();

  const updateClientLocalStorage = () =>
    useLocalStorage()?.setLocalStorage("cliente", value);

  useEffect(() => {
    debounced(
      updateClientLocalStorage,
      2000
    );
  }, [value]);

  const { idCondutor, idVeiculo, idCliente } = ids;

  if(!value) return null

  const {
    placa,
    fabricado,
    modelo,
    rodagem,
    condutor,
    habilitação,
    categoria,
    motivo,
    observação,
    controle,
    quilometro_final,
    deslocamento_final,
    nome,
    documento,
    tipo,
    logradouro,
    número,
    cidade,
    uf,
    bairro,
    vencimento,
  } = value!;

  const updatedVehicle = (id: number | undefined): UpdatedVehicle => ({
    id,
    modelo,
    fabricado,
    rodagem,
  });

  const updatedDisplacement = (id: number | undefined): UpdatedDisplacement => ({
    id,
    quilometro_final,
    deslocamento_final,
    observação,
  });

  const updateClient = (id: string | undefined): UpdateClient => ({
    id,
    nome,
    cidade,
    uf,
    número,
    logradouro,
    bairro,
  });

  const updatedConductor = (id: number | undefined): UpdatedConductor => ({
    id,
    habilitação,
    vencimento,
  });

  const client: ClientSideHome = {
    nome,
    cidade,
    uf,
  };

  const conductor: ConductorHome = {
    condutor,
    habilitação,
    categoria,
  };

  const displacement: DisplacementSideHome = {
    motivo,
    observação,
    controle,
  };

  const vehicle: VehicleHome = {
    modelo,
    fabricado,
    placa,
  };

  const clientForm: ClientSideClient = {
    nome,
    documento,
    tipo,
    logradouro,
    bairro,
    número,
    cidade,
    uf,
  };

  const conductorForm: ClientSideConductor = {
    condutor,
    habilitação,
    categoria,
    vencimento,
  };

  const displacementForm: ClientSideDisplacement = {
    motivo,
    observação,
    controle,
    idCondutor,
    idVeiculo,
    idCliente,
  };

  const vehicleForm: ClientSideVehicle = {
    placa,
    fabricado,
    modelo,
    rodagem,
  };

  return {
    vehicle,
    value,
    client,
    conductor,
    displacement,
    clientForm,
    conductorForm,
    displacementForm,
    vehicleForm,
    updatedConductor,
    updateClient,
    updatedDisplacement,
    updatedVehicle,
  };
};
