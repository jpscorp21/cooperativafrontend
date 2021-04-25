
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core'
import React from 'react'

const SociosActividadLaboral = () => {
    return (
    <>
      <Box sx={{p:2, pt: 0}}>
        <form>
          <Grid container sx={{mt:2}}>
            <Grid item xs={12} sx={{mb:2}}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Es Empleado</FormLabel>
                  <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="si">
                    <FormControlLabel value="si" control={<Radio />} label="Sí" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={4} sx={{mb:2, mr: 2}}>
              <TextField  label="Ingreso Mensual" name="ingresoMensual" size="small"/>
            </Grid>

            <Grid item xs={12} sx={{mb:2}}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Posee Otros Ingresos</FormLabel>
                  <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="si">
                    <FormControlLabel value="si" control={<Radio />} label="Sí" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
    )
}

export default SociosActividadLaboral
