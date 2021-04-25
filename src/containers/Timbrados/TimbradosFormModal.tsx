import { Dialog, Paper, Typography, Grid, TextField, Box, Button } from '@material-ui/core'
import React from 'react'

type TimbradosFormModalProps = {
    openModal: boolean;
    handleCloseModal(e: any): void;
}

const TimbradosFormModal = ({openModal, handleCloseModal}: TimbradosFormModalProps) => {
    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <Paper elevation={6} sx={{p: 2}}>
            
            <Typography variant="h5" component="h5" sx={{pb: 2}}>
                Formulario Timbrado
            </Typography>          
            <form>
                <Grid container sx={{mt:2}} spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Nro. Timbrado*" name="descripcion" size="small" autoFocus />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Fecha Inicio*" name="fechaInicio" size="small" />
                    </Grid>            
                    <Grid item xs={12}>
                        <TextField fullWidth label="Fecha Fin*" name="fechaFin" size="small" />
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

export default TimbradosFormModal
