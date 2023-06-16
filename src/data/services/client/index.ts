import api from "../api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const getData = async (path: string) => {
  try {
    const resp = api.get(`/${path}`);
    const { data } = await resp;

    toast.success("Sucesso")
    return console.log(data);
  } catch (error) {
    console.error(`Erro ao recuperar dados de ${path}:`, error);
    toast.error(`Erro ao recuperar dados de ${path}`);
  }
};

export const getDataById = async (path: string, id: string) => {
  try {
    const resp = api.get(`/${path}/${id}`);
    const { data } = await resp;

    toast.success("Sucesso")
    return console.log(data);
  } catch (error) {
    console.error(`Erro ao recuperar dados de ${path} ${id}:`, error);
    toast.error(`Erro ao recuperar dados de ${path} ${id}`);
  }
};

export const postData = async (path: string, body: unknown) => {
  try {
    const resp = await api.post(`/${path}`, body);
    const { data } = resp;

    toast.success("Sucesso")
    return data
  } catch (error) {
    console.error(`Erro ao postar em ${path}`, error);
    toast.error(`Erro ao postar em ${path}`)
  }
};

export const putData = async (path: string, id: string, body: unknown) => {
  try {
    const resp = await api.put(`/${path}/${id}`, body);
    const { data } = resp;

    toast.success("Sucesso")
    console.log(data);
  } catch (error) {
    console.error(`Erro ao atualizar em ${path}`, error);
    toast.error(`Erro ao atualizar em ${path}`)
  }
};

export const deleteData = async (path: string, id: string) => {
  try {
    await api.delete(`/${path}/${id}`, {
      data: {
        id
      }
    });

    toast.success("Sucesso")
  } catch (error) {
    console.error(`Erro ao deletar em ${path}`, error);
    toast.error(`Erro ao deletar em ${path}`)
  }
};
