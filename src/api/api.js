import Axios from "axios";

export const api = Axios.create({
  baseURL: `https://apps.widenet.com.br/busca-cep/api/cep`,
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
