
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core'
import React from 'react'

const SociosCorrespondencia = () => {
    return (
      <>
        <Box sx={{p:2, pt: 0}}>
        <form>
          <Grid container sx={{mt:2}}>
            <Grid item xs={12} sx={{mb:2}}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Recibo mi correspondencia en mi Domicilio</FormLabel>
                  <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="particular">
                    <FormControlLabel value="particular" control={<Radio />} label="Particular" />
                    <FormControlLabel value="laboral" control={<Radio />} label="Laboral" />
                  </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={4} sx={{mb:2, mr: 2}}>
            <TextField  label="Otro (Especificar)" name="otro" size="small"/>
            </Grid>

          </Grid>
        </form>
      </Box>
    </>
    )
}

export default SociosCorrespondencia
