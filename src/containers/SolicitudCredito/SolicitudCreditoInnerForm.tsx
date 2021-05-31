import { Box, Button, Grid, Paper, TextField } from "@material-ui/core"
import { Field, useForm, useFormState } from "react-final-form"
import DatePickerAdapter from "../../components/control/DatePickerAdapter"
import SelectAdapter from "../../components/control/SelectAdapter"
import TextFieldAdapter from "../../components/control/TextFieldAdapter"
import CustomAutocomplete from "../../components/CustomAutocomplete"
import SociosAutocomplete from "../../components/SociosAutocomplete"
import { required } from "../../utils/errorMessages"
import SaveIcon from '@material-ui/icons/Save';
import useBackend from "../../shared/hooks/useBackend"
import { TipoCreditoAPI } from "../../api/services/TipoCreditoAPI"
import { TipoGarantiaAPI } from "../../api/services/TipoGarantiaAPI"
import { TipoSolicitudAPI } from "../../api/services/TipoSolicitudAPI"
import { CajaAhorroVistaAPI } from "../../api/services/CajaAhorroVistaAPI"
import { useQuery } from "react-query"
import { useState } from "react"
import { SociosAPI } from "../../api/services/SociosAPI"
import useSearchText from "../../utils/hooks/useSearchText"
import { ISocio } from "../../models/socio-model"
import { ModalidadPagoAPI } from "../../api/services/ModalidadPagoAPI"


const SolicitudCreditoInnerForm = () => {

    const [searchQuery, setSearchText] = useSearchText();    

    const [socioId, setSocioId] = useState<any>(null)

    const form = useForm();
    const {values} = useFormState();

    const {data: socios} = useQuery(
        ['socio', searchQuery], 
        () => SociosAPI.getAll({searchQuery, pageSize: 50, pageNumber: 1}),
        {
          keepPreviousData: true,   
          select(data) {
              if (values && values.socio && values.socio.id && data && data.items) {
                  return {
                      ...data,
                      items: data.items.filter((item: any) => item.id !== values.socio.id)
                  } 
              }

              return data;
          }       
        }
    );
    const {data: tiposCreditos} = useBackend(TipoCreditoAPI);    
    useQuery(ModalidadPagoAPI.key, () => ModalidadPagoAPI.getAll({searchQuery: '', pageNumber: 1, pageSize: 50}), 
    {
        onSuccess: (data) => changeDataId(data, 'modalidadPagoId')
    });
    const {data: tiposGarantias} = useQuery(TipoGarantiaAPI.key, () => TipoGarantiaAPI.getAll({searchQuery: '', pageNumber: 1, pageSize: 50}), 
    {
        onSuccess: (data) => changeDataId(data, 'tipoGarantiaId')
    });

    const {data: tiposSolicitudes} = useQuery(TipoSolicitudAPI.key, () => TipoSolicitudAPI.getAll({searchQuery: '', pageNumber: 1, pageSize: 50}), 
    {
        onSuccess: (data) => changeDataId(data, 'tipoSolicitudId')
    });
    
    const {data: cajaAhorroVistas} = useQuery(
        ['cajaahorrovista', socioId], () => CajaAhorroVistaAPI.getCajaAhorroVistaBySocio(socioId || ''),
        {            
            onSuccess(data) {                
                if (data && data[0]) {
                    form.change('desembolsoCreditoId', data[0].id);                    
                }                                
            }
        }
    )

    const changeDataId = (data: any, key: string) => {
        if (data.items && data.items && data.items[0]) {
            form.change(key, data.items[0].id);                    
        }
    }
 
    const handleChangeSocio = (socio: ISocio) => {
        if (socio) {          
            form.change('desembolsoCreditoId', '');               
            form.change('socio', socio)                                                                                       
            form.change('socioId', socio.id)
            form.change('codeudores', [])
            setSocioId(socio.id);            
        }
    }

    return (
        <>
            <Paper sx={{p: 2}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} mt={1}>
                        <Field
                            validate={required}
                            name="socio" 
                            render={({input}) => (
                                <SociosAutocomplete
                                    value={input.value}  
                                    autoFocus={true}                                                     
                                    name="socio"                                                        
                                    onChange={handleChangeSocio}
                                />         
                            )}
                        />                                                                                
                    </Grid>  
                    {
                        values && values.socio && values.socio.id
                        ? (
                            <>
                                <Grid item xs={12} sm={6}>
                                    {
                                        values.socio && values.socio.id 
                                        ? <TextField fullWidth value={values.socio.codigo} label="N° Socio" name="nombre" size="small" disabled/>                                                                        
                                        : null
                                    }
                                    
                                </Grid>                        
                                <Grid item xs={12} sm={6}>
                                    {
                                        values.socio && values.socio.id 
                                        ? <TextField fullWidth value={values.socio.cedula} label="Cédula" name="nombre" size="small" disabled/>                                                                        
                                        : null
                                    }
                                    
                                </Grid>                        
                            </>
                        )
                        : null
                    }                      
                    <Grid item xs={12} mb={2}>
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
                </Grid>
                <Grid container spacing={2} mb={2} mt={1}>                                                                      
                    <Grid item xs={12} sm={6}>
                        <Field 
                            validate={required} 
                            fullWidth 
                            label="Desembolso Crédito*" 
                            name="cajaAhorroVistaId" 
                            options={cajaAhorroVistas || []}
                            optionlabel="cuentaAhorro"
                            optionvalue="id"
                            disabled={!!!values.socioId}
                            component={SelectAdapter}                                            
                        />
                    </Grid>
                </Grid>    
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
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
                                                                
                </Grid>
                <Grid container spacing={2} mt={2}>
                    
                    <Grid item sm={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Field 
                                    validate={required} 
                                    component={TextFieldAdapter} 
                                    fullWidth 
                                    label="Importe" 
                                    name="importe" 
                                />
                            </Grid> 
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
        </>
    )
}

export default SolicitudCreditoInnerForm

