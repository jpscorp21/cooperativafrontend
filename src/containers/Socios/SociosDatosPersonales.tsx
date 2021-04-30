import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core'
import React from 'react'

const SociosDatosPersonales = () => {
    return (
        <>
            <Box sx={{pt: 1}}>
                <form> 
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth label="Numero Socio" name="numero-socio" size="small" />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth  label="Nombre*" name="nombre" size="small"/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth  label="Apellido*" name="apellido" size="small"/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth  label="Doc.Cédula*" name="cedula" size="small"/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth  label="RUC" name="ruc" size="small"/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth  label="Estado Civil*" name="estado-civil" size="small"/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth  label="Fecha Nacimiento*" name="fecha-nac" size="small"/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth label="Dirección*" name="direccion" size="small" />
                        </Grid>
                        
                        <Grid item xs={12} sm={12}>
                            <FormControl component="fieldset">
                            <FormLabel component="legend">Género*</FormLabel>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="masculino">
                            <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                            <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
                            <FormControlLabel value="otros" control={<Radio />} label="Otros" />
                            </RadioGroup>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth  label="Nacionalidad" name="nacionalidad" size="small" />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth   label="Grado Académico" name="gradoAcademico" size="small"/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField fullWidth label="Motivos" multiline name="motivos" size="small" rows={4}/>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </>
    )
}

export default SociosDatosPersonales
