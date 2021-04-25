
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core'
import React from 'react'

const SociosDomicilioLaboral = () => {
    return (
    <>
      <Box sx={{p:2, pt: 0}}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <TextField  fullWidth label="Calle y Número" name="calleyNumero" size="small" />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField fullWidth  label="Ciudad" name="ciudad" size="small"/>
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField fullWidth   label="Barrio" name="barrio" size="small" />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField fullWidth  label="Teléfono" name="telefono" size="small" />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField fullWidth  label="Celular" name="celular" size="small"/>
            </Grid>

          </Grid>
        </form>
    </Box>
    </>
    )
}

export default SociosDomicilioLaboral
