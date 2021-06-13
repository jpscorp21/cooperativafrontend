import { Box, Paper } from '@material-ui/core'
import { FormApi } from 'final-form'
import { useState } from 'react'
import { Form } from 'react-final-form'
import TituloContainer from '../../components/TituloContainer'
import { cobranzaInitialForm, createCobranzaForSave } from './cobranzas-data'
import CobranzasInnerForm from './CobranzasInnerForm'
import arrayMutators from 'final-form-arrays'

const CobranzasForm = () => {    

    const [formData,] = useState<any>(cobranzaInitialForm()); 
    
    const onSubmit = async (values: any, form: FormApi) => {
        const dataForSave = createCobranzaForSave(values);
        form.restart();
        console.log(dataForSave);
    }           

    return (
        <>
            <TituloContainer>Cobranza</TituloContainer>  

            <Box sx={{px: 2}}>
                <Paper>
                    <Form
                        initialValues={{...formData}}
                        onSubmit={onSubmit}
                        mutators={{          
                            ...arrayMutators
                        }}
                        render={({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>  
                                <CobranzasInnerForm />                                                                                                                                                                                                                      
                            </form>
                        )} 
                    />                    
                </Paper>
            </Box>          
        </>
    )
}

export default CobranzasForm
