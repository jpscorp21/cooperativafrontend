
import { Box, FormControl, FormLabel, Grid } from '@material-ui/core'
import { Field } from 'react-final-form'
import SelectAdapter from '../../components/control/SelectAdapter'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'

type SociosDomicilioLaboralProps = {
  ciudades: any[];
  barrios: any[];
}

const SociosDomicilioLaboral = ({ciudades, barrios}: SociosDomicilioLaboralProps) => {
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
              name="direccionParticular.ciudadId"             
              label="Ciudad"                                                                     
              options={ciudades}                        
              optionlabel="descripcion"
              optionvalue="id"
              component={SelectAdapter}
            />          
          </Grid>

          <Grid item xs={12} sm={6}>
            <Field 
              fullWidth 
              label="Barrio" 
              name="direccionParticular.barrioId" 
              options={barrios}  
              optionlabel="descripcion"
              optionvalue="id"
              component={SelectAdapter}
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
