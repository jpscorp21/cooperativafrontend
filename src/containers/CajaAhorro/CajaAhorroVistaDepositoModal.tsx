import { Box, Button, Dialog, Grid, Paper, Typography } from '@material-ui/core'
import { FormApi } from 'final-form'
import { useState } from 'react'
import { Field, Form } from 'react-final-form'
import ConfirmDialog from '../../components/ConfirmDialog'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'
import { FormModalProps } from '../../types'

type CajaAhorroVistaDepositoModalProps = FormModalProps & {
    onSubmit: any;
    formData: any;
}

const CajaAhorroVistaDepositoModal = ({openModal, handleCloseModal, onSubmit, formData}: CajaAhorroVistaDepositoModalProps) => {

    const [openConfirmModal, setOpenConfirmModal] = useState(false);    
    const [cacheSubmit, setCacheSubmit] = useState<{values: any, form: FormApi} | null>(null);

    const handleAceptar = () => {
        onSubmit(cacheSubmit?.values, cacheSubmit?.form);
        setCacheSubmit(null);
        setOpenConfirmModal(false);
    }

    const handleSubmitConfirm = (values: any, form: FormApi) => {        
        setOpenConfirmModal(true);
        setCacheSubmit({values: {...values}, form});
    }

    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <Paper elevation={6} sx={{p: 2}}>
                <Typography variant="h5" component="h5" sx={{pb: 2}}>
                    Depósito
                </Typography>    
                <Form 
                    onSubmit={handleSubmitConfirm}
                    initialValues={{...formData}}                         
                    render={({handleSubmit, values}) => (          
                <>              
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                                                        
                            <Grid item xs={12} sm={6}>
                                <Field 
                                    name="cuentaAhorro"           
                                    fullWidth                                     
                                    component={TextFieldAdapter}                       
                                    label="Cuenta"                             
                                    disabled
                                />           
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field 
                                    name="saldo"           
                                    fullWidth                                     
                                    component={TextFieldAdapter}                       
                                    label="Saldo"                             
                                    disabled
                                />                                              
                            </Grid>            
                            <Grid item xs={12}>
                                <Field 
                                    name="importe"           
                                    fullWidth    
                                    autoFocus                                 
                                    component={TextFieldAdapter}                       
                                    label="Importe"                                                                 
                                />                                              
                            </Grid>            
                        </Grid>

                        <Box sx={{pt: 4, textAlign: 'center'}}>            
                            <Button type="submit" variant="contained" disabled={!values.importe} fullWidth color="secondary">Depositar</Button>
                        </Box>          
                    </form>            
                </>                                                                                      
                )}
            />  
            <ConfirmDialog 
                openModal={openConfirmModal}
                onAceptar={handleAceptar}
                message="Estás seguro de realizar un depósito?"
                handleCloseModal={() => setOpenConfirmModal(false)}
            />
            </Paper>
        </Dialog>
        
    )
}

export default CajaAhorroVistaDepositoModal
