import { Box, Button, Dialog, Grid, Paper, Typography } from '@material-ui/core'
import { FormApi } from 'final-form';
import React, { useState } from 'react'
import { Field, Form } from 'react-final-form';
import ConfirmDialog from '../../components/ConfirmDialog';
import TextFieldAdapter from '../../components/control/TextFieldAdapter';

type CuentaModalFormProps = {
    open: boolean;
    onHide(e: any): void;
    onSubmit: any;
    formData: any;
    title: string;
    loading: boolean;
}

const CuentaModalForm = ({open, onHide, onSubmit, title, formData, loading = false}: CuentaModalFormProps) => {

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
        <Dialog open={open} onClose={onHide}>
            <Paper elevation={6} sx={{p: 2}}>
                <Typography variant="h5" component="h5" sx={{pb: 2}}>
                    {title}
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
                                        name="codigo"           
                                        fullWidth                                     
                                        component={TextFieldAdapter}                       
                                        label="Número cuenta"                             
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
                                <Button 
                                    type="submit" 
                                    variant="contained" 
                                    fullWidth                                     
                                    disabled={!values.importe || loading}                                    
                                >Acumular</Button>
                            </Box>          
                        </form>            
                    </>                                                                                      
                )}
                />  
                <ConfirmDialog 
                    openModal={openConfirmModal}
                    onAceptar={handleAceptar}
                    message="Estás seguro de realizar está operación?"
                    handleCloseModal={() => setOpenConfirmModal(false)}
                /> 
            </Paper>            
        </Dialog>

    )
}

export default CuentaModalForm
