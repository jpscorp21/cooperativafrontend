import { Box, Grid, Paper, TextField } from '@material-ui/core'
import React from 'react'
import { useForm } from 'react-hook-form';
import TituloContainer from '../../components/TituloContainer'

const SolicitudCreditoForm = () => {    

    return (
        <>
            <TituloContainer>Formulario Solicitud Crédito</TituloContainer>
            <Box sx={{px: 2}}>
            <Paper sx={{p: 2}}>
                <form>
                    <Grid sx={{mt:2}}>
                        <Grid item xs={12} sx={{mb:2}}>
                            <TextField fullWidth label="Buscar Socio" name="codigo" size="small" disabled />
                        </Grid>                        
                    </Grid>
                    <Grid sx={{mt: 2}}>
                        <Grid item xs={12} sx={{mb:2}}>
                            <TextField fullWidth label="Buscar Codeudor" name="codigo" size="small" />
                        </Grid>
                    </Grid>
                    <Grid sx={{mt: 2}}>
                        <Grid item xs={12} sx={{mb:2}}>
                            <TextField fullWidth label="Desembolso Crédito" name="codigo" size="small" />
                        </Grid>
                    </Grid>
                    <Grid sx={{mt: 2}}>
                        <Grid item xs={12} sx={{mb:2}}>
                            <TextField fullWidth label="Tipo Solicitud" name="codigo" size="small"  />
                        </Grid>
                    </Grid>
                    <Grid sx={{mt: 2}}>
                        <Grid item xs={12} sx={{mb:2}}>
                            <TextField fullWidth label="Tipo Garantía" name="codigo" size="small"  />
                        </Grid>
                    </Grid>
                    <Grid sx={{mt: 2}}>
                        <Grid item xs={12} sx={{mb:2}}>
                            <TextField fullWidth label="Tipo Crédito" name="codigo" size="small"  />
                        </Grid>
                    </Grid>
                    <Grid sx={{mt: 2}}>
                        <Grid item xs={12} sx={{mb:2}}>
                            <TextField fullWidth label="Importe" name="codigo" size="small"  />
                        </Grid> 
                    </Grid>
                    <Grid sx={{mt: 2}}>
                        <Grid item xs={12} sx={{mb:2}}>
                            <TextField fullWidth label="Plazo" name="codigo" size="small"  />
                        </Grid> 
                    </Grid>
                    <Grid sx={{mt: 2}}>
                        <Grid item xs={12} sx={{mb:2}}>
                            <TextField fullWidth label="Fecha Primer Pago" name="codigo" size="small"  />
                        </Grid> 
                    </Grid>
                    <Grid sx={{mt: 2}}>
                        <Grid item xs={12} sx={{mb:2}}>
                        <TextField fullWidth label="Observación" multiline name="observacion" size="small" rows={4}/>
                        </Grid> 
                    </Grid>
                    <Grid sx={{mt: 2}}>
                        <Grid item xs={12} sx={{mb:2}}>
                            <TextField fullWidth label="Total Capital" name="observacion" size="small" rows={4} disabled/>
                        </Grid> 
                    </Grid>
                    <Grid sx={{mt: 2}}>
                        <Grid item xs={12} sx={{mb:2}}>
                            <TextField fullWidth label="Total Interes" name="observacion" size="small" rows={4} disabled/>
                        </Grid> 
                    </Grid>
                    <Grid sx={{mt: 2}}>
                        <Grid item xs={12} sx={{mb:2}}>
                            <TextField fullWidth label="Total Gastos" name="observacion" size="small" rows={4} disabled/>
                        </Grid> 
                    </Grid>
                    <Grid sx={{mt: 2}}>
                        <Grid item xs={12} sx={{mb:2}}>
                            <TextField fullWidth label="Total" name="observacion" size="small" rows={4} disabled/>
                        </Grid> 
                    </Grid>
                </form>
            </Paper>
            </Box>
        </>
    )
}

export default SolicitudCreditoForm
