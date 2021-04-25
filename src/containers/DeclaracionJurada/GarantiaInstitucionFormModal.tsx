import { Dialog, Paper, Typography, Grid, TextField, Box, Button } from '@material-ui/core'
import React from 'react'
import CustomDatePicker from '../../components/CustomDatePicker'
import { FormModalProps } from '../../types'

const GarantiaInstitucionFormModal = ({openModal, handleCloseModal}: FormModalProps) => {

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
                Formulario Garantia Institución
            </Typography>          
            <form>
                <Grid container sx={{mt:2}} spacing={2}>                                        
                    <Grid item xs={12}>
                        <TextField fullWidth label="Socio Titular" name="socioTitular" size="small" autoFocus />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Cuota" name="cuota" size="small" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Importe" name="importe" size="small" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Plazo" name="plazo" size="small" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomDatePicker label="Vencimiento" value={selectedDate} onChange={handleDateChange} name="proxVencimiento" />                        
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Número crédito" name="cuota" size="small" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Saldo " name="saldo" size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Observación" multiline name="obvervacion" size="small" rows={4}/>
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

export default GarantiaInstitucionFormModal
