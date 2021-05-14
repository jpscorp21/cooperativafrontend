import { Box, FormControl, FormLabel, Grid } from '@material-ui/core'
import { useMemo } from 'react'
import { Field } from 'react-final-form'
import DatePickerAdapter from '../../components/control/DatePickerAdapter'
import RadioGroupAdapter from '../../components/control/RadioGroupAdapter'
import SelectAdapter from '../../components/control/SelectAdapter'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'
import { required } from '../../utils/errorMessages'

type SociosDatosPersonalesProps = {
    estadosCiviles: any[];
    nacionalidades: any[];
}

const SociosDatosPersonales = ({estadosCiviles, nacionalidades}: SociosDatosPersonalesProps) => {

    const generos = useMemo(() => [ 
        {id: 'M', descripcion: 'Masculino'}, 
        {id: 'F', descripcion: 'Femenino'}, 
        {id: 'O', descripcion: 'Otros'}
    ], []);

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
                                label="Estado civil*"                                             
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
                                component={DatePickerAdapter}                                  
                                name="fechaNacimiento"
                                label="hola"
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
                            <Field 
                                type="text"
                                fullWidth 
                                label="Género*" 
                                name="genero" 
                                validate={required} 
                                component={RadioGroupAdapter}
                                optionvalue="id"
                                optionlabel="descripcion"
                                defaultValue="F"
                                options={generos}
                                // render={({input}) => (
                                //     <FormControl component="fieldset">
                                //         <FormLabel component="legend">Género*</FormLabel>
                                //         <RadioGroup row aria-label="gender" onChange={input.onChange} name="genero" defaultValue="masculino">
                                //             <FormControlLabel value="M" checked={input.value === 'M'} control={<Radio />} label="Masculino" />
                                //             <FormControlLabel value="F" checked={input.value === 'F'} control={<Radio />} label="Femenino" />
                                //             <FormControlLabel value="O" checked={input.value === 'O'} control={<Radio />} label="Otros" />
                                //             <FormControlLabel value="O" checked={input.value === 'O'} control={<Radio />} label="Otros" />
                                //             <FormControlLabel value="O" checked={input.value === 'O'} control={<Radio />} label="Otros" />
                                //             <FormControlLabel value="O" checked={input.value === 'O'} control={<Radio />} label="Otros" />
                                //         </RadioGroup>
                                //     </FormControl>
                                // )}  
                            />
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
