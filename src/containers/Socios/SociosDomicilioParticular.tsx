import { Box, FormControl, FormLabel, Grid, TextField } from '@material-ui/core'

const SociosHijos = () => {
    return (
    <>
        <Box>        
            <FormControl component="fieldset">
                <FormLabel component="legend" sx={{mb: 2, fontWeight: 'bolder', fontSize: '16px'}}>Datos del domicilio particular</FormLabel>
            </FormControl>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <TextField fullWidth label="Calle Y Número*" name="calleYNumero" size="small"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Ciudad" name="ciudadId" size="small"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Barrio" name="barrioId" size="small"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Teléfono" name="telefono" size="small"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Celular" name="celular" size="small"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Correo" name="correo" size="small"/>
                </Grid>
            </Grid>        
        </Box>
    </>
    )
}

export default SociosHijos
