import { Box, Button, FormControl, FormLabel, Grid, RadioGroup, TextField, Typography, useRadioGroup } from "@material-ui/core"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import AddIcon from '@material-ui/icons/Add';
import { useState } from "react";


const Socios = () => {
  const [openModal, setOpenModal] = useState(false)  

  const handlePageChange = (page: number) => {
    console.log(page);
  }

  const handleEditar = (item: any) => {
    console.log({item});
  }

  const hancleCloseModal = (e: any) => {
    setOpenModal(false);
  }

  return (
    <>
    <Box px={2} pt={3} pb={3}>
        <Typography variant="h5" component="h5">
         Formulario Socios - Datos Personales           
        </Typography> 
    </Box>
    < Box sx={{p:2, pt: 0}}>
      
      <Button variant="contained" size="small" color="secondary" sx={{mb: 2, mr: 2}} onClick={() => setOpenModal(true)}  startIcon={<AddIcon />}>Nuevo</Button>
      <Button variant="outlined" sx={{mr:1}}>Socios</Button>
      <form>
      <Grid container sx={{mt:2}}>
        
      <Grid item xs={4} sx={{mb:2}}>
      <TextField label="Numero Socio" name="numero-socio" size="small" />
      </Grid>
      <Grid item xs={4} sx={{mb:2}}>
      <TextField  label="Nombre*" name="nombre" size="small"/>
      </Grid>
      <Grid item xs={4} sx={{mb:2}}>
      <TextField  label="Apellido*" name="apellido" size="small"/>
      </Grid>
      <Grid item xs={4} sx={{mb:2}}>
      <TextField  label="Doc.Cédula*" name="cedula" size="small"/>
      </Grid>
      <Grid item xs={4} sx={{mb:2}}>
      <TextField  label="RUC" name="ruc" size="small"/>
      </Grid>
      <Grid item xs={4} sx={{mb:2}}>
      <TextField  label="Estado Civil*" name="estado-civil" size="small"/>
      </Grid>
      <Grid item xs={4} sx={{mb:2}}>
      <TextField  label="Fecha Nacimiento*" name="fecha-nac" size="small"/>
      </Grid>
      <Grid item xs={4} sx={{mb:2}}>
      <TextField  fullWidth label="Dirección*" name="direccion" size="small" />
      </Grid>
      
      <Grid item xs={12} sx={{mb:2}}>
      <FormControl component="fieldset">
      <FormLabel component="legend">Género*</FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="masculino">
      <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
      <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
      <FormControlLabel value="otros" control={<Radio />} label="Otros" />
      </RadioGroup>
      </FormControl>
      </Grid>

      <Grid item xs={4} sx={{mb:2}}>
      <TextField  label="Nacionalidad" name="nacionalidad" size="small" />
      </Grid>
      <Grid item xs={4} sx={{mb:2}}>
      <TextField   label="Grado Académico" name="gradoAcademico" size="small"/>
      </Grid>
      <Grid item xs={12} sx={{mb:2}}>
      <TextField fullWidth label="Motivos" multiline name="motivos" size="small" rows={4}/>
      </Grid>
      </Grid>
      </form>
    </ Box>

    <Box px={2} pt={3} pb={3}>
        <Typography variant="h5" component="h5">
         Formulario Socios - Domicilio Particular           
        </Typography> 
    </Box>

    <Box sx={{p:2, pt: 0}}>
    <form>
      <Grid container sx={{mt:2}}>
      <Grid item xs={8} sx={{mb:2}}>
      <TextField  fullWidth label="Calle y Número" name="calleyNumero" size="small" />
      </Grid>

      <Grid item xs={4} sx={{mb:2, mr: 2}}>
      <TextField  label="Ciudad" name="ciudad" size="small"/>
      </Grid>

      <Grid item xs={4} sx={{mb:2}}>
      <TextField   label="Barrio" name="barrio" size="small" />
      </Grid>

      <Grid item xs={4} sx={{mb:2, mr: 2}}>
      <TextField  label="Teléfono" name="telefono" size="small" />
      </Grid>
      <Grid item xs={4} sx={{mb:2}}>
      <TextField   label="Celular" name="celular" size="small"/>
      </Grid>

      <Grid item xs={8} sx={{mb:2}}>
      <TextField  fullWidth label="Correo" name="correo" size="small" />
      </Grid>
      </Grid>
    </form>
    </Box>

    <Box px={2} pt={3} pb={3}>
        <Typography variant="h5" component="h5">
         Formulario Socios - Datos del Conyuge           
        </Typography> 
    </Box>

    <Box sx={{p:2, pt: 0}}>
    <form>
      <Grid container sx={{mt:2}}>
      <Grid item xs={4} sx={{mb:2}}>
      <TextField  label="Nombre" name="nombre" size="small" />
      </Grid>

      <Grid item xs={4} sx={{mb:2, mr: 2}}>
      <TextField  label="Apellido" name="apellido" size="small"/>
      </Grid>

      <Grid item xs={4} sx={{mb:2}}>
      <TextField   label="Doc. Identidad" name="docIdentidad" size="small" />
      </Grid>

      <Grid item xs={4} sx={{mb:2, mr: 2}}>
      <TextField  label="Fecha Nacimiento" name="fechaNacimiento" size="small" />
      </Grid>

      <Grid item xs={8} sx={{mb:2}}>
      <TextField  fullWidth label="Dirección" name="direccion" size="small" />
      </Grid>
      </Grid>
    </form>
    </Box>

    <Box px={2} pt={3} pb={3}>
        <Typography variant="h5" component="h5">
         Formulario Socios - Actividad Laboral           
        </Typography> 
    </Box>

    <Box sx={{p:2, pt: 0}}>
    <form>
      <Grid container sx={{mt:2}}>
      <Grid item xs={12} sx={{mb:2}}>
      <FormControl component="fieldset">
      <FormLabel component="legend">Es Empleado</FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="si">
      <FormControlLabel value="si" control={<Radio />} label="Sí" />
      <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
      </FormControl>
      </Grid>

      <Grid item xs={4} sx={{mb:2, mr: 2}}>
      <TextField  label="Ingreso Mensual" name="ingresoMensual" size="small"/>
      </Grid>

      <Grid item xs={12} sx={{mb:2}}>
      <FormControl component="fieldset">
      <FormLabel component="legend">Posee Otros Ingresos</FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="si">
      <FormControlLabel value="si" control={<Radio />} label="Sí" />
      <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
      </FormControl>
      </Grid>
      </Grid>
    </form>
    </Box>
    
    <Box px={2} pt={3} pb={3}>
        <Typography variant="h5" component="h5">
         Formulario Socios - Domicilio Laboral           
        </Typography> 
    </Box>
    <Box sx={{p:2, pt: 0}}>
    <form>
    <Grid container sx={{mt:2}}>
      <Grid item xs={8} sx={{mb:2}}>
      <TextField  fullWidth label="Calle y Número" name="calleyNumero" size="small" />
      </Grid>

      <Grid item xs={4} sx={{mb:2, mr: 2}}>
      <TextField  label="Ciudad" name="ciudad" size="small"/>
      </Grid>

      <Grid item xs={4} sx={{mb:2}}>
      <TextField   label="Barrio" name="barrio" size="small" />
      </Grid>

      <Grid item xs={4} sx={{mb:2, mr: 2}}>
      <TextField  label="Teléfono" name="telefono" size="small" />
      </Grid>
      <Grid item xs={4} sx={{mb:2}}>
      <TextField   label="Celular" name="celular" size="small"/>
      </Grid>
      </Grid>
    </form>
    </Box>

    <Box px={2} pt={3} pb={3}>
        <Typography variant="h5" component="h5">
         Formulario Socios - Correspondencia           
        </Typography> 
    </Box>

    <Box sx={{p:2, pt: 0}}>
    <form>
      <Grid container sx={{mt:2}}>
      <Grid item xs={12} sx={{mb:2}}>
      <FormControl component="fieldset">
      <FormLabel component="legend">Recibo mi correspondencia en mi Domicilio</FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="particular">
      <FormControlLabel value="particular" control={<Radio />} label="Particular" />
      <FormControlLabel value="laboral" control={<Radio />} label="Laboral" />
      </RadioGroup>
      </FormControl>
      </Grid>

      <Grid item xs={4} sx={{mb:2, mr: 2}}>
      <TextField  label="Otro (Especificar)" name="otro" size="small"/>
      </Grid>

      </Grid>
    </form>
    </Box>

    <Box px={2} pt={3} pb={3}>
        <Typography variant="h5" component="h5">
         Formulario Socios - Hijos           
        </Typography> 
    </Box>

    <Box sx={{p:2, pt: 0}}>
    <form>
    <Button variant="contained" size="small" color="secondary" sx={{mb: 2, mr: 2}} onClick={() => setOpenModal(true)}  startIcon={<AddIcon />}>Nuevo</Button>
    </form>
    </Box>

    <Box px={2} pt={3} pb={3}>
        <Typography variant="h5" component="h5">
         Formulario Socios - Ubicación           
        </Typography> 
    </Box>

    <Box sx={{p:2, pt: 0}}>
    <form>
    <Grid container sx={{mt:2}}>
      <Grid item xs={4} sx={{mb:2, mr: 2}}>
      <TextField  label="Latitud" name="latitud" size="small"/>
      </Grid>
      <Grid item xs={4} sx={{mb:2, mr: 2}}>
      <TextField  label="Longitud" name="longitud" size="small"/>
      </Grid>
      </Grid>
    </form>
    </Box>
    
    <Box sx={{p:2, pt: 0}}>
    <Button variant="contained" sx={{mr:1}}>Guardar</Button>
    <Button variant="outlined" sx={{mr:1}}>Reiniciar</Button>
    <Button variant="outlined" sx={{mr:1}}>Volver</Button>
    </ Box>
    </>
  )
}
 
export default Socios
