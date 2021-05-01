import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core'
import React from 'react'

const SociosDatosPersonales = () => {
    return (
        <>
            <Box>
                
                <FormControl component="fieldset">
                    <FormLabel component="legend" sx={{mb: 2, fontWeight: 'bolder', fontSize: '16px'}}>Datos personales</FormLabel>
                </FormControl>
              
                    <Grid container spacing={2}>                        
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth  label="Nombre*" name="nombre" size="small"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth  label="Apellido*" name="apellido" size="small"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth  label="Doc.Cédula*" name="cedula" size="small"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth  label="RUC" name="ruc" size="small"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth  label="Estado Civil*" name="estadoCivilId" size="small"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth  label="Fecha Nacimiento*" name="fechaNacimiento" size="small"/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField fullWidth label="Dirección*" name="lugar" size="small" />
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
                            <TextField fullWidth  label="Nacionalidad*" name="nacionalidadId" size="small" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth   label="Grado Académico" name="gradoAcademico" size="small"/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField fullWidth label="Motivos" multiline name="motivo" size="small" rows={4}/>
                        </Grid>
                    </Grid>                                    
            </Box>
        </>
    )
}

export default SociosDatosPersonales
