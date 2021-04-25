import { Dialog, Paper, Typography, Grid, TextField, Box, Button } from '@material-ui/core'
import React from 'react'
import { FormModalProps } from '../../types'

const ReferenciasFormModal = ({openModal, handleCloseModal}: FormModalProps) => {
    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <Paper elevation={6} sx={{p: 2}}>
            
            <Typography variant="h5" component="h5">
                Formulario Referencia
            </Typography>          
            <form>
                <Grid container sx={{mt:2}} spacing={2}>                            
                    <Grid item xs={12}>
                        <TextField fullWidth label="Nombre" name="nombre" size="small" autoFocus />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField fullWidth label="Direccion" name="direccion" size="small" />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField fullWidth label="Fuente" name="fuente" size="small" />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField fullWidth label="Teléfono" name="telefono" size="small" />
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

export default ReferenciasFormModal
