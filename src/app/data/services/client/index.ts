import api from "../api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getData = async (path: string | undefined) => {
  const endpoint = path === "veículo" ? "veiculo" : path;
  try {
    const resp = api.get(`/${endpoint}`);
    const { data } = await resp;

    return data
  } catch (error: any) {
    console.error(`Erro ao recuperar dados de ${path}:`, error.response.data);
    toast.error(`${error.response.data}`)
  }
};

export const getDataById = async (path: string, id: string) => {
  const endpoint = path === "veículo" ? "veiculo" : path;
  try {
    const resp = api.get(`/${endpoint}/${id}`);
    const { data } = await resp;

    toast.success("Sucesso")
    return data
  } catch (error: any) {
    console.error(`Erro ao recuperar dados de ${path} ${id}:`, error.response.data);
    toast.error(`${error.response.data}`)
  }
};

export const postData = async (path: string, body: unknown) => {
  const setRoute = () =>{
    if (path === "deslocamento") {
      return 'deslocamento/IniciarDeslocamento'
    }
    if (path === "veículo") {
      return 'veiculo'
    }

    return path
  }
  try {
    const resp = await api.post(`/${setRoute()}`, body);
    const { data } = resp;

    toast.success("Sucesso")
    return data
  } catch (error: any) {
    console.error(`Erro ao postar em ${path}`, error.response.data);
    toast.error(`${error.response.data}`)
  }
};

export const putData = async (path: string, id: string, body: unknown) => {
  const setRoute = () =>{
    if (path === "deslocamento") {
      return `deslocamento/${id}/EncerrarDeslocamento`
    }
    if (path === "veículo") {
      return `veiculo/${id}`
    }
    return `${path}/${id}`
  }

  try {
    const resp = await api.put(`/${setRoute()}`, body);
    const { data } = resp;

    toast.success("Sucesso")
    return data;
  } catch (error: any) {
    console.error(`Erro ao atualizar em ${path}`, error.response.data);
    toast.error(`${error.response.data}`)
  }
};

export const deleteData = async (path: string, id: string) => {
  const setRoute = () => {
    if (path === "veículo") {
      return `veiculo`
    }

    return path
  }

  try {
    await api.delete(`/${setRoute()}/${id}`, {
      data: {
        id
      }
    });

    toast.success("Sucesso")
  } catch (error: any) {
    console.error(`Erro ao deletar em ${path}`, error.response.data);
    toast.error(`${error.response.data}`)
  }
};
