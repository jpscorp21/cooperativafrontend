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
import useBackend from "../../shared/hooks/useBackend";
import { EstadosCivilesAPI } from "../../api/services/EstadosCivilesAPI";
import { NacionalidadesAPI } from "../../api/services/NacionalidadesAPI";
import { ProfesionesAPI } from "../../api/services/ProfesionesAPI";
import { CiudadesAPI } from "../../api/services/CiudadesAPI";
import { sociosInitialForm } from "./socios-data";
import { useQuery } from "react-query";
import { SociosAPI } from "../../api/services/SociosAPI";
import queryClient from "../../config/queryClient";


const SociosForm = () => {  

  const {create, update, key} = useBackend(SociosAPI);

  const [indexTab, setIndexTab] = useState(0);
  const [formData, setFormData] = useState(sociosInitialForm());
  const [ciudadParticularId, setCiudadParticularId] = useState<string | null>(null)
  const [ciudadDomicilioId, setCiudadDomicilioId] = useState<string | null>(null)
  const [profesionId, setProfesionId] = useState<string | null>(null)

  const {data: estadosCiviles} = useBackend(EstadosCivilesAPI);
  const {data: nacionalidades} = useBackend(NacionalidadesAPI);
  const {data: profesiones} = useBackend(ProfesionesAPI);
  const {data: ciudades} = useBackend(CiudadesAPI);
  // const {data: barrios} = useBackend(BarriosAPI);
  
  const {data: puestosLaborales} = useQuery(['puestoslaborales', profesionId], () => ProfesionesAPI.getPuestosByProfesionId(profesionId))
  const {data: barriosParticular} = useQuery(['barriosParticular', ciudadParticularId], () => CiudadesAPI.getBarriosByCiudadId(ciudadParticularId))
  const {data: barriosLaboral} = useQuery(['barriosLaboral', ciudadDomicilioId], () => CiudadesAPI.getBarriosByCiudadId(ciudadDomicilioId))
  

  const dataTabs = useArrayMemo([
    'Datos Personales', 'Domicilio Particular', 'Datos del Conyugue', 'Actividad Laboral', 'Domicilio Laboral', 'Correspondencia', 'Hijos', 'Ubicación'
  ]) 

  const onSubmit = async (values: any, form: FormApi) => {           
    if (values.id) {
      update.mutate(({body: values, id: values.id}), {
        onSuccess() {              
          queryClient.invalidateQueries(key)   
          form.reset();
        }
      }) 
      return;
    }

    create.mutate(values, {
      onSuccess() {            
        queryClient.invalidateQueries(key)   
        form.reset();
      }
    })    
  }    
 
  return (
    <>
      
      <TituloContainer>Formulario socio</TituloContainer>

      <Form
        onSubmit={onSubmit}
        subscription={{}}
        initialValues={{...formData}}
        mutators={{          
          ...arrayMutators
        }}
        render={({handleSubmit, values}) => (

          <form onSubmit={handleSubmit}>
            {JSON.stringify(values)}
            <Paper sx={{mx: 2}}>
            <FormSpy subscription={{ values: true }}>
            {({ values }) => (
              <pre>
                {JSON.stringify(values, null, 2)}
              </pre>
            )}
            </FormSpy>
            <CustomTabs value={indexTab} onChange={setIndexTab} data={dataTabs}></CustomTabs>              
            <Box px={2}>
              <TabPanel value={indexTab} index={0}>            
                <SociosDatosPersonales 
                  estadosCiviles={estadosCiviles?.items || []} 
                  nacionalidades={nacionalidades?.items || []}
                />
                
              </TabPanel>
              <TabPanel value={indexTab} index={1}>            
                <SociosDomicilioParticular 
                  ciudades={ciudades?.items || []}
                  barrios={barriosParticular?.items || []}
                  changeCiudad={(id) => setCiudadParticularId(id)}
                />
              </TabPanel>
              <TabPanel value={indexTab} index={2}>            
                <SociosDatosConyugue></SociosDatosConyugue>
              </TabPanel>
              <TabPanel value={indexTab} index={3}>            
                <SociosActividadLaboral
                  profesiones={profesiones?.items || []}
                  puestosLaborales={puestosLaborales?.items || []}
                  changeProfesion={(id) => setProfesionId(id)}                  
                />
              </TabPanel>
              <TabPanel value={indexTab} index={4}>            
                <SociosDomicilioLaboral 
                  ciudades={ciudades?.items || []}
                  barrios={barriosLaboral?.items || []}
                  changeCiudad={(id) => setCiudadDomicilioId(id)}
                />
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
    </>
  )
}
 
export default SociosForm;
