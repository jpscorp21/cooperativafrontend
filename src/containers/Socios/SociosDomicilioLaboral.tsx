
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core'
import React from 'react'

const SociosDomicilioLaboral = () => {
    return (
    <>
      <Box>
        <FormControl component="fieldset">
          <FormLabel component="legend" sx={{my: 2, fontWeight: 'bolder', fontSize: '16px'}}>Datos del domicilio laboral</FormLabel>
        </FormControl> 
              
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
        
      </Box>
    </>
    )
}

export default SociosDomicilioLaboral
