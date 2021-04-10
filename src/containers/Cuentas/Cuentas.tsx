import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@material-ui/core"
import WrapperCard from "../../components/WrapperCard"

const Cuentas = () => {
  return (
    <WrapperCard title="Formulario Cuenta">
    < Box sx={{p:2, pt: 0}}>
      
      <Button variant="contained" sx={{mr:1}}>Nuevo</Button>
      <Button variant="outlined" sx={{mr:1}}>Refrescar</Button>
      <Button variant="outlined">Tipo Cuenta</Button>
      <form>
      <Grid container sx={{mt:2}}>
        
      <Grid item xs={12} sx={{mb:2}}>
      <TextField fullWidth label="Descripción" name="descripcion" size="small" />
      </Grid>
      
      <FormControl fullWidth variant="outlined" sx={{mb:2}} >
      <InputLabel >Tipo Cuenta</InputLabel>
        <Select
          fullWidth
          label="Tipo Cuenta"
        >
          <MenuItem value="">
            --Seleccione--
          </MenuItem>
          <MenuItem value={10}>Activo</MenuItem>
          <MenuItem value={21}>Pasivo</MenuItem>
          <MenuItem value={22}>Ingreso</MenuItem>
          <MenuItem value={22}>Egreso</MenuItem>
        </Select>
      </FormControl>
      
      <Grid item xs={12}>
      <TextField fullWidth label="Observación" multiline name="obvervacion" size="small" rows={4}/>
      </Grid>
      
    </Grid>

      </form>
    </ Box>

    < Box sx={{p:2, pt: 0}}>
    <Button variant="contained" sx={{mr:1}}>Guardar</Button>
    <Button variant="outlined" sx={{mr:1}}>Reiniciar</Button>
    <Button variant="outlined" sx={{mr:1}}>Volver</Button>
    </ Box>
    </WrapperCard>
  )
}
 
export default Cuentas
