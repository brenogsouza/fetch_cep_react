import {
  Backdrop,
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useReducer, useRef, useState } from "react";
import CepApi from "../api/cepApi";
import { handleCepMask } from "../utils/cepMask";
import { Container } from "./styles";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

export default function Form() {
  const [cep, setCep] = useState("");
  const [endereco, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

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
          {loading && (
            <>
              <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
              </Backdrop>
            </>
          )}
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
          {[
            {
              label: "Logradouro",
              xs: 12,
              sm: 12,
              md: 5,
              lg: 5,
              xl: 5,
              name: "address",
              fullWidth: true
            },
            {
              label: "Número",
              xs: 12,
              sm: 12,
              md: 5,
              lg: 5,
              xl: 5,
              name: "number",
              fullWidth: true,
              inputRef: numberField
            },
            {
              label: "Bairro",
              xs: 12,
              sm: 12,
              md: 5,
              lg: 5,
              xl: 5,
              name: "district",
              fullWidth: true
            },
            {
              label: "Cidade",
              xs: 12,
              sm: 12,
              md: 5,
              lg: 5,
              xl: 5,
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
              md: 12,
              lg: 12,
              xl: 12,
              name: "complement",
              fullWidth: true
            }
          ].map(field => (
            <Grid
              item
              xs={field.xs}
              sm={field.sm}
              md={field.md}
              lg={field.lg}
              xl={field.xl}
            >
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
