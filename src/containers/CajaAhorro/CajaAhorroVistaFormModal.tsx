import { Box, Button, Dialog, Grid, Paper, Typography } from '@material-ui/core'
import { FormApi } from 'final-form';
import { useMemo, useState } from 'react';
import { Field, Form } from 'react-final-form';
import ConfirmDialog from '../../components/ConfirmDialog';
import SelectAdapter from '../../components/control/SelectAdapter';
import TextFieldAdapter from '../../components/control/TextFieldAdapter';
import { FormModalProps } from '../../types';
import { required } from '../../utils/errorMessages';

type CajaAhorroVistaFormModalProps = FormModalProps & {
    onSubmit: any;
    formData: any;
    socio: any;
}

const CajaAhorroVistaFormModal = ({openModal, handleCloseModal, onSubmit, formData, socio}: CajaAhorroVistaFormModalProps) => {

    const [openConfirmModal, setOpenConfirmModal] = useState(false);    
    const [cacheSubmit, setCacheSubmit] = useState<{values: any, form: FormApi} | null>(null);

    const tiposAhorros = useMemo(() => [
        {id: 0, descripcion: 'Ahorro Individual'}
    ], []);

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

            <Form
                onSubmit={handleSubmitConfirm}
                initialValues={{...formData}}
                render={({handleSubmit, values}) => (
                    <form onSubmit={handleSubmit}>
                        {/* {JSON.stringify(values)} */}
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <Box>
                                    <Typography component="h5" variant="h5">
                                        {socio?.nombre} {socio?.apellido}
                                    </Typography>
                                    <Typography component="p" sx={{pb: 2}}>
                                        N° Socio: {socio?.codigo} <br/>
                                        Documento: {socio?.cedula}
                                    </Typography>

                                    <Typography variant="h6" component="h5">
                                        Habilitar Caja de Ahorro
                                    </Typography>          
                                </Box>
                                {/* <TextField 
                                    fullWidth 
                                    label="Buscar Socio*" 
                                    name="socioId"
                                    value={(socio?.nombre || '') + ' ' + (socio?.apellido || '')}                                     
                                    inputProps={{"aria-readonly": true}}
                                /> */}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field 
                                    type="number"
                                    fullWidth 
                                    label="Saldo Inicial*" 
                                    name="saldo" 
                                    autoFocus
                                    validate={required} 
                                    component={TextFieldAdapter} 
                                />
                            </Grid>            
                            <Grid item xs={12} sm={6}>
                                <Field 
                                    type="number"
                                    fullWidth 
                                    label="Saldo Minimo" 
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
                                    options={tiposAhorros}
                                    optionlabel="descripcion"
                                    optionvalue="id"
                                    component={SelectAdapter} 
                                    disabled
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
                            <Button type="submit" variant="contained" fullWidth color="secondary">Habilitar</Button>                            
                        </Box>
                    </form>
                )} 
            />
            <ConfirmDialog 
                openModal={openConfirmModal}
                onAceptar={handleAceptar}
                message="Estás seguro de crear una caja de ahorro a la vista?"
                handleCloseModal={() => setOpenConfirmModal(false)}
            />

            </Paper>
        </Dialog>
    )
}

export default CajaAhorroVistaFormModal
