
import { Box, FormControl, FormLabel, Grid, TextField } from '@material-ui/core'
import React from 'react'

const SociosDatosConyugue = () => {
    return (
    <>
      <Box>
        
          <FormControl component="fieldset">
                <FormLabel component="legend" sx={{mb: 2, fontWeight: 'bolder', fontSize: '16px'}}>Datos del conyugue</FormLabel>
          </FormControl>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Nombre" name="nombre" size="small" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Apellido" name="apellido" size="small"/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth  label="Doc. Identidad" name="cedula" size="small" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Fecha Nacimiento" name="fechaNacimiento" size="small" />
            </Grid>

            <Grid item sm={12}>
              <TextField fullWidth label="Dirección" name="lugar" size="small" />
            </Grid>
          </Grid>        
      </Box>
    </>
    )
}

export default SociosDatosConyugue
