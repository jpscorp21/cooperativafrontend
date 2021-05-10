import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@material-ui/core'
import { Field } from 'react-final-form'
import SelectAdapter from '../../components/control/SelectAdapter'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'
import { required } from '../../utils/errorMessages'

type SociosDatosPersonalesProps = {
    estadosCiviles: any[];
    nacionalidades: any[];
}

const SociosDatosPersonales = ({estadosCiviles, nacionalidades}: SociosDatosPersonalesProps) => {
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
                                label="Doc. cédula*" 
                                name="cedula"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field fullWidth component={TextFieldAdapter} label="RUC" name="ruc"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field 
                                fullWidth                         
                                name="estadoCivilId"             
                                label="Estado civil"                                             
                                validate={required}  
                                options={estadosCiviles}                        
                                optionlabel="descripcion"
                                optionvalue="id"
                                component={SelectAdapter}
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
                                name="nacionalidadId"             
                                label="Nacionalidad*"                                             
                                validate={required}  
                                options={nacionalidades}                        
                                optionlabel="descripcion"
                                optionvalue="id"
                                component={SelectAdapter}
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
