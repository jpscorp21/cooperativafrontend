import { Box, Button, FormControl, FormLabel, Grid } from '@material-ui/core'
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import DatePickerAdapter from '../../components/control/DatePickerAdapter'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'


const SociosHijos = () => {
    return (
    <>
        <Box>        
            <FormControl component="fieldset">
                <FormLabel component="legend" sx={{mb: 2, fontWeight: 'bolder', fontSize: '16px'}}>Datos de los hijos</FormLabel>
            </FormControl>
            
            <FieldArray name="hijos" subscription={{}}>
            {({fields}) => (
                <Grid container spacing={2}>
                    {fields.map((name) => (
                        <React.Fragment key={name}>
                            <Grid item xs={12} py={1}>                                
                                <Box width="100%" height="1px" bgcolor="#ccc">

                                </Box>
                            </Grid>  
                            <Grid item xs={6} md={3}>
                                <Field 
                                    fullWidth label="Nombre" 
                                    name={`${name}.nombre`} 
                                    component={TextFieldAdapter} 
                                />
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <Field 
                                    fullWidth 
                                    label="Apellido" 
                                    name={`${name}.apellido`} 
                                    component={TextFieldAdapter} 
                                />
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <Field 
                                    fullWidth 
                                    label="Cedula" 
                                    name={`${name}.cedula`} 
                                    component={TextFieldAdapter} 
                                />
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <Field 
                                    fullWidth 
                                    label="Fecha nacimiento" 
                                    name={`${name}.fechaNacimiento`} 
                                    component={DatePickerAdapter} 
                                />
                            </Grid>                                                        
                        </React.Fragment>                        
                    ))}
                    <Grid item xs={12}>                                
                        <Button 
                            variant="contained"
                            fullWidth
                            onClick={() => fields.push({nombre: '', apellido: '', cedula: '', fechaNacimiento: new Date().toISOString()})}>
                                Nuevo Hijo
                        </Button>
                    </Grid>
                </Grid>    
            )}
            </FieldArray>                   
        </Box>
    </>
    )
}

export default SociosHijos
