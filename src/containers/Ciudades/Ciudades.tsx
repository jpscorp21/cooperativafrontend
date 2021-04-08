import { Box, Button, Grid, TextField } from "@material-ui/core"

const Ciudades = () => {
  return (
    < Box sx={{p:3}}>
      <div> 
        Ciudades
      </div>
      <Button variant="contained" sx={{mr:1}}>Nuevo</Button>
      <Button variant="outlined" sx={{mr:1}}>Refrescar</Button>
      <Button variant="outlined">Barrios</Button>
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
  )
}
 
export default Ciudades
