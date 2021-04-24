import { Box, Grid, Paper, TextField } from '@material-ui/core'
import React from 'react'
import TituloContainer from '../../components/TituloContainer'

const CobranzasForm = () => {
    return (
        <>
            <TituloContainer>Formulario Cobranza</TituloContainer>  

            <Box sx={{px: 2}}>
            <Paper sx={{p: 2}}>
                <form>
                    <Grid sx={{mt:2}}>
                        <Grid item xs={6} sx={{mb:2}}>
                            <TextField fullWidth label="Nro Factura" name="codigo" size="small" />
                        </Grid>                        
                        <Grid item xs={6} sx={{mb:2}}>
                            <TextField fullWidth label="Fecha" name="codigo" size="small" />
                        </Grid>                        
                    </Grid>
                    <Grid sx={{mt: 2}}>
                        <Grid item xs={12} sx={{mb:2}}>
                            <TextField fullWidth label="Buscar Socio" name="codigo" size="small" />
                        </Grid>
                    </Grid>                    
                </form>
            </Paper>
            </Box>          
        </>
    )
}

export default CobranzasForm
