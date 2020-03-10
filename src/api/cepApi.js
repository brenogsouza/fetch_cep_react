import api from "./api";

class CepApi {
  static getInstance() {
    if (!this.instance) {
      this.instance = new CepApi();
    }
    return this.instance;
  }

  async get() {
    const response = await api.get("/fornecedores");
    return response;
  }
}

export default CepApi;
