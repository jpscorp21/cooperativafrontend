import { Box, Button, Paper } from "@material-ui/core"
import { useState } from "react";
import TituloContainer from "../../components/TituloContainer";
import SociosDatosPersonales from "./SociosDatosPersonales";
import SociosDatosConyugue from "./SociosDatosConyugue";
import SociosActividadLaboral from "./SociosActividadLaboral";
import SociosDomicilioLaboral from "./SociosDomicilioLaboral";
import SociosCorrespondencia from "./SociosCorrespondencia";
import useArrayMemo from "../../shared/hooks/useArrayMemo";
import CustomTabs from "../../components/CustomTabs";
import TabPanel from "../../components/TabPanel";
import SociosUbicacion from "./SociosUbicacion";
import SociosDomicilioParticular from "./SociosDomicilioParticular";
import SociosHijos from "./SociosHijos";
import { FormApi } from "final-form";
import { Form, FormSpy } from "react-final-form";
import arrayMutators from 'final-form-arrays'
import SaveIcon from '@material-ui/icons/Save';


const Socios = () => {  

  const [indexTab, setIndexTab] = useState(0);

  const dataTabs = useArrayMemo([
    'Datos Personales', 'Domicilio Particular', 'Datos del Conyugue', 'Actividad Laboral', 'Domicilio Laboral', 'Correspondencia', 'Hijos', 'Ubicación'
  ]) 

  const onSubmit = async (values: any, form: FormApi) => {   
    console.log(values) 
    // if (values.id) {
    //   update.mutate(({body: values, id: values.id}), {
    //     onSuccess() {    
    //       handleCloseModal();     
    //       queryClient.invalidateQueries(key)   
    //       form.reset();
    //     }
    //   }) 
    //   return;
    // }

    // create.mutate(values, {
    //   onSuccess() {    
    //     handleCloseModal();     
    //     queryClient.invalidateQueries(key)   
    //     form.reset();
    //   }
    // })    
  }    

  return (
    <>
    <TituloContainer>Formulario Socios</TituloContainer>
    
      <Form
        onSubmit={onSubmit}
        subscription={{}}
        mutators={{          
          ...arrayMutators
        }}
        render={({handleSubmit}) => (

          <form onSubmit={handleSubmit}>
            <Paper sx={{mx: 2}}>
            {/* <FormSpy subscription={{ values: true }}>
            {({ values }) => (
              <pre>
                {JSON.stringify(values, null, 2)}
              </pre>
            )}
            </FormSpy> */}
            <CustomTabs value={indexTab} onChange={setIndexTab} data={dataTabs}></CustomTabs>              
            <Box px={2}>
              <TabPanel value={indexTab} index={0}>            
                <SociosDatosPersonales></SociosDatosPersonales>
                
              </TabPanel>
              <TabPanel value={indexTab} index={1}>            
                <SociosDomicilioParticular />
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
                <SociosCorrespondencia></SociosCorrespondencia>
              </TabPanel>
              <TabPanel value={indexTab} index={6}>                
                <SociosHijos />
              </TabPanel>
              <TabPanel value={indexTab} index={7}>            
                <SociosUbicacion />        
              </TabPanel>
            </Box>
            

          </Paper>
          <Box p={2} textAlign="right">
            <Button 
                type="submit"
                variant="contained" 
                size="small" 
                color="secondary" 
                startIcon={<SaveIcon />}                                
            >
                Guardar
            </Button>            
          </Box> 
          </form>

        )}        
      >
        
      </Form>
    {/* <Box sx={{p:2, pt: 0}}>
    <Button variant="contained" sx={{mr:1}}>Guardar</Button>
    <Button variant="outlined" sx={{mr:1}}>Reiniciar</Button>
    <Button variant="outlined" sx={{mr:1}}>Volver</Button>
    </ Box> */}
    </>
  )
}
 
export default Socios
