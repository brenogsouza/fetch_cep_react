import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useReducer, useState } from "react";
import CepApi from "../api/cepApi";
import { handleCepMask } from "../utils/cepMask";
import { Container } from "./styles";

export default function Form() {
  const [cep, setCep] = useState("");
  const [endereco, dispatch] = useReducer(reducer, initialState);

  console.log(endereco);

  useEffect(() => {
    async function fetchEndereco() {
      if (cep.length < 9) {
        return;
      }
      console.log("buscar cep", cep);
      const res = await CepApi.getInstance().get(cep);
      console.log(res.data);
      dispatch({
        type: "UPDATE_ENDERECO",
        payload: res.data
      });
    }
    fetchEndereco();
  }, [cep]);

  const handleChangeCep = e => {
    setCep(handleCepMask(e.target.value));
  };

  return (
    <Container>
      <Paper className="paper">
        <Typography variant="h2" align="center">
          Change cep React
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="CEP"
              name="cep"
              value={cep}
              onChange={handleChangeCep}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
            <TextField
              fullWidth
              name="logradouro"
              variant="outlined"
              label="Logradouro"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <TextField
              fullWidth
              name="numero"
              variant="outlined"
              label="Número"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <TextField
              name="bairro"
              variant="outlined"
              label="Bairro"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <TextField
              name="cidade"
              variant="outlined"
              label="Cidade"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <TextField name="uf" variant="outlined" label="UF" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <TextField
              name="ibge"
              variant="outlined"
              fullWidth
              label="Código IBGE"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              name="complemento"
              variant="outlined"
              label="Complemento"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <TextField name="ddd" variant="outlined" fullWidth label="DDD" />
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <TextField
              name="latitude"
              variant="outlined"
              fullWidth
              label="Latitude"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <TextField
              name="longitude"
              variant="outlined"
              fullWidth
              label="Logitude"
            />
          </Grid>
        </Grid>
        <Button type="submit" className="button__salvar">
          Salvar
        </Button>
      </Paper>
    </Container>
  );
}
function reducer(state, action) {
  console.log("action", action);
  if (action.type === "UPDATE_ENDERECO") {
    return {
      ...state,
      ...action.payload
    };
  }
  return state;
}

const initialState = {
  code: "",
  address: "",
  number: "",
  district: "",
  complement: "",
  city: "",
  state: "",
  error: null
};
