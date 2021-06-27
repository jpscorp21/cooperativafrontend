import { Box } from '@material-ui/core'
import { FormApi } from 'final-form'
import { useEffect, useState } from 'react';
import { Form } from 'react-final-form'
import { useMutation, useQuery } from 'react-query';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { SolicitudCreditoAPI } from '../../api/services/SolicitudCreditoAPI';
import TituloContainer from '../../components/TituloContainer'
import queryClient from '../../config/queryClient';
import { solicitudCreditoInitialForm, solicitudCreditoMapForCreate } from './solicitudcredito-map';
import SolicitudCreditoInnerForm from './SolicitudCreditoInnerForm';


const SolicitudCreditoForm = () => {    

    const history = useHistory();
    const params = useParams<{id: string}>();
    
    const [formData, setFormData] = useState<any>(solicitudCreditoInitialForm()); 
    const solicitudCreditoAdd = useMutation((body: any) => SolicitudCreditoAPI.create(body))
    const {data: solicitud} = useQuery([SolicitudCreditoAPI.key, params.id], () => SolicitudCreditoAPI.getById(params.id))

    useEffect(() => {
        // console.log('socio', socio);
        if (solicitud) {
    
            const data = {...solicitud};
        //   const socioFormat = sociosMap(socio);            


            if (data && data.socio) {
                data.socio.nombre_completo = data.socio.nombre + ' ' + data.socio.apellido
            }

            setFormData({...data});
    
    
        //   if (socioFormat.direccionParticular && socioFormat.direccionParticular.ciudadId) {
        //     setCiudadParticularId(socioFormat.direccionParticular.ciudadId);
        //   }
    
        //   if (socioFormat.domicilioLaboral && socioFormat.domicilioLaboral.ciudadId) {
        //     setCiudadDomicilioId(socioFormat.domicilioLaboral.ciudadId);
        //   }
    
        //   if (socioFormat.profesionId) {
        //     setProfesionId(socioFormat.profesionId);
        //   }
    
        }
    }, [solicitud]);

    const onSubmit = async (values: any, form: FormApi) => {           
        const dataForSave = solicitudCreditoMapForCreate(values);
        console.log(dataForSave);
        solicitudCreditoAdd.mutate(dataForSave, {
            onSuccess() {    
              queryClient.invalidateQueries(SolicitudCreditoAPI.key);   
              history.push('/solicitudcredito');              
              form.restart();
            },      
            onError(error) {
                console.log(error);
            }
        })
        
    } 
        
    return (
        <>
            <TituloContainer>Formulario Solicitud Crédito</TituloContainer>

            <Box sx={{px: 2}}>
                    <Form
                        initialValues={{...formData}}                        
                        onSubmit={onSubmit}                        
                        render={({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>  
                                <SolicitudCreditoInnerForm />                                                                                                                                                                                                                      
                            </form>
                        )}
                    />
            </Box>
        </>
    )
}

export default SolicitudCreditoForm
