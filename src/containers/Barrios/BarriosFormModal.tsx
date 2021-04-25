import { Box, Button, Dialog, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@material-ui/core"

type BarriosFormModalProps = {
  openModal : boolean;
  handleCloseModal(e: any): void;
}
const BarriosFormModal = ({openModal, handleCloseModal}: BarriosFormModalProps) => {
  return (
    <Dialog open={openModal} onClose={handleCloseModal}>
        <Paper elevation={6} sx={{p: 2}}>
          <Typography variant="h5" component="h5">
            Formulario Barrio
          </Typography>          
          <form>
            <Grid container sx={{mt:2}} spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Código" name="codigo" size="small" disabled />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Descripción" name="descripcion" size="small" autoFocus />
              </Grid>
              <FormControl fullWidth variant="outlined" >
              <InputLabel>Ciudad</InputLabel>
              <Select
              fullWidth
             label="ciudad"
              name="ciudad"
              >
              <MenuItem value={10}>Capiata</MenuItem>
              <MenuItem value={21}>Itaugua</MenuItem>
              <MenuItem value={22}>Ypacaraí</MenuItem>
              </Select>
              </FormControl>
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

export default BarriosFormModal;