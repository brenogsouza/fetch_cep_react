import Axios from "axios";

export const api = Axios.create({
  baseURL: `https://cep.awesomeapi.com.br/json/`,
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
