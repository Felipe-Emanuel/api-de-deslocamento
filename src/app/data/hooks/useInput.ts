"use client"
import { useDebounce } from "./useDebounce";
import { useLocalStorage } from "./useLocalStorage";
import { ChangeEvent, useState } from "react";

export const useInput = () => {
  const { debounced } = useDebounce();
  const clientLS = useLocalStorage()?.getLocalStorage("cliente");

  const [value, setValue] = useState({
    nome: clientLS?.nome ?? "",
    cidade: clientLS?.cidade ?? "",
    uf: clientLS?.uf ?? "",
    número: clientLS?.número ?? "",

    condutor: clientLS?.condutor ?? "",
    habilitação: clientLS?.habilitação ?? "",
    categoria: clientLS?.categoria ?? "",

    Início: clientLS?.Início ?? "",
    motivo: clientLS?.motivo ?? "",
    observação: clientLS?.observação ?? "",

    licença: clientLS?.licença ?? "",
    modelo: clientLS?.modelo ?? "",
    fabricado: clientLS?.fabricado ?? "",
  });

  const updateClientLocalStorage = () => useLocalStorage()?.setLocalStorage("cliente", value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((previous) => ({
      ...previous,
      [name]: value,
    }));

    debounced(
      updateClientLocalStorage,
      2000,
      "Seu progresso de formulário está salvo!"
    );
  };

  const {
    cidade,
    nome,
    condutor,
    número,
    uf,
    habilitação,
    categoria,
    Início,
    motivo,
    observação,
    licença,
    modelo,
    fabricado,
  } = value;

  const client = {
    nome,
    cidade,
    uf,
    número,
  };

  const conductor = {
    habilitação,
    categoria,
    condutor,
  };

  const displacement = {
    Início,
    motivo,
    observação,
  };

  const vehicle = {
    licença,
    modelo,
    fabricado,
  };

  return {
    handleChange,
    vehicle,
    value,
    client,
    conductor,
    displacement,
    clientLS,
  };
};
