
import { Box, FormControl, FormLabel, Grid } from '@material-ui/core'
import { Field, useForm, useFormState } from 'react-final-form'
import SelectAdapter from '../../components/control/SelectAdapter'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'

type SociosDomicilioLaboralProps = {
  ciudades: any[];
  barrios: any[];
  changeCiudad(id: any): void;
}

const SociosDomicilioLaboral = ({ciudades, barrios, changeCiudad}: SociosDomicilioLaboralProps) => {

  const {values} = useFormState();
  const {change} = useForm();

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
              name="domicilioLaboral.ciudadId"             
              label="Ciudad"                                                                     
              options={ciudades}                        
              optionlabel="descripcion"
              optionvalue="id"
              component={SelectAdapter}
              onChange={(event: any) => {                            
                changeCiudad(event.target.value);                            
                change('domicilioLaboral.ciudadId', event.target.value)
                change('domicilioLaboral.barrioId', null)
            }}
            />          
          </Grid>

          <Grid item xs={12} sm={6}>
            <Field 
              fullWidth 
              label="Barrio" 
              name="domicilioLaboral.barrioId" 
              options={barrios}  
              optionlabel="descripcion"
              optionvalue="id"
              component={SelectAdapter}
              disabled={!values?.domicilioLaboral?.ciudadId}
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
