import { Grid, Paper, TextField } from "@material-ui/core";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Container } from "./styles";

export default function Form() {
  const methods = useForm();
  const { handleSubmit, control, reset } = methods;
  const onSubmit = data => console.log(data);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Change cep React</h1>
        <Paper>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Controller
                fullWidth
                as={TextField}
                name="TextField"
                variant="outlined"
                label="Cep"
                control={control}
                defaultValue=""
              />
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
              <Controller
                fullWidth
                as={TextField}
                name="TextField"
                variant="outlined"
                label="Logradouro"
                control={control}
                defaultValue=""
              />
            </Grid>
            <Grid item>
              <Controller
                as={TextField}
                name="TextField"
                variant="outlined"
                control={control}
                defaultValue=""
              />
            </Grid>
            <Grid item>
              <Controller
                as={TextField}
                name="TextField"
                variant="outlined"
                control={control}
                defaultValue=""
              />
            </Grid>
            <Grid item>
              <Controller
                as={TextField}
                name="TextField"
                variant="outlined"
                control={control}
                defaultValue=""
              />
            </Grid>
            <Grid item>
              <Controller
                as={TextField}
                name="TextField"
                variant="outlined"
                control={control}
                defaultValue=""
              />
            </Grid>
            <Grid item>
              <Controller
                as={TextField}
                name="TextField"
                variant="outlined"
                control={control}
                defaultValue=""
              />
            </Grid>
            <Grid item>
              <Controller
                as={TextField}
                name="TextField"
                variant="outlined"
                control={control}
                defaultValue=""
              />
            </Grid>
            <Grid item>
              <Controller
                as={TextField}
                name="TextField"
                variant="outlined"
                control={control}
                defaultValue=""
              />
            </Grid>
          </Grid>
        </Paper>
        <button>Submit</button>
      </form>
    </Container>
  );
}
