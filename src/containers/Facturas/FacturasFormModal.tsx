import { Box, Button, Dialog, Grid, Paper, Typography } from '@material-ui/core'
import { Field, Form } from 'react-final-form';
import SelectAdapter from '../../components/control/SelectAdapter';
import TextFieldAdapter from '../../components/control/TextFieldAdapter';
import { FormModalProps } from '../../types';
import { required } from '../../utils/errorMessages';

type FacturasFormModalProps = FormModalProps & {
    onSubmit: any;
    formData: any;
    timbrados: any[];
}

const FacturasFormModal = ({openModal, handleCloseModal, onSubmit, formData, timbrados}: FacturasFormModalProps) => {
    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <Paper elevation={6} sx={{p: 2}}>
            
            <Typography variant="h5" component="h5">
                Formulario Factura
            </Typography>  
            <Form
                onSubmit={onSubmit}
                initialValues={{...formData}}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>                        
                        <Grid container sx={{mt:2}} spacing={2}>
                            <Grid item xs={12}>
                                <Field
                                    name="timbradoId"           
                                    fullWidth 
                                    validate={required}
                                    component={SelectAdapter}
                                    options={timbrados}
                                    optionlabel="nroTimbrado"
                                    optionvalue="id"                       
                                    label="Timbrado*"                             
                                />                                   
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Field 
                                    fullWidth 
                                    label="Cod. Establecimiento*" 
                                    name="codigoEstablecimiento" 
                                    validate={required}
                                    component={TextFieldAdapter}                       
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Field 
                                    fullWidth 
                                    label="Cod. Expedición*" 
                                    name="codigoExpedicion" 
                                    validate={required}
                                    component={TextFieldAdapter}                       
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Field 
                                    fullWidth 
                                    label="Nro. Desde*" 
                                    name="nroDesde" 
                                    validate={required}
                                    component={TextFieldAdapter}                       
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Field 
                                    fullWidth 
                                    label="Nro. Hasta*" 
                                    name="nroHasta" 
                                    validate={required}
                                    component={TextFieldAdapter}                       
                                />
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Field 
                                    fullWidth 
                                    label="Observación" 
                                    multiline 
                                    name="obvervacion"                                     
                                    component={TextFieldAdapter}                       
                                    rows={4}
                                />
                            </Grid>            
                        </Grid>

                        <Box sx={{pt: 4, textAlign: 'center'}}>
                        <Button type="submit" variant="contained" fullWidth >Guardar cambios</Button>

                        </Box>
                    </form>
                )} 
            />        

            </Paper>
        </Dialog>
    )
}

export default FacturasFormModal
