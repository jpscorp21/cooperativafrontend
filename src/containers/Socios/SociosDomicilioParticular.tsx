import { Box, FormControl, FormLabel, Grid } from '@material-ui/core'
import { Field } from 'react-final-form'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'

const SociosHijos = () => {
    return (
    <>
        <Box>        
            <FormControl component="fieldset">
                <FormLabel component="legend" sx={{mb: 2, fontWeight: 'bolder', fontSize: '16px'}}>Datos del domicilio particular</FormLabel>
            </FormControl>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>                    
                    <Field 
                        fullWidth 
                        label="Calle Y Número" 
                        name="direccionParticular.calleYNumero" 
                        component={TextFieldAdapter}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field 
                        fullWidth 
                        label="Ciudad" 
                        name="direccionParticular.ciudadId" 
                        component={TextFieldAdapter}
                    />                    
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field 
                        fullWidth 
                        label="Barrio" 
                        name="direccionParticular.barrioId" 
                        component={TextFieldAdapter}
                    />                    
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field 
                        fullWidth 
                        label="Teléfono" 
                        name="direccionParticular.telefono" 
                        component={TextFieldAdapter}
                    />                    
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field 
                        fullWidth 
                        label="Celular" 
                        name="direccionParticular.celular" 
                        component={TextFieldAdapter}
                    />                                        
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field  
                        fullWidth 
                        label="Correo" 
                        name="direccionParticular.correo" 
                        component={TextFieldAdapter}
                    />                                        
                </Grid>
            </Grid>        
        </Box>
    </>
    )
}

export default SociosHijos
