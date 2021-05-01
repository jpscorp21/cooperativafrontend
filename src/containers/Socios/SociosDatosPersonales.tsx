import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core'
import React from 'react'
import { Field } from 'react-final-form'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'
import { required } from '../../utils/errorMessages'

const SociosDatosPersonales = () => {
    return (
        <>
            <Box>
                
                <FormControl component="fieldset">
                    <FormLabel component="legend" sx={{mb: 2, fontWeight: 'bolder', fontSize: '16px'}}>Datos personales</FormLabel>
                </FormControl>
              
                    <Grid container spacing={2}>                        
                        <Grid item xs={12} sm={6}>
                            <Field 
                                fullWidth  
                                validate={required}
                                component={TextFieldAdapter}
                                label="Nombre*" 
                                name="nombre" 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field 
                                fullWidth  
                                validate={required}
                                component={TextFieldAdapter}
                                label="Apellido*" 
                                name="apellido"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field 
                                fullWidth  
                                validate={required}
                                component={TextFieldAdapter}
                                label="Doc.Cédula*" 
                                name="cedula"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field fullWidth component={TextFieldAdapter} label="RUC" name="ruc"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field 
                                validate={required} 
                                component={TextFieldAdapter} 
                                fullWidth  
                                label="Estado Civil*" 
                                name="estadoCivilId"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field 
                                fullWidth 
                                validate={required} 
                                component={TextFieldAdapter}  
                                label="Fecha Nacimiento*" 
                                name="fechaNacimiento"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Field 
                                fullWidth 
                                validate={required} 
                                component={TextFieldAdapter}  
                                label="Dirección*" 
                                name="lugar" 
                            />
                        </Grid>
                        
                        <Grid item xs={12} sm={12}>
                            <FormControl component="fieldset">
                            <FormLabel component="legend">Género*</FormLabel>
                            <RadioGroup row aria-label="gender" name="genero" defaultValue="masculino">
                            <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                            <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
                            <FormControlLabel value="otros" control={<Radio />} label="Otros" />
                            </RadioGroup>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Field 
                                fullWidth  
                                validate={required} 
                                component={TextFieldAdapter}  
                                label="Nacionalidad*" 
                                name="nacionalidadId" 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field 
                                fullWidth                                   
                                component={TextFieldAdapter}  
                                label="Grado Académico" 
                                name="gradoAcademico"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Field 
                                fullWidth                                 
                                component={TextFieldAdapter}  
                                label="Motivos" 
                                multiline 
                                name="motivo" 
                                rows={4}
                            />
                        </Grid>
                    </Grid>                                    
            </Box>
        </>
    )
}

export default SociosDatosPersonales
