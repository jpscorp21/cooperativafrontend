
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core'
import React from 'react'

const SociosActividadLaboral = () => {
    return (
    <>
      <Box>
        <FormControl component="fieldset">
                <FormLabel component="legend" sx={{mb: 2, fontWeight: 'bolder', fontSize: '16px'}}>Datos de la actividad laboral</FormLabel>
            </FormControl>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Es Empleado</FormLabel>
                  <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="si">
                    <FormControlLabel value="si" control={<Radio />} label="Sí" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Antiguedad" name="antiguedad" size="small"/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Nombre empresa" name="nombreEmpresa" size="small"/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Profesión" name="profesionId" size="small"/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Puesto que ocupa" name="puestoLaboralId" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField fullWidth label="Actividad laboral" name="actividadEmpresa" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField fullWidth label="Ingreso Mensual" name="ingresoMensual" size="small"/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Posee Otros Ingresos</FormLabel>
                  <RadioGroup row aria-label="gender" name="otroIngreso" defaultValue={'true'}>
                    <FormControlLabel value={'true'} control={<Radio />} label="Sí" />
                    <FormControlLabel value={'false'} control={<Radio />} label="No" />
                  </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Monto" name="otroMonto" size="small"/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Concepto" name="otroConcepto" size="small"/>
            </Grid>
          </Grid>        
      </Box>
    </>
    )
}

export default SociosActividadLaboral
