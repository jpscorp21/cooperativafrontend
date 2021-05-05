import { Box, Button, Dialog, Grid, Paper, TextField, Typography } from "@material-ui/core"

type ModalidadPagoFormModalProps = {
  openModal : boolean;
  handleCloseModal(e: any): void;
}
const ModalidadPagoFormModal = ({openModal, handleCloseModal}: ModalidadPagoFormModalProps) => {
  return (
    <Dialog open={openModal} onClose={handleCloseModal}>
        <Paper elevation={6} sx={{p: 2}}>
          <Typography variant="h5" component="h5">
            Formulario Modalidad Pago
          </Typography>          
          <form>
            <Grid container sx={{mt:2}} spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Código" name="codigo" size="small" disabled />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Descripción" name="descripcion" size="small" autoFocus />
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

export default ModalidadPagoFormModal;