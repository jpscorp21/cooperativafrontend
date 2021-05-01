
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
          <Grid item xs={12} sm={12}>
            <TextField  fullWidth label="Calle y Número" name="calleYNumero" size="small" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Ciudad" name="ciudadId" size="small"/>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Barrio" name="barrioId" size="small" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Teléfono" name="telefono" size="small" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Celular" name="celular" size="small"/>
          </Grid>
        </Grid>
        
      </Box>
    </>
    )
}

export default SociosDomicilioLaboral
