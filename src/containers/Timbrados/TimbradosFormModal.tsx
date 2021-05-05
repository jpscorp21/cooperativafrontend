import { Dialog, Paper, Typography, Grid, TextField, Box, Button } from '@material-ui/core'
import React, { useState } from 'react'
import CustomDatePicker from '../../components/CustomDatePicker';

type TimbradosFormModalProps = {
    openModal: boolean;
    handleCloseModal(e: any): void;
}

const initialForm = () => ({
    descripcion: '',
    fechaInicio: new Date().toISOString(),
    fechaFin: new Date().toISOString(),
    observacion: ''
});

const TimbradosFormModal = ({openModal, handleCloseModal}: TimbradosFormModalProps) => {

    const [form, setForm] = useState(initialForm());

    const handleChange = (event: any) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleChangeDate = (value: string, name: string) => {
        handleChange({target: {value, name}})
    }

    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <Paper elevation={6} sx={{p: 2}}>
            
            <Typography variant="h5" component="h5">
                Formulario Timbrado
            </Typography>          
            <form>
                <Grid container sx={{mt:2}} spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Nro. Timbrado*" name="descripcion" size="small" autoFocus />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <CustomDatePicker 
                            label="Fecha Inicio" 
                            name="fechaInicio" 
                            value={form.fechaInicio} 
                            onChange={handleChangeDate} />
                    </Grid>            
                    <Grid item sm={6} xs={12}>
                        <CustomDatePicker label="Fecha Fin" name="fechaFin" value={form.fechaFin} onChange={handleChangeDate} />
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

export default TimbradosFormModal
