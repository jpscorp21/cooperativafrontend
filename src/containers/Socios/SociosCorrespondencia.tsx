
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@material-ui/core'
import { Field } from 'react-final-form'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'

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
                  <RadioGroup row aria-label="gender" name="correspondencia" defaultValue="particular">
                    <FormControlLabel value="particular" control={<Radio />} label="Particular" />
                    <FormControlLabel value="laboral" control={<Radio />} label="Laboral" />
                  </RadioGroup>
              </FormControl>
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
