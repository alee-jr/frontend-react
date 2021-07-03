import axios from 'axios';
import { Configs } from '../configs';

interface Requisicao {
  metodo: 'POST' | 'GET' | 'PUT' | 'DELETE';
  path: string;
  body?: any;
  headers?: any;
}

const apiAxios = axios.create({
  baseURL: Configs.api,
});

const RequisicaoApi = (requisicao: Requisicao): Promise<any> => {
  return new Promise(resolve => {
    apiAxios({
      headers: requisicao.headers,
      method: requisicao.metodo,
      url: requisicao.path,
      data: requisicao.body,
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        resolve({
          erro: true,
          mensagem:
            (err.response && err.response.data.message) || 'Ocorreu um erro inesperado. Tente novamente mais tarde.',
        });
      });
  });
};

export default RequisicaoApi;
