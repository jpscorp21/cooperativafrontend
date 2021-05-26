import { Box, Button, Grid, Paper, TextField } from '@material-ui/core'
import { FormApi } from 'final-form'
import { useState } from 'react';
import { Field, Form } from 'react-final-form'
import DatePickerAdapter from '../../components/control/DatePickerAdapter';
import TextFieldAdapter from '../../components/control/TextFieldAdapter';
import SociosAutocomplete from '../../components/SociosAutocomplete';
import TituloContainer from '../../components/TituloContainer'
import SaveIcon from '@material-ui/icons/Save';
import { required } from '../../utils/errorMessages';
import CustomAutocomplete from '../../components/CustomAutocomplete';
import { useQuery } from 'react-query';
import useSearchText from '../../utils/hooks/useSearchText';
import { SociosAPI } from '../../api/services/SociosAPI';
import { solicitudCreditoInitialForm } from './solicitudcredito-map';
import { TipoCreditoAPI } from '../../api/services/TipoCreditoAPI';
import useBackend from '../../shared/hooks/useBackend';
import { TipoGarantiaAPI } from '../../api/services/TipoGarantiaAPI';
import { TipoSolicitudAPI } from '../../api/services/TipoSolicitudAPI';
import SelectAdapter from '../../components/control/SelectAdapter';
import { ISocio } from '../../models/socio-model';
import { CajaAhorroVistaAPI } from '../../api/services/CajaAhorroVistaAPI';

const SolicitudCreditoForm = () => {    

    const [searchQuery, setSearchText] = useSearchText();    
    const [formData, setFormData] = useState<any>(solicitudCreditoInitialForm());    
    const [socioId, setSocioId] = useState<any>(null);

    const onSubmit = async (values: any, form: FormApi) => {           
        form.restart();
    }    

    const {data: socios} = useQuery(
        ['socio', searchQuery], 
        () => SociosAPI.getAll({searchQuery, pageSize: 50, pageNumber: 1}),
        {
          keepPreviousData: true
        }
    );

    const {data: tiposCreditos} = useBackend(TipoCreditoAPI);
    const {data: tiposGarantias} = useBackend(TipoGarantiaAPI);    
    const {data: tiposSolicitudes} = useBackend(TipoSolicitudAPI);
    const {data: cajaAhorroVistas} = useQuery(
        ['cajaahorrovista', socioId], () => CajaAhorroVistaAPI.getCajaAhorroVistaBySocio(socioId || ''),
        {
            onSuccess(data) {
                if (data && data[0]) {
                    setFormData({...formData, desembolsoCreditoId: data[0].id});
                }
                console.log(data);
            }
        }
    )

    const handleChangeSocio = (socio: ISocio, input: any, form: FormApi) => {
        if (socio) {                         
            input.onChange(socio)                                                                                       
            form.change('socioId', socio.id)
            setSocioId(socio.id);
        }
    } 
        
    return (
        <>
            <TituloContainer>Formulario Solicitud Crédito</TituloContainer>

            <Box sx={{px: 2}}>
                    <Form
                        initialValues={{...formData}}                        
                        onSubmit={onSubmit}
                        render={({handleSubmit, values, form}) => (
                            <form onSubmit={handleSubmit}>                                
                            <Paper sx={{p: 2}}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field
                                            validate={required}
                                            name="socio" 
                                            render={({input}) => (
                                                <SociosAutocomplete
                                                    value={input.value}  
                                                    autoFocus={true}                                                     
                                                    name="socio"                                                        
                                                    onChange={(socio) => handleChangeSocio(socio, input, form)}
                                                />         
                                            )}
                                        />                                                                                
                                    </Grid>                        
                                    <Grid item xs={12}>
                                        <Field 
                                            name="codeudores" 
                                            render={({input}) => (
                                                <CustomAutocomplete
                                                    multiple                                            
                                                    options={socios?.items || []}
                                                    label="Codeudores"
                                                    value={input.value}                                                    
                                                    optionLabel="nombre_completo"
                                                    optionSelected="id"
                                                    onInputChange={setSearchText}
                                                    onChange={(value) => {
                                                        if (value) {                         
                                                            input.onChange(value)                                                                                       
                                                        }
                                                    }}                                                                                        
                                                />
                                            )}
                                        />                                        
                                    </Grid>                                
                                    
                                    <Grid item xs={12} sm={6}>
                                        <Field 
                                            validate={required} 
                                            fullWidth 
                                            label="Desembolso Crédito*" 
                                            name="desembolsoCreditoId" 
                                            options={cajaAhorroVistas || []}
                                            optionlabel="cuentaAhorro"
                                            optionvalue="id"
                                            disabled={!!!values.socioId}
                                            component={SelectAdapter}                                            
                                        />
                                    </Grid>
                                    
                                    <Grid item xs={6}>
                                        <Field 
                                            fullWidth 
                                            validate={required} 
                                            label="Tipo Solicitud*" 
                                            name="tipoSolicitudId" 
                                            options={tiposSolicitudes?.items || []}
                                            optionlabel="descripcion"
                                            optionvalue="id"
                                            component={SelectAdapter}  
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field 
                                            fullWidth 
                                            validate={required}
                                            label="Tipo Crédito" 
                                            name="tipoCreditoId" 
                                            options={tiposCreditos?.items || []}
                                            optionlabel="descripcion"
                                            optionvalue="id"
                                            component={SelectAdapter}   
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field 
                                            fullWidth 
                                            validate={required} 
                                            label="Tipo Garantía*" 
                                            name="tipoGarantiaId" 
                                            options={tiposGarantias?.items || []}
                                            optionlabel="descripcion"
                                            optionvalue="id"
                                            component={SelectAdapter}   
                                        />
                                    </Grid>
                                        
                                    <Grid item xs={12} sm={6}>
                                        <Field 
                                            validate={required} 
                                            component={TextFieldAdapter} 
                                            fullWidth 
                                            label="Importe" 
                                            name="importe" 
                                        />
                                    </Grid> 
                                    </Grid>
                                    <Grid container spacing={2} mt={0}>
                                        <Grid item sm={6}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={6}>
                                                    <Field 
                                                        fullWidth 
                                                        label="Plazo" 
                                                        name="plazo" 
                                                        component={TextFieldAdapter} 
                                                        validate={required} 
                                                    />
                                                </Grid> 
                                                <Grid item xs={12} sm={6}>
                                                    <Field 
                                                        fullWidth 
                                                        label="Fecha Primer Pago" 
                                                        name="fechaPrimerPago" 
                                                        validate={required} 
                                                        component={DatePickerAdapter}  
                                                    />
                                                </Grid> 
                                                <Grid item xs={12}>
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
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <TextField fullWidth label="Total Capital" name="totalCapital" size="small" disabled/>
                                                </Grid>        
                                                <Grid item xs={12}>
                                                    <TextField fullWidth label="Total Interes" name="totalInteres" size="small" rows={4} disabled/>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField fullWidth label="Total Gastos" name="totalGastos" size="small" rows={4} disabled/>
                                                </Grid> 
                                                <Grid item xs={12}>
                                                    <TextField fullWidth label="Total Gastos" name="totalGastos" size="small" rows={4} disabled/>
                                                </Grid> 
                                                <Grid item xs={12}>
                                                    <TextField fullWidth label="Total" name="total" size="small" rows={4} disabled/>
                                                </Grid> 
                                            </Grid>
                                        </Grid>                                    
                                    </Grid>
                                </Paper>
                                <Box py={2} textAlign="right">
                                    <Button 
                                        type="submit"
                                        variant="contained" 
                                        size="small" 
                                        color="secondary" 
                                        startIcon={<SaveIcon />}                                
                                    >
                                        Guardar
                                    </Button>            
                                </Box>                                                                                                                                                             
                            </form>
                        )}
                    />
            </Box>
        </>
    )
}

export default SolicitudCreditoForm
