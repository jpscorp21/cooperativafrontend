import { Button, Dialog, DialogActions, Grid, Paper, Typography } from "@material-ui/core"
import { Field, useForm, useFormState } from "react-final-form";
import { useDispatch } from "react-redux";
import { ConceptosAPI } from "../../api/services/ConceptosAPI";
import { PlanCuentaAPI } from "../../api/services/PlanCuentaAPI";
import TextFieldAdapter from "../../components/control/TextFieldAdapter";
import CustomAutocomplete from "../../components/CustomAutocomplete";
import { IConcepto } from "../../models/concepto-model";
import useBackend from "../../shared/hooks/useBackend";
import { alertActions } from "../../slices/alert.slice";

type CobranzasConceptoFormModalProps = {
    open: boolean;
    onHide(e: any): void;
    onAceptar(): void;
}

const CobranzasConceptoFormModal = ({open, onHide, onAceptar}: CobranzasConceptoFormModalProps) => {

    const dispatch = useDispatch();
    const form = useForm();
    const {values} = useFormState();
    const {data: conceptos, setParams} = useBackend(ConceptosAPI);

    const esAporteOSolidaridad = values.detalle && (values.detalle.descripcion === 'aporte' || values.detalle.descripcion === 'solidaridad')

    const getTipoPlanCuenta = async (item: {socioId: string, conceptoNombre: string}) => {
        try {
            const data = await PlanCuentaAPI.getPlanCuentaDetalleBySocio(item);
    
            if (!data[0]) {            
                console.log("El socio no tiene una cuenta de " + item.conceptoNombre)     
                dispatch(alertActions.open({message: "El socio no tiene una cuenta de " + item.conceptoNombre}))       
                return;
            }        

            if (item.conceptoNombre === 'aporte' || item.conceptoNombre === 'solidaridad') {
                const cuenta = data[0];
                form.change('detalle.planCuentId', cuenta.planCuentaId);
                form.change('detalle.descripcion', item.conceptoNombre);


            }

        } catch(e) {
            console.log(e);
        }
    }

    const handleCambioConcepto = async (value: IConcepto) => {
        form.change('detalle.conceptoId', value.id);
        await getTipoPlanCuenta({
            socioId: values.socioId, 
            conceptoNombre: value.descripcion
        });
    }



    return (
        <>
            <Dialog open={open} onClose={onHide} fullWidth>
                <Paper elevation={6} sx={{p: 2}}>
                    {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                    <Typography variant="h5" component="h5" sx={{pb: 4}}>
                        Nueva cuenta             
                    </Typography>  

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Field 
                                name={`detalle.concepto`}                                                                                                               
                                render={({input}) => (
                                    <CustomAutocomplete 
                                        options={conceptos?.items || []}                                                    
                                        fullWidth={true}
                                        autoFocus
                                        label="Cuenta"
                                        value={input.value}
                                        optionLabel="descripcion"
                                        optionSelected="id"
                                        onInputChange={(value) => setParams(value, 'searchQuery')}
                                        onChange={(value) => {                                    
                                            if (value) {
                                                input.onChange(value);
                                                handleCambioConcepto(value);
                                            }
                                        }}
                                    />
                                )}                                             
                            />
                        </Grid>
                        <Grid item xs={12}>
                            {esAporteOSolidaridad ? (
                                <Field 
                                    fullWidth 
                                    label={'Monto'}
                                    placeholder="Monto" 
                                    name={`detalle.monto`}                                 
                                    component={TextFieldAdapter}                                             
                                />
                            ): null}
                        </Grid>
                    </Grid> 
                    <DialogActions sx={{mt:2}}>
                        <Button onClick={onHide} disabled={false}>Cancelar</Button>
                        <Button onClick={onAceptar} disabled={false} variant="contained">
                            Aceptar
                        </Button>
                        </DialogActions>     
                </Paper>
            </Dialog>
        </>
    )
}

export default CobranzasConceptoFormModal
