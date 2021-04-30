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
import useArrayMemo from "../../shared/hooks/useArrayMemo";
import CustomTabs from "../../components/CustomTabs";
import TabPanel from "../../components/TabPanel";
 
const useSocios = () => {


  
  const {data: items} = useQuery('socios', socios.getAll);


  return items;
}

const Socios = () => {
  const items = useSocios();

  const [indexTab, setIndexTab] = useState(0);

  const dataTabs = useArrayMemo([
    'Datos Personales', 'Domicilio Particular', 'Datos del Conyugue', 'Actividad Laboral', 'Domicilio Laboral', 'Correspondencia', 'Hijos', 'Ubicación'
  ]) 

  return (
    <>
    
    <TituloContainer>Formulario Socios</TituloContainer>
      <Box px="2">
        <CustomTabs value={indexTab} onChange={setIndexTab} data={dataTabs}></CustomTabs>
      </Box>
        
    <TabPanel value={indexTab} index={0}>            
      <SociosDatosPersonales></SociosDatosPersonales>
    </TabPanel>
    <TabPanel value={indexTab} index={1}>            
      <h1>Deomiciolio Particular</h1>
    </TabPanel>
    <TabPanel value={indexTab} index={2}>            
      <SociosDatosConyugue></SociosDatosConyugue>
    </TabPanel>
    <TabPanel value={indexTab} index={3}>            
      <SociosActividadLaboral></SociosActividadLaboral>
    </TabPanel>
    <TabPanel value={indexTab} index={4}>            
      <SociosDomicilioLaboral></SociosDomicilioLaboral>
    </TabPanel>
    <TabPanel value={indexTab} index={5}>            
    
      {/* <TituloContainer>Formulario Socios - Correspondencia</TituloContainer> */}
      <SociosCorrespondencia></SociosCorrespondencia>
    </TabPanel>
      <TabPanel value={indexTab} index={6}>            
    
        <h1>Hijos</h1>
      </TabPanel>
      <TabPanel value={indexTab} index={7}>            
    
      <Box px={2} pt={3} pb={3}>
      
        </Box>

        <Box sx={{p:2, pt: 0}}>
        
        <Grid container spacing={2}>
          <Grid item xs={4}>
          <TextField fullWidth label="Latitud" name="latitud" size="small"/>
          </Grid>
          <Grid item xs={4}>
          <TextField fullWidth label="Longitud" name="longitud" size="small"/>
          </Grid>
          </Grid>
        
        </Box>
      </TabPanel>
              
    
    {/* <Box sx={{p:2, pt: 0}}>
    <Button variant="contained" sx={{mr:1}}>Guardar</Button>
    <Button variant="outlined" sx={{mr:1}}>Reiniciar</Button>
    <Button variant="outlined" sx={{mr:1}}>Volver</Button>
    </ Box> */}
    </>
  )
}
 
export default Socios
