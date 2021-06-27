import { Box, Button, Dialog, DialogActions, Grid, Paper, Typography } from "@material-ui/core"
import { useEffect, useMemo, useState } from "react";
import { Field, useForm, useFormState } from "react-final-form";
import { useDispatch } from "react-redux";
import { ConceptosAPI } from "../../api/services/ConceptosAPI";
import { PagareAPI } from "../../api/services/PagareAPI";
import { PlanCuentaAPI } from "../../api/services/PlanCuentaAPI";
import TextFieldAdapter from "../../components/control/TextFieldAdapter";
import CustomAutocomplete from "../../components/CustomAutocomplete";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import { IConcepto } from "../../models/concepto-model";
import useBackend from "../../shared/hooks/useBackend";
import { alertActions } from "../../slices/alert.slice";

type CobranzasConceptoFormModalProps = {
    open: boolean;
    onHide(e: any): void;
    onAceptar(cuenta?: string): void;
}

const CobranzasConceptoFormModal = ({open, onHide, onAceptar}: CobranzasConceptoFormModalProps) => {

    const dispatch = useDispatch();
    const form = useForm();
    const {values} = useFormState();
    const {data: conceptos, setParams} = useBackend(ConceptosAPI);
    const [pagare, setPagare] = useState<any[]>([]);
    const [pagareDetalle, setPagareDetalle] = useState<any[]>([]);
    const [pagareDetalleSelected, setPagareDetalleSelected] = useState<any>([]);

    const esAporteOSolidaridad = (values.detalle.descripcion.indexOf('aporte') > -1 || values.detalle.descripcion.indexOf('solidaridad') > -1)

    // Quitar el pagare
    useEffect(() => {        
        setPagare([]);
    }, [onHide])

    const quitarDetalle = (row: any) => {

        console.log(row);
        
        const detalles = values.detalles
        .filter((x: any) => Number(x.numItem) !== Number(row.numItem))
        .map((x: any, index: number) => ({...x, numItem: index + 1})); 

        form.change('detalles', [...detalles]);
    }

    const getTipoPlanCuenta = async (item: {socioId: string, conceptoNombre: string}) => {
        try {


            if (values.detalle.planCuentaId) {
                return;
            }

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

            if (item.conceptoNombre === 'pagare') {                                
                setPagare([...data]);                                
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

    const fetchDetalle = async (row: any) => {
        try {
            form.change('detalle.planPagoId', row.planPagoId);
            const data = await PagareAPI.getDeudasById(row.id); 
            setPagareDetalle([...data])

        } catch(e) {
            console.log(e);
        }
    }

    const handleCheckboxRow = (items: any) => {
        setPagareDetalleSelected([...items]);
        console.log(items);
    }
    
    const onAceptarPagare = () => {

        if (!pagareDetalleSelected.length) {
            return;
        }

        const newDetalles = [...pagareDetalleSelected];
        
        const dataForSave: any[] = newDetalles.map((detalle, index) => {
            return {
              monto: detalle.montoCuota,
              montoCuota: detalle.montoCuota,
              idDetalle: detalle.id,
              numItem: values.detalles.length + (index + 1),
              mostrarImporte: false, 
              planCuentaId: values.detalle.planCuentaId,
              conceptoId: values.detalle.conceptoId,
              concepto: values.detalle.concepto,
              cuota: detalle.numCuota,
              descripcion: 'credito ' + detalle.numCuota + '/' + values.detalle.plazo,
              cobranzaId: '',
            }
        })

        console.log('dataForSave', dataForSave);
        
        form.change('detalles', [
            ...values.detalles,
            {...values.detalle, numItem: values.detalles.length + 1}            
        ])
    }
    


    const columns = useMemo(() => [
        {
            key: 'codigo',
            label: 'N°',                
        },
        {
            key: 'titular',
            label: 'Titular',          
        },
        {
            key: 'plazo',
            label: 'Plazo',          
        },
        {
            key: 'total',
            label: 'Total',                      
        },                                 
    ] as ColumnCustomTable[], []) 

    const columnsDetalle = useMemo(() => [
        {
            key: 'fechaVencimiento',
            label: 'Fecha vencimiento',                
        },
        {
            key: 'numCuota',
            label: 'Cuota',          
        },
        {
            key: 'interes',
            label: 'Interes',          
        },
        {
            key: 'monto',
            label: 'Monto',          
        },                                 
    ] as ColumnCustomTable[], []) 

    return (
        <>
            <Dialog open={open} onClose={onHide} fullWidth>
                <Paper elevation={6} sx={{p: 2}}>
                    {/* <pre>{JSON.stringify(values.detalle, null, 2)}</pre> */}
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
                        {pagare && pagare.length ? (
                            <>

                                <Grid item xs={12}>
                                    <Box>
                                        <CustomTable 
                                            columns={columns} 
                                            data={pagare} 
                                            paginate={false} 
                                            hover
                                            onClickRow={fetchDetalle}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} mt={0}>                                    
                                    <Box>
                                        <CustomTable 
                                            columns={columnsDetalle} 
                                            data={pagareDetalle} 
                                            paginate={false}  
                                            onCheckboxRow={handleCheckboxRow}                                                                                       
                                        />
                                    </Box>
                                </Grid>
                            </>
                        ): null}                        
                    </Grid> 
                    <DialogActions sx={{mt:2}}>
                        
                        <Button onClick={onHide} disabled={false}>Cancelar</Button>                                                
                        {
                            pagareDetalle && pagareDetalle.length ? (
                                <Button onClick={() => onAceptarPagare()} disabled={!values?.detalle?.planCuentaId} variant="contained">
                                    Aceptar
                                </Button>        
                            ) : (
                                <Button onClick={() => onAceptar('pagare')} disabled={!values?.detalle?.planCuentaId} variant="contained">
                                    Aceptar
                                </Button>
                            )
                        }
                        </DialogActions>     
                </Paper>
            </Dialog>
        </>
    )
}

export default CobranzasConceptoFormModal
