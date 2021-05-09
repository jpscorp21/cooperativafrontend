import { Box, Grid, Paper, TextField } from '@material-ui/core'
import { FormApi } from 'final-form'
import { useState } from 'react';
import { Field, Form } from 'react-final-form'
import TextFieldAdapter from '../../components/control/TextFieldAdapter';
import TituloContainer from '../../components/TituloContainer'
import { required } from '../../utils/errorMessages';

const initialForm = () => ({
    socioId: '',
    modalidadPagoId: '',
    tipoSolicitudId: '',
    tipoGarantiaId: '',
    funcionarioId: '',
    tipoCreditoId: '',
    desembolsoCreditoId: '',
    importe: '',
    plazo: '',
    fechaPrimerPago: new Date().toISOString(),
    observacion: ''
});

const SolicitudCreditoForm = () => {    

    const [formData, ] = useState<any>(initialForm());

    const onSubmit = async (values: any, form: FormApi) => {   
        console.log(values)
        form.reset();
    }    
    

    return (
        <>
            <TituloContainer>Formulario Solicitud Crédito</TituloContainer>

            <Box sx={{px: 2}}>
                <Paper sx={{p: 2}}>
                    <Form
                        initialValues={{...formData}}
                        onSubmit={onSubmit}
                        render={({handleSubmit, values}) => (
                            <form onSubmit={handleSubmit}>
                                {JSON.stringify(values)}
                                <Grid container>
                                    <Grid item xs={12} sx={{mb:2}}>
                                        <Field 
                                            validate={required} 
                                            fullWidth 
                                            label="Buscar Socio*" 
                                            name="socioId" 
                                            component={TextFieldAdapter} 
                                        />
                                    </Grid>                        
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sx={{mb:2}}>
                                        <Field 
                                            validate={required} 
                                            fullWidth 
                                            label="Buscar Codeudor*" 
                                            name="socioId" 
                                            component={TextFieldAdapter} 
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sx={{mb:2}}>
                                        <Field 
                                            validate={required} 
                                            fullWidth 
                                            label="Desembolso Crédito*" 
                                            name="desembolsoCreditoId" 
                                            component={TextFieldAdapter} 
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sx={{mb:2}}>
                                        <Field 
                                            validate={required} 
                                            fullWidth 
                                            label="Tipo Solicitud*" 
                                            name="tipoSolicitudId" 
                                            component={TextFieldAdapter}  
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sx={{mb:2}}>
                                        <Field 
                                            fullWidth 
                                            validate={required} 
                                            label="Tipo Garantía*" 
                                            name="tipoGarantiaId" 
                                            component={TextFieldAdapter}  
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sx={{mb:2}}>
                                        <Field 
                                            fullWidth 
                                            validate={required}
                                            label="Tipo Crédito" 
                                            name="tipoCreditoId" 
                                            component={TextFieldAdapter}  
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sx={{mb:2}}>
                                        <Field 
                                            validate={required} 
                                            component={TextFieldAdapter} 
                                            fullWidth 
                                            label="Importe" 
                                            name="importe" 
                                        />
                                    </Grid> 
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sx={{mb:2}}>
                                        <Field 
                                            fullWidth 
                                            label="Plazo" 
                                            name="plazo" 
                                            component={TextFieldAdapter} 
                                            validate={required} 
                                        />
                                    </Grid> 
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sx={{mb:2}}>
                                        <Field 
                                            fullWidth 
                                            label="Fecha Primer Pago" 
                                            name="fechaPrimerPago" 
                                            component={TextFieldAdapter}  
                                        />
                                    </Grid> 
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sx={{mb:2}}>
                                        <Field 
                                            fullWidth 
                                            label="Observación" 
                                            multiline 
                                            name="observacion" 
                                            rows={4} 
                                            component={TextFieldAdapter}
                                        />
                                    </Grid> 
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sx={{mb:2}}>
                                        <TextField fullWidth label="Total Capital" name="totalCapital" rows={4} disabled/>
                                    </Grid> 
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sx={{mb:2}}>
                                        <TextField fullWidth label="Total Interes" name="totalInteres" size="small" rows={4} disabled/>
                                    </Grid> 
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sx={{mb:2}}>
                                        <TextField fullWidth label="Total Gastos" name="totalGastos" size="small" rows={4} disabled/>
                                    </Grid> 
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sx={{mb:2}}>
                                        <TextField fullWidth label="Total" name="total" size="small" rows={4} disabled/>
                                    </Grid> 
                                </Grid>
                            </form>
                        )}
                    />
                </Paper>
            </Box>
        </>
    )
}

export default SolicitudCreditoForm
