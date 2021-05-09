import { Box, Button, Dialog, Grid, Paper, Typography } from '@material-ui/core'
import { Field, Form } from 'react-final-form';
import TextFieldAdapter from '../../components/control/TextFieldAdapter';
import { FormModalProps } from '../../types';
import { required } from '../../utils/errorMessages';

type CajaAhorroVistaFormModalProps = FormModalProps & {
    onSubmit: any;
    formData: any;
}

const CajaAhorroVistaFormModal = ({openModal, handleCloseModal, onSubmit, formData}: CajaAhorroVistaFormModalProps) => {

    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <Paper elevation={6} sx={{p: 2}}>

            <Typography variant="h5" component="h5" sx={{pb: 4}}>
                Habilitar Caja de Ahorro
            </Typography>          

            <Form
                onSubmit={onSubmit}
                initialValues={{...formData}}
                render={({handleSubmit, values}) => (
                    <form onSubmit={handleSubmit}>
                        {/* {JSON.stringify(values)} */}
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <Field 
                                    fullWidth 
                                    label="Buscar Socio*" 
                                    name="socioId" 
                                    validate={required} 
                                    component={TextFieldAdapter} 
                                    autoFocus 
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field 
                                    fullWidth 
                                    label="Saldo Inicial*" 
                                    name="saldo" 
                                    validate={required} 
                                    component={TextFieldAdapter} 
                                />
                            </Grid>            
                            <Grid item xs={12} sm={6}>
                                <Field 
                                    fullWidth 
                                    label="Saldo Minimo*" 
                                    name="saldoMinimo" 
                                    component={TextFieldAdapter} 
                                />
                            </Grid>            
                            <Grid item xs={12} sm={6}>
                                <Field 
                                    fullWidth 
                                    label="Interes*" 
                                    name="interes" 
                                    component={TextFieldAdapter} 
                                />
                            </Grid>             
                            <Grid item xs={12} sm={6}>
                                <Field 
                                    fullWidth 
                                    label="Tipo Ahorro*" 
                                    name="tipoAhorro" 
                                    component={TextFieldAdapter} 
                                />
                            </Grid>            
                            <Grid item xs={12}>
                                <Field 
                                    fullWidth 
                                    label="Observación" 
                                    name="observacion" 
                                    multiline 
                                    rows={4} 
                                    component={TextFieldAdapter} 
                                />
                            </Grid>            
                        </Grid> 

                        <Box sx={{pt: 4, textAlign: 'center'}}>
                            <Button type="submit" variant="contained" fullWidth color="secondary">Guardar cambios</Button>
                        </Box>
                    </form>
                )} 
            />

            </Paper>
        </Dialog>
    )
}

export default CajaAhorroVistaFormModal
