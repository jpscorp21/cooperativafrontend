import { Box } from '@material-ui/core'
import { FormApi } from 'final-form'
import { useState } from 'react';
import { Form } from 'react-final-form'
import { useMutation } from 'react-query';
import { useHistory } from 'react-router';
import { SolicitudCreditoAPI } from '../../api/services/SolicitudCreditoAPI';
import TituloContainer from '../../components/TituloContainer'
import queryClient from '../../config/queryClient';
import { solicitudCreditoInitialForm, solicitudCreditoMapForCreate } from './solicitudcredito-map';
import SolicitudCreditoInnerForm from './SolicitudCreditoInnerForm';


const SolicitudCreditoForm = () => {    

    const history = useHistory();
    
    const [formData,] = useState<any>(solicitudCreditoInitialForm()); 
    const solicitudCreditoAdd = useMutation((body: any) => SolicitudCreditoAPI.create(body))


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
