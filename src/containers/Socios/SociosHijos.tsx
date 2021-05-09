import { Box, FormControl, FormLabel, Grid } from '@material-ui/core'
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'


const SociosHijos = () => {
    return (
    <>
        <Box>        
            <FormControl component="fieldset">
                <FormLabel component="legend" sx={{mb: 2, fontWeight: 'bolder', fontSize: '16px'}}>Datos de los hijos</FormLabel>
            </FormControl>
            
            <FieldArray name="hijos">
            {({fields}) => (
                <Grid container spacing={2}>
                    {fields.map((name, index) => (
                        <React.Fragment key={name}>
                            <Grid item xs={12}>
                                <Field fullWidth label="Nombre" name={`${name}.nombre`} component={TextFieldAdapter} />
                            </Grid>
                            <Grid item xs={12}>
                                <Field fullWidth label="Apellido" name={`${name}.apellido`} component={TextFieldAdapter} />
                            </Grid>
                            <Grid item xs={12}>
                                <Field fullWidth label="Cedula" name={`${name}.cedula`} component={TextFieldAdapter} />
                            </Grid>
                            <Grid item xs={12}>
                                <Field fullWidth label="Fecha nacimiento" name={`${name}.fechaNacimiento`} component={TextFieldAdapter} />
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>    
            )}
            </FieldArray>                   
        </Box>
    </>
    )
}

export default SociosHijos
