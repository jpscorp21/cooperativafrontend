
import { Box, Grid, TextField } from '@material-ui/core'
import React from 'react'

const SociosDatosConyugue = () => {
    return (
    <>
      <Box sx={{p:2, pt: 0}}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth  label="Nombre" name="nombre" size="small" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth  label="Apellido" name="apellido" size="small"/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth   label="Doc. Identidad" name="cedula" size="small" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth  label="Fecha Nacimiento" name="fechaNacimiento" size="small" />
            </Grid>

            <Grid item sm={12}>
              <TextField fullWidth  label="Dirección" name="direccionParticular" size="small" />
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
    )
}

export default SociosDatosConyugue
