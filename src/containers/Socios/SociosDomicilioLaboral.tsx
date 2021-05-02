
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core'
import React from 'react'
import { Field } from 'react-final-form'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'

const SociosDomicilioLaboral = () => {
    return (
    <>
      <Box>
        <FormControl component="fieldset">
          <FormLabel component="legend" sx={{my: 2, fontWeight: 'bolder', fontSize: '16px'}}>Datos del domicilio laboral</FormLabel>
        </FormControl> 
              
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Field
               fullWidth
               label="Calle y Número"
               name="domicilioLaboral.calleYNumero"
               component={TextFieldAdapter}
            />            
          </Grid>

          <Grid item xs={12} sm={6}>
            <Field
               fullWidth
               label="Ciudad"
               name="domicilioLaboral.ciudadId"
               component={TextFieldAdapter}
            />            
          </Grid>

          <Grid item xs={12} sm={6}>
            <Field
               fullWidth
               label="Barrio"
               name="domicilioLaboral.barrioId"
               component={TextFieldAdapter}
            />            
          </Grid>

          <Grid item xs={12} sm={6}>
            <Field
               fullWidth
               label="Teléfono"
               name="domicilioLaboral.telefono"
               component={TextFieldAdapter}
            />            
          </Grid>

          <Grid item xs={12} sm={6}>
            <Field
               fullWidth
               label="Celular"
               name="domicilioLaboral.celular"
               component={TextFieldAdapter}
            />            
          </Grid>
        </Grid>
        
      </Box>
    </>
    )
}

export default SociosDomicilioLaboral
