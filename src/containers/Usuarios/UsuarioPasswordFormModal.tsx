import { Grid, Paper, Typography, Dialog, Box, Button, Alert  } from '@material-ui/core'
import { Field, Form } from 'react-final-form'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'
import { FormModalProps } from '../../types'
import { required } from '../../utils/errorMessages'


type UsuarioPasswordFormModalProps = FormModalProps & {
    onSubmit: any;
    formData: any;  
    loading: boolean;
}

const UsuarioPasswordFormModal = ({openModal, handleCloseModal, onSubmit, formData, loading = false}: UsuarioPasswordFormModalProps) => {
    


  return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <Paper elevation={6} sx={{p: 2}}>
            
                <Typography variant="h5" component="h5" sx={{pb: 2}}>
                Cambiar contraseña             
                </Typography>        
                <Form 
                onSubmit={onSubmit}
                initialValues={{...formData}}                         
                render={({handleSubmit, submitError}) => (          
                    <>              
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>                                    
                        <Grid item xs={12} sm={12}>
                            <Field
                                autoFocus 
                                type="password"
                                name="password"           
                                fullWidth 
                                validate={required}
                                component={TextFieldAdapter}                       
                                label="Contraseña"                             
                            />           
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Field 
                                type="password"
                                name="passwordConfirmation"           
                                fullWidth 
                                validate={required}
                                component={TextFieldAdapter}                       
                                label="Confirmar contraseña"                             
                            />           
                        </Grid>                                                                                                        
                        </Grid>
                        {submitError && <Alert severity="error" sx={{mt: 2}}>{submitError}</Alert>}
                        <Box sx={{pt: 3, textAlign: 'center'}}>            
                        <Button disabled={loading} type="submit" variant="contained" fullWidth>Cambiar</Button>
                        </Box>          
                    </form>            
                    </>                                                                                      
                )}
                />  
            </Paper>
        </Dialog>

    )
}

export default UsuarioPasswordFormModal;
