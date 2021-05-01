
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core'
import React from 'react'

const SociosCorrespondencia = () => {
    return (
      <>
        <Box>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{mb: 2, fontWeight: 'bolder', fontSize: '16px'}}>Datos de la correspondencia</FormLabel>
          </FormControl>
          <Grid container>
            <Grid item xs={12} sx={{mb:2}}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Recibo mi correspondencia en mi Domicilio</FormLabel>
                  <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="particular">
                    <FormControlLabel value="particular" control={<Radio />} label="Particular" />
                    <FormControlLabel value="laboral" control={<Radio />} label="Laboral" />
                  </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={6} sx={{mb:2, mr: 2}}>
              <TextField fullWidth label="Otro (Especificar)" name="otro" size="small"/>
            </Grid>
          </Grid>        
      </Box>
    </>
    )
}

export default SociosCorrespondencia
