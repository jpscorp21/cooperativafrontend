import { Box, FormControl, FormLabel, Grid, TextField } from '@material-ui/core'
import React from 'react'

const SociosUbicacion = () => {
    return (        

        <Box>
            <FormControl component="fieldset">
                <FormLabel component="legend" sx={{mb: 2, fontWeight: 'bolder', fontSize: '16px'}}>Datos de la ubicación</FormLabel>
            </FormControl>
            <Grid container spacing={2} sx={{mb: 2}}>
                <Grid item xs={6}>
                    <TextField fullWidth label="Latitud" name="latitud" size="small"/>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField fullWidth label="Longitud" name="longitud" size="small"/>
                </Grid>
            </Grid>
        
        </Box>
    )
}

export default SociosUbicacion
