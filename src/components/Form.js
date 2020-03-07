import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useFormChange } from "./hooks";
import { Container } from "./styles";

export default function Form() {
  const submitForm = () => {
    alert(`O endereço salvo foi:
    Cep: ${inputs.cep} 
    Tipo de endereço: ${inputs.tipoEndereco}
    Endereço nome: ${inputs.enderecoNome}
    Logradouro: ${inputs.logradouro}
    Número: ${inputs.numero}
    Bairro: ${inputs.bairro}
    Cidade: ${inputs.cidade}
    Uf: ${inputs.uf}
    Código IBGE: ${inputs.ibge}
    Complemento: ${inputs.complemento}
    DDD: ${inputs.ddd}
    Latitude: ${inputs.latitude}
    Longitude: ${inputs.longitude}
    `);
    console.log(`O endereço salvo foi:
    Cep: ${inputs.cep} 
    Tipo de endereço: ${inputs.tipoEndereco}
    Endereço nome: ${inputs.enderecoNome}
    Logradouro: ${inputs.logradouro}
    Número: ${inputs.numero}
    Bairro: ${inputs.bairro}
    Cidade: ${inputs.cidade}
    Uf: ${inputs.uf}
    Código IBGE: ${inputs.ibge}
    Complemento: ${inputs.complemento}
    DDD: ${inputs.ddd}
    Latitude: ${inputs.latitude}
    Longitude: ${inputs.longitude}
    `);
  };
  const { inputs, handleInputChange, handleSubmit } = useFormChange(submitForm);
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Paper className="paper">
          <Typography variant="h2" align="center">
            Change cep React
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <TextField
                fullWidth
                variant="outlined"
                label="Cep"
                name="cep"
                onChange={handleInputChange}
                value={inputs.cep}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <TextField
                fullWidth
                variant="outlined"
                label="Tipo endereço"
                name="tipoEndereco"
                onChange={handleInputChange}
                value={inputs.tipoEndereco}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                fullWidth
                name="enderecoNome"
                variant="outlined"
                label="Endereço nome"
                onChange={handleInputChange}
                value={inputs.enderecoNome}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
              <TextField
                fullWidth
                name="logradouro"
                variant="outlined"
                label="Logradouro"
                onChange={handleInputChange}
                value={inputs.logradouro}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
              <TextField
                fullWidth
                name="numero"
                variant="outlined"
                label="Número"
                onChange={handleInputChange}
                value={inputs.numero}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <TextField
                name="bairro"
                variant="outlined"
                label="Bairro"
                fullWidth
                onChange={handleInputChange}
                value={inputs.bairro}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <TextField
                name="cidade"
                variant="outlined"
                label="Cidade"
                fullWidth
                onChange={handleInputChange}
                value={inputs.cidade}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
              <TextField
                name="uf"
                variant="outlined"
                label="UF"
                fullWidth
                onChange={handleInputChange}
                value={inputs.uf}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
              <TextField
                name="ibge"
                variant="outlined"
                fullWidth
                label="Código IBGE"
                onChange={handleInputChange}
                value={inputs.ibge}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                name="complemento"
                variant="outlined"
                label="Complemento"
                fullWidth
                onChange={handleInputChange}
                value={inputs.complemento}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
              <TextField
                name="ddd"
                variant="outlined"
                fullWidth
                label="DDD"
                onChange={handleInputChange}
                value={inputs.ddd}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
              <TextField
                name="latitude"
                variant="outlined"
                fullWidth
                label="Latitude"
                onChange={handleInputChange}
                value={inputs.latitude}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
              <TextField
                name="longitude"
                variant="outlined"
                fullWidth
                label="Logitude"
                onChange={handleInputChange}
                value={inputs.longitude}
              />
            </Grid>
          </Grid>
          <Button onClick={submitForm} type="submit" className="button__salvar">
            Salvar
          </Button>
        </Paper>
      </form>
    </Container>
  );
}
