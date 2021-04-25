import { Box, Button, Dialog, Grid, Paper, TextField, Typography } from '@material-ui/core'

type CajaAhorroVistaFormModalProps = {
    openModal: boolean;
    handleCloseModal(e: any): void;
}

const CajaAhorroVistaFormModal = ({openModal, handleCloseModal}: CajaAhorroVistaFormModalProps) => {
    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <Paper elevation={6} sx={{p: 2}}>
            
            <Typography variant="h5" component="h5" sx={{pb: 4}}>
                Habilitar Caja de Ahorro
            </Typography>          
            <form>
                <Grid container spacing={2}>                                    
                    <Grid item xs={12}>
                        <TextField fullWidth label="Buscar Socio" size="small" autoFocus />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Saldo Inicial*" size="small" />
                    </Grid>            
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Saldo Minimo*" size="small" />
                    </Grid>            
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Interes*" size="small" />
                    </Grid>             
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Tipo Ahorro*" size="small" />
                    </Grid>            
                    <Grid item xs={12}>
                        <TextField fullWidth label="Observación" multiline rows={4} size="small" />
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

export default CajaAhorroVistaFormModal
