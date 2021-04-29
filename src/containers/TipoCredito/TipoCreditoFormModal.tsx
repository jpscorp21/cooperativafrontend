import { Box, Button, Dialog, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@material-ui/core"

type TipoCreditoFormModalProps = {
  openModal : boolean;
  handleCloseModal(e: any): void;
}
const TipoCreditoFormModal = ({openModal, handleCloseModal}: TipoCreditoFormModalProps) => {
  return (
    <Dialog open={openModal} onClose={handleCloseModal}>
        <Paper elevation={6} sx={{p: 2}}>
          <Typography variant="h5" component="h5">
            Formulario Tipo Crédito
          </Typography>          
          <form>
            <Grid container sx={{mt:2}} spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Código" name="codigo" size="small" disabled />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Descripción" name="descripcion" size="small" autoFocus />
              </Grid>
              <FormControl fullWidth variant="outlined">
              <InputLabel>Modalidad Pago</InputLabel>
              <Select
              fullWidth
             label="seleccione"
              name="seleccione"
              >
              <MenuItem value={10}>Mensual</MenuItem>
              <MenuItem value={21}>Anual</MenuItem>
              <MenuItem value={22}>Semanal</MenuItem>
              </Select>
              </FormControl>

            <Box sx={{p:2, pt: 0}}>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth label="Plazo Min" name="plazo-min" size="small" />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth  label="Plazo Max" name="plazo-max" size="small"/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth  label="Apellido*" name="apellido" size="small"/>
                        </Grid>
                    </Grid>
                </form>
            </Box>
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

export default TipoCreditoFormModal;