
import { Box, FormControl, FormLabel, Grid } from '@material-ui/core'
import React from 'react'
import { Field } from 'react-final-form'
import DatePickerAdapter from '../../components/control/DatePickerAdapter'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'

const SociosDatosConyugue = () => {
    return (
    <>
      <Box>
        
          <FormControl component="fieldset">
                <FormLabel component="legend" sx={{mb: 2, fontWeight: 'bolder', fontSize: '16px'}}>Datos del conyugue</FormLabel>
          </FormControl>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field 
                fullWidth 
                label="Nombre" 
                name="conyugue.nombre"
                component={TextFieldAdapter}
              />                            
            </Grid>

            <Grid item xs={12} sm={6}>
              <Field 
                fullWidth 
                label="Apellido" 
                name="conyugue.apellido"
                component={TextFieldAdapter}
              />              
            </Grid>

            <Grid item xs={12} sm={6}>
              <Field 
                fullWidth 
                label="Doc. Identidad" 
                name="conyugue.cedula"
                component={TextFieldAdapter}
              />              
            </Grid>

            <Grid item xs={12} sm={6}>
              <Field 
                fullWidth 
                label="Fecha nacimiento" 
                name="conyugue.fechaNacimiento"
                component={DatePickerAdapter}                                  
              />                      
            </Grid>

            <Grid item sm={12}>
            <Field 
                fullWidth 
                label="Dirección" 
                name="conyugue.lugar"
                component={TextFieldAdapter}
              />              
            </Grid>
          </Grid>        
      </Box>
    </>
    )
}

export default SociosDatosConyugue
