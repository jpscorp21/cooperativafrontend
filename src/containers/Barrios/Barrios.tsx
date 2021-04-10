import { Box, Button, Grid, InputLabel, TextField } from "@material-ui/core"
import WrapperCard from "../../components/WrapperCard"
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const Barrios = () => {
  return (
    <WrapperCard title="Formulario Barrio">
    < Box sx={{p:2, pt: 0}}>
      
      <Button variant="contained" sx={{mr:1}}>Nuevo</Button>
      <Button variant="outlined" sx={{mr:1}}>Refrescar</Button>
      <Button variant="outlined">Ciudad</Button>
      <form>
      <Grid container sx={{mt:2}}>
        
      <Grid item xs={12} sx={{mb:2}}>
      <TextField fullWidth label="Descripción" name="descripcion" size="small" />
      </Grid>
      
      <FormControl fullWidth variant="outlined" sx={{mb:2}} >
      <InputLabel >Ciudad</InputLabel>
        <Select
          fullWidth
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
 
export default Barrios