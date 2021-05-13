
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@material-ui/core'
import { useMemo } from 'react';
import { Field } from 'react-final-form'
import RadioGroupAdapter from '../../components/control/RadioGroupAdapter';
import TextFieldAdapter from '../../components/control/TextFieldAdapter'

const SociosCorrespondencia = () => {

    const correpondencias = useMemo(() => [ 
      {id: 'particular', descripcion: 'Particular'}, 
      {id: 'laboral', descripcion: 'Laboral'},       
    ], []);

    return (
      <>
        <Box>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{mb: 2, fontWeight: 'bolder', fontSize: '16px'}}>Datos de la correspondencia</FormLabel>
          </FormControl>
          <Grid container>
            <Grid item xs={12} sx={{mb:2}}>
              <Field                
                name="correspondencia"
                label="Correspondencia"
                fullWidth                                 
                optionvalue="id"
                optionlabel="descripcion"                
                options={correpondencias}                
                component={RadioGroupAdapter}
              />                            
            </Grid>

            <Grid item xs={6} sx={{mb:2, mr: 2}}>
              <Field fullWidth label="Otro (Especificar)" name="correspondencia" component={TextFieldAdapter}/>
            </Grid>
          </Grid>        
      </Box>
    </>
    )
}

export default SociosCorrespondencia
