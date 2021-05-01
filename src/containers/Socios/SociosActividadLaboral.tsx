
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core'
import React from 'react'

const SociosActividadLaboral = () => {
    return (
    <>
      <Box>
        <FormControl component="fieldset">
                <FormLabel component="legend" sx={{mb: 2, fontWeight: 'bolder', fontSize: '16px'}}>Datos de la actividad laboral</FormLabel>
            </FormControl>
          <Grid container>
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
              {/* <FormControl component="fieldset">
                <FormLabel component="legend">Posee Otros Ingresos</FormLabel>
                  <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="si">
                    <FormControlLabel value="si" control={<Radio />} label="Sí" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
              </FormControl> */}
            </Grid>
          </Grid>        
      </Box>
    </>
    )
}

export default SociosActividadLaboral
