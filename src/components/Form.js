import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Container } from "./styles";

export default function Form() {
  const [cep, setCep] = useState("");

  const handleChangeCep = e => {
    setCep(cepMask(e.target.value));
  };

  const cepMask = value => {
    return value
      .replace(/\D+/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");
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
