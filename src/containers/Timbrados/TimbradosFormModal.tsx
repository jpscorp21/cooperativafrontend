import { Dialog, Paper, Typography, Grid, Box, Button } from '@material-ui/core'
import { Field, Form } from 'react-final-form';
import DatePickerAdapter from '../../components/control/DatePickerAdapter';
import TextFieldAdapter from '../../components/control/TextFieldAdapter';
import { FormModalProps } from '../../types';
import { required } from '../../utils/errorMessages';

type TimbradosFormModalProps = FormModalProps & {
    onSubmit: any;
    formData: any;  
}

const TimbradosFormModal = ({openModal, handleCloseModal, onSubmit, formData}: TimbradosFormModalProps) => {    

    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <Paper elevation={6} sx={{p: 2}}>
            
            <Typography variant="h5" component="h5">
                Formulario Timbrado
            </Typography>  
            <Form 
                onSubmit={onSubmit}
                initialValues={{...formData}}                         
                render={({handleSubmit}) => (          
                    <>

                        <form onSubmit={handleSubmit}>                            
                            <Grid container sx={{mt:2}} spacing={2}>
                                <Grid item xs={12}>                                    
                                    <Field 
                                        name="nroTimbrado"           
                                        fullWidth                   
                                        component={TextFieldAdapter}                       
                                        autoFocus                                        
                                        label="Nro. Timbrado*"         
                                    /> 
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Field 
                                        name="fechaInicio"           
                                        fullWidth 
                                        validate={required}                                                                                                    
                                        component={DatePickerAdapter}
                                    />
                                </Grid>            
                                <Grid item sm={6} xs={12}>
                                    <Field 
                                        name="fechaFin"           
                                        fullWidth 
                                        validate={required}                                                                                                
                                        component={DatePickerAdapter}
                                    />                                    
                                </Grid>            
                                <Grid item xs={12}>
                                    <Field 
                                        name="observacion"           
                                        fullWidth                   
                                        component={TextFieldAdapter}                       
                                        multiline                        
                                        rows={4}
                                        label="Observación"                             
                                    /> 
                                </Grid>            
                            </Grid>

                            <Box sx={{pt: 4, textAlign: 'center'}}>
                            <Button type="submit" variant="contained" fullWidth >Guardar cambios</Button>

                            </Box>
                        </form>
                    </>
                )} 
            />

            </Paper>
        </Dialog>
    )
}

export default TimbradosFormModal
