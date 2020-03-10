import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";
import React, { useEffect, useReducer, useState } from "react";
import CepApi from "../api/cepApi";
import { handleCepMask } from "../utils/cepMask";
import { Container } from "./styles";

export default function Form() {
  const [cep, setCep] = useState("");
  const [endereco, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);

  console.log(endereco);

  useEffect(() => {
    async function fetchEndereco() {
      if (cep.length < 9) {
        return;
      }
      console.log("buscar cep", cep);
      setLoading(true);
      const res = await CepApi.getInstance().get(cep);
      setLoading(false);
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

  const handleChangeField = e => {};

  return (
    <Container>
      <Paper className="paper">
        <Typography variant="h2" align="center">
          Change cep React
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="CEP"
              name="cep"
              value={cep}
              onChange={handleChangeCep}
            />
          </Grid>
          {loading && (
            <>
              <CircularProgress />
              <span>BUSCANDO CEP...</span>
            </>
          )}

          {[
            {
              label: "Logradouro",
              xs: 12,
              sm: 12,
              md: 10,
              lg: 10,
              xl: 10,
              name: "address",
              fullWidth: true
            },
            {
              label: "Número",
              xs: 12,
              sm: 12,
              md: 2,
              lg: 2,
              xl: 2,
              name: "number",
              fullWidth: true
            },
            {
              label: "Bairro",
              xs: 12,
              sm: 12,
              md: 4,
              lg: 4,
              xl: 4,
              name: "district",
              fullWidth: true
            },
            {
              label: "Cidade",
              xs: 12,
              sm: 12,
              md: 4,
              lg: 4,
              xl: 4,
              name: "city",
              fullWidth: true
            },
            {
              label: "UF",
              xs: 12,
              sm: 12,
              md: 2,
              lg: 2,
              xl: 2,
              name: "state",
              fullWidth: true
            },
            {
              label: "Complemento",
              xs: 12,
              sm: 12,
              md: 6,
              lg: 6,
              xl: 6,
              name: "complement",
              fullWidth: true
            }
          ].map(field => (
            <Grid item spacing={3}>
              <TextField
                {...field}
                key={field.name}
                value={endereco[field.name]}
                fullWidth
                variant="outlined"
                onChange={handleChangeField}
                disabled={loading}
              />
            </Grid>
          ))}
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
