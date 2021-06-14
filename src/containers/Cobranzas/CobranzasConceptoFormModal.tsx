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

    const quitarDetalle = (row: any) => {

        console.log(row);
        
        const detalles = values.detalles
        .filter((x: any) => Number(x.numItem) !== Number(row.numItem))
        .map((x: any, index: number) => ({...x, numItem: index + 1})); 

        form.change('detalles', [...detalles]);
    }

    const getTipoPlanCuenta = async (item: {socioId: string, conceptoNombre: string}) => {
        try {
            const data = await PlanCuentaAPI.getPlanCuentaDetalleBySocio(item);
    
            if (!data[0]) {            
                console.log("El socio no tiene una cuenta de " + item.conceptoNombre)     
                dispatch(alertActions.open({message: "El socio no tiene una cuenta de " + item.conceptoNombre}))       
                return;
            }        

            if (item.conceptoNombre === 'aporte' || item.conceptoNombre === 'solidaridad') {


                const existeConcepto = values.detalles.find((det: any) => det.descripcion.indexOf(item.conceptoNombre) > -1);
                if (existeConcepto) {
                    console.log('existe concepto', existeConcepto);
                    quitarDetalle(existeConcepto);
                }

                const cuenta = data[0];

                const date = new Date();
                const mes = date.getMonth() + 1;
                const anho = date.getFullYear();
                form.change('detalle.planCuentaId', cuenta.planCuentaId);
                form.change('detalle.descripcion', item.conceptoNombre + ' ' + mes + '/' + anho);


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
                    <pre>{JSON.stringify(values.detalle, null, 2)}</pre>
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
                        <Button onClick={onAceptar} disabled={!values?.detalle?.planCuentaId} variant="contained">
                            Aceptar
                        </Button>
                        </DialogActions>     
                </Paper>
            </Dialog>
        </>
    )
}

export default CobranzasConceptoFormModal
