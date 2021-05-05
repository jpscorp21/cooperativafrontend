import { Dialog, Paper, Typography, Grid, TextField, Box, Button, Checkbox, FormControlLabel } from '@material-ui/core'
import React from 'react';
import { FormModalProps } from '../../types';
import CustomDatePicker from '../../components/CustomDatePicker';

const InmuebleFormModal = ({openModal, handleCloseModal}: FormModalProps) => {

    const [selectedDate, setSelectedDate] = React.useState(
        new Date().toISOString(),
    );

    const handleDateChange = (date: any, name: string) => {
        console.log(date, name);
        setSelectedDate(date);
    };

    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <Paper elevation={6} sx={{p: 2}}>
            
            <Typography variant="h5" component="h5">
                Formulario Inmueble 
            </Typography>          
            <form>
                <Grid container sx={{mt:2}} spacing={2}>                            
                    <Grid item sm={6} xs={12} sx={{mb: 0}}>
                        <TextField fullWidth label="Ubicación" sx={{mb: 0}} name="ubicacion" size="small" autoFocus />
                    </Grid>
                    <Grid item sm={6} xs={12} sx={{mb: 0}}>
                        <TextField fullWidth label="Distrito" sx={{mb: 0}} name="distrito" size="small" />
                    </Grid>
                    {/* Ambos checkbox */}
                    <Grid item sm={6} xs={12}>
                        <FormControlLabel control={<Checkbox defaultChecked name="escritura" />} label="Escritura" />                        
                    </Grid>
                    <Grid item sm={6} xs={12}>
                    <FormControlLabel control={<Checkbox defaultChecked name="hipotecado" />} label="Hipotecado" />                        
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField fullWidth label="Lugar Hipoteca" name="lugarHipoteca" size="small" />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField fullWidth label="Numero Finca" name="numeroFinca" size="small" />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField fullWidth label="Pago" name="pago" size="small" />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField fullWidth label="Cuota" name="cuota" size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Valor Tasación" name="valorTasacion" size="small" />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <CustomDatePicker 
                            value={selectedDate} 
                            label={'Vencimiento'} 
                            onChange={handleDateChange} 
                            name={"vencimiento"} 
                        />                    
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField fullWidth label="Cta Cte Catastral" name="cuentaCorrienteCatastral" size="small" />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField fullWidth label="Valor" name="valor" size="small" />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField fullWidth label="Saldo" name="saldo" size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Observación" multiline name="observacion" size="small" rows={4}/>
                    </Grid>            
                </Grid>

                <Box sx={{pt: 4, textAlign: 'center'}}>
                <Button variant="contained" fullWidth color="secondary">Guardar cambios</Button>

                </Box>
            </form>

            </Paper>
        </Dialog>
    )
}

export default InmuebleFormModal
