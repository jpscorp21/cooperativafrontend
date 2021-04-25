
import { Box, Grid, TextField } from '@material-ui/core'
import React from 'react'

const SociosDatosConyugue = () => {
    return (
    <>
      <Box sx={{p:2, pt: 0}}>
        <form>
          <Grid container sx={{mt:2}}>
            <Grid item xs={4} sx={{mb:2}}>
              <TextField  label="Nombre" name="nombre" size="small" />
            </Grid>

            <Grid item xs={4} sx={{mb:2, mr: 2}}>
              <TextField  label="Apellido" name="apellido" size="small"/>
            </Grid>

            <Grid item xs={4} sx={{mb:2}}>
              <TextField   label="Doc. Identidad" name="cedula" size="small" />
            </Grid>

            <Grid item xs={4} sx={{mb:2, mr: 2}}>
              <TextField  label="Fecha Nacimiento" name="fechaNacimiento" size="small" />
            </Grid>

            <Grid item xs={8} sx={{mb:2}}>
              <TextField  fullWidth label="Dirección" name="direccionParticular" size="small" />
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
    )
}

export default SociosDatosConyugue
