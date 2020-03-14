import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";
import React, { useEffect, useReducer, useRef, useState } from "react";
import CepApi from "../api/cepApi";
import { handleCepMask } from "../utils/cepMask";
import { Container } from "./styles";

export default function Form() {
  const [cep, setCep] = useState("");
  const [endereco, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);

  const numberField = useRef();

  console.log(endereco);

  useEffect(() => {
    async function fetchEndereco() {
      if (cep.length < 9) {
        return;
      }

      setLoading(true);
      const res = await CepApi.getInstance().get(cep);
      setLoading(false);

      dispatch({
        type: "UPDATE_ENDERECO",
        payload: res.data
      });
      numberField.current.focus();
    }
    fetchEndereco();
  }, [cep]);

  const handleChangeCep = e => {
    setCep(handleCepMask(e.target.value));
  };

  const handleChangeField = e => {
    const { name, value } = e.target;
    dispatch({
      type: "UPDATE_FIELD",
      payload: { name, value }
    });
  };

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
              xs: 10,
              sm: 12,
              md: 10,
              lg: 10,
              xl: 10,
              name: "address",
              fullWidth: true
            },
            {
              label: "Número",
              xs: 2,
              sm: 12,
              md: 2,
              lg: 2,
              xl: 2,
              name: "number",
              fullWidth: true,
              inputRef: numberField
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
            <Grid item   xs: 12,
              sm: 12,
              md: 6,
              lg: 6,
              xl: 6,>
            <TextField
              {...field}
              key={field.name}
              value={endereco[field.name]}
              variant="outlined"
              style={{ padding: 10 }}
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
  if (action.type === "UPDATE_FIELD") {
    return {
      ...state,
      [action.payload.name]: action.payload.value
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
