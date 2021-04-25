import { Box, Button, FormControl, FormLabel, Grid, RadioGroup, TextField, Typography } from "@material-ui/core"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import AddIcon from '@material-ui/icons/Add';
import { useState } from "react";
import { useQuery } from "react-query";
import TituloContainer from "../../components/TituloContainer";
import { socios } from "../../api/socios";
import SociosDatosPersonales from "./SociosDatosPersonales";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import SociosDatosConyugue from "./SociosDatosConyugue";
import SociosActividadLaboral from "./SociosActividadLaboral";
import SociosDomicilioLaboral from "./SociosDomicilioLaboral";
import SociosCorrespondencia from "./SociosCorrespondencia";
 
const useSocios = () => {
  const {data: items} = useQuery('socios', socios.getAll);
  
  return items;
}

const Socios = () => {
  const items = useSocios();
  return (
    <>
      <TituloContainer>Formulario Socios - Datos Personales</TituloContainer>
      <SociosDatosPersonales></SociosDatosPersonales>
      <ButtonActionContainer onNew={() => console.log('nuevo')} onRefresh={() => console.log('refrescando')} />
      <TituloContainer>Formulario Socios - Datos del Conyugue</TituloContainer>
      <SociosDatosConyugue></SociosDatosConyugue>
      <TituloContainer>Formulario Socios - Actividad Laboral</TituloContainer>
      <SociosActividadLaboral></SociosActividadLaboral>
      <TituloContainer>Formulario Socios - Domicilio Laboral</TituloContainer>
      <SociosDomicilioLaboral></SociosDomicilioLaboral>
      <TituloContainer>Formulario Socios - Correspondencia</TituloContainer>
      <SociosCorrespondencia></SociosCorrespondencia>


    <Box px={2} pt={3} pb={3}>
        <Typography variant="h5" component="h5">
         Formulario Socios - Hijos           
        </Typography> 
    </Box>

    <Box sx={{p:2, pt: 0}}>
    <form>
    <Button variant="contained" size="small" color="secondary" sx={{mb: 2, mr: 2}}  startIcon={<AddIcon />}>Nuevo</Button>
    </form>
    </Box>

    <Box px={2} pt={3} pb={3}>
        <Typography variant="h5" component="h5">
         Formulario Socios - Ubicación           
        </Typography> 
    </Box>

    <Box sx={{p:2, pt: 0}}>
    <form>
    <Grid container spacing={2}>
      <Grid item xs={4}>
      <TextField fullWidth label="Latitud" name="latitud" size="small"/>
      </Grid>
      <Grid item xs={4}>
      <TextField fullWidth label="Longitud" name="longitud" size="small"/>
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
