import { Box, FormControl, FormLabel, Grid } from '@material-ui/core'
import { Field } from 'react-final-form'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'

const SociosUbicacion = () => {
    return (        

        <Box>
            <FormControl component="fieldset">
                <FormLabel component="legend" sx={{mb: 2, fontWeight: 'bolder', fontSize: '16px'}}>Datos de la ubicación</FormLabel>
            </FormControl>
            <Grid container spacing={2} sx={{mb: 2}}>
                <Grid item xs={6}>
                    <Field 
                        fullWidth                          
                        component={TextFieldAdapter}  
                        label="Latitud" 
                        name="latitud" 
                    />                    
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Field 
                        fullWidth                          
                        component={TextFieldAdapter}  
                        label="Longitud" 
                        name="longitud" 
                    />                
                </Grid>
            </Grid>
        
        </Box>
    )
}

export default SociosUbicacion
