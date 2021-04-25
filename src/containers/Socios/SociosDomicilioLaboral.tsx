
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core'
import React from 'react'

const SociosDomicilioLaboral = () => {
    return (
    <>
      <Box sx={{p:2, pt: 0}}>
        <form>
          <Grid container sx={{mt:2}}>
            <Grid item xs={8} sx={{mb:2}}>
              <TextField  fullWidth label="Calle y Número" name="calleyNumero" size="small" />
            </Grid>

            <Grid item xs={4} sx={{mb:2, mr: 2}}>
              <TextField  label="Ciudad" name="ciudad" size="small"/>
            </Grid>

            <Grid item xs={4} sx={{mb:2}}>
              <TextField   label="Barrio" name="barrio" size="small" />
            </Grid>

            <Grid item xs={4} sx={{mb:2, mr: 2}}>
              <TextField  label="Teléfono" name="telefono" size="small" />
            </Grid>

            <Grid item xs={4} sx={{mb:2}}>
              <TextField   label="Celular" name="celular" size="small"/>
            </Grid>

          </Grid>
        </form>
    </Box>
    </>
    )
}

export default SociosDomicilioLaboral
