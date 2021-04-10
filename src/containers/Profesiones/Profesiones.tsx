import { Box, Button, Grid, TextField } from "@material-ui/core"
import WrapperCard from "../../components/WrapperCard"

const Profesiones = () => {
  return (
    <WrapperCard title="Formulario Profesión">
    < Box sx={{p:2, pt: 0}}>
      
      <Button variant="contained" sx={{mr:1}}>Nuevo</Button>
      <Button variant="outlined" sx={{mr:1}}>Refrescar</Button>
      <Button variant="outlined" sx={{mr:1}}>Puesto Laboral</Button>
      <form>
      <Grid container sx={{mt:2}}>
        
      <Grid item xs={12} sx={{mb:2}}>
      <TextField fullWidth label="Descripción" name="descripcion" size="small" />
      </Grid>
      
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
 
export default Profesiones
