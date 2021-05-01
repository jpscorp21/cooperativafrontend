import { Box, FormControl, FormLabel, Grid, TextField } from '@material-ui/core'
import React from 'react'

const SociosHijos = () => {
    return (
    <>
        <Box>        
            <FormControl component="fieldset">
                <FormLabel component="legend" sx={{mb: 2, fontWeight: 'bolder', fontSize: '16px'}}>Datos de los hijos</FormLabel>
            </FormControl>
            <Grid container spacing={2}>
            Hijos
            </Grid>        
        </Box>
    </>
    )
}

export default SociosHijos
