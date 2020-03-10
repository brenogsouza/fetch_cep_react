import { api } from "./api";

class CepApi {
  static getInstance() {
    if (!this.instance) {
      this.instance = new CepApi();
    }
    return this.instance;
  }

  async get(cep) {
    const response = await api.get(`/${cep}.json`);
    return response;
  }
}

export default CepApi;
