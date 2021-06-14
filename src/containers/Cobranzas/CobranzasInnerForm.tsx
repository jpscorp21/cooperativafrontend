import { Box, Button, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { useEffect, useMemo, useState } from 'react'
import { Field, useForm, useFormState } from 'react-final-form';
import { useQuery } from 'react-query';
import { SociosAPI } from '../../api/services/SociosAPI';
import DatePickerAdapter from '../../components/control/DatePickerAdapter';
import TextFieldAdapter from '../../components/control/TextFieldAdapter';
import SociosAutocomplete from '../../components/SociosAutocomplete';
import { ISocio } from '../../models/socio-model';
import { required } from '../../utils/errorMessages';
import useSearchText from '../../utils/hooks/useSearchText';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import { FieldArray } from 'react-final-form-arrays';
import { FacturasAPI } from '../../api/services/FacturasAPI';
import { red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import useBackend from '../../shared/hooks/useBackend';
import { ConceptosAPI } from '../../api/services/ConceptosAPI';
import CustomAutocomplete from '../../components/CustomAutocomplete';
import { cobranzaInitialDetalle } from './cobranzas-data';
import CobranzasConceptoFormModal from './CobranzasConceptoFormModal';
import CustomTable, { ColumnCustomTable } from '../../components/CustomTable';
import AccionesCell from '../../components/AccionesCell';

const CobranzasInnerForm = () => {

    const [searchQuery, setSearchText] = useSearchText();  
    const [socioId, setSocioId] = useState<any>(null);
    const [openConceptoFormModal, setOpenConceptoFormModal] = useState(false);

    const form = useForm();
    const {values} = useFormState();

    const {data: socios} = useQuery(
        ['socio', searchQuery], 
        () => SociosAPI.getAll({searchQuery, pageSize: 50, pageNumber: 1}),
        {
          keepPreviousData: true,             
        }
    );

    const {data: conceptos, setParams} = useBackend(ConceptosAPI);

    useEffect(() => {
        getUltimaFactura();
    }, [])

    useEffect(() => {
        const total = values?.detalles?.reduce((ant: any, actual: any) => {
            console.log(actual);
            return Number(ant) + Number(actual.monto);
        }, 0);

        console.log(total);

    }, [values.detalle])

    const closeOpenConceptoFormModal = () => {
        form.change('detalle', cobranzaInitialDetalle())
        setOpenConceptoFormModal(false);
    }
    
    const handleChangeSocio = (socio: ISocio) => {
        if (socio) {          
            console.log(socio);            
            form.change('socio', socio)                                                                                       
            form.change('socioId', socio.id)            
            setSocioId(socio.id);            
        }
    }

    // const addDetalle = () => {
    //     setOpenConceptoFormModal(true);
    //     // form.change('detalles', [
    //     //     ...values.detalles,
    //     //     cobranzaInitialDetalle()            
    //     // ])
    // }

    const quitarDetalle = (row: any) => {

        console.log(row);
        
        const detalles = values.detalles
        .filter((x: any) => Number(x.numItem) !== Number(row.numItem))
        .map((x: any, index: number) => ({...x, numItem: index + 1})); 

        form.change('detalles', [...detalles]);
    }

    const getUltimaFactura = async () => {
        try {

            const data = await FacturasAPI.getUltimaFactura();
    
            if (!data) return null;
    
            form.change('facturaId', data.id);
            form.change('nroFactura', data.ultimoNro);
        } catch(e) {
            console.log(e)
        }
    }

    const addDetalle = () => {
        // console.log(values.detalle);       
        form.change('detalles', [
            ...values.detalles,
            {...values.detalle, numItem: values.detalles.length + 1}            
        ])

        form.change('detalle', cobranzaInitialDetalle());
        setOpenConceptoFormModal(false);
    }

    const handleEditar = (item: any) => {
        form.change('detalle', {...item});
        setOpenConceptoFormModal(true);
    }

    const columns = useMemo(() => [
        {
          key: 'numItem',
          label: 'N°',          
        },
        {
          key: 'descripcion',
          label: 'Cuenta',
          render: (item: any) => (
            <TableCell>
              <span style={{cursor: 'pointer', paddingTop: '8px'}} onClick={() => handleEditar(item)}><b>{item.descripcion}</b></span>
            </TableCell>
          )          
        },
        {
          key: 'monto',
          label: 'Monto',          
        },
        {
          key: 'montoCuota',
          label: 'Monto cuota',          
        },
        {
            key: 'cuota',
            label: 'Cuota',          
        },                
        {
          key: 'acciones',
          label: 'Acciones',
          align: 'right',
          render: (item: any) => <AccionesCell item={item} onEditar={handleEditar} onEliminar={quitarDetalle} />
        },
    ] as ColumnCustomTable[], []) 
    

    return (
        <>
            <Paper sx={{p: 2}}>
                <pre>
                    {/* {JSON.stringify(values, null, 2)} */}
                </pre>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
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
                        {
                            values.socio && values.socio.id 
                            ? (
                                <Typography component="p" py={2}>
                                    <b>{values.socio.nombre + ' ' + values.socio.apellido}</b><br />
                                    <span style={{color: '#777'}}>N°: {values.socio?.codigo} - Documento: {values.socio.cedula}</span><br />                  
                                </Typography>
                            ) : null
                        }                                                                               
                    </Grid>
                    <Grid item xs={12} sm={2} md={5} lg={5}></Grid>
                    <Grid item xs={12} sm={4} md={3} lg={3}>
                        
                        <Field 
                            fullWidth 
                            label="Nro Factura" 
                            name="nroFactura" 
                            readOnly
                            component={TextFieldAdapter}                             
                        />         
                        <Box mt={3}>
                            <Field 
                                fullWidth 
                                label="Fecha" 
                                name="fecha" 
                                readOnly
                                className="mt-1"                                
                                component={DatePickerAdapter}  
                            />                   
                        </Box>               
                    </Grid>                        
                    {/* <Grid item xs={12} sm={6}>
                    </Grid>                     */}                    
                </Grid>
                           
                <Box pt={3}>
                    <CustomTable
                        columns={columns}
                        data={values.detalles || []}
                        paginate={false}
                    />                    
                </Box>  
                <Box pt={2} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                    <Button 
                        type="button"
                        variant="text" 
                        size="small"  
                        onClick={() => setOpenConceptoFormModal(true)}  
                        disabled={!values.socioId}                 
                        startIcon={<AddIcon />}                                
                    >
                        Agregar cuenta
                    </Button>            
                    <Box 
                        border= '1px solid #ddd'
                        p={2}
                    >
                        <Box textAlign="right" sx={{display: 'flex',flexDirection: 'column'}}>
                            <Typography fontSize="14px" pb={1} component="span">Subtotal: <b>Gs. 100000</b></Typography>
                            <Typography fontSize="14px">Total: <b>Gs. 100000</b></Typography>
                        </Box>
                    </Box>            
                </Box>                         
                <Box pt={2} textAlign="right">
                    <Button 
                        type="submit"
                        variant="contained" 
                        size="small"                                             
                        startIcon={<SaveIcon />}                                
                    >
                        Guardar
                    </Button>            
                </Box>                                      
            </Paper>

            <CobranzasConceptoFormModal 
                open={openConceptoFormModal}
                onHide={closeOpenConceptoFormModal}
                onAceptar={addDetalle}
            />
        </>
    )
}

export default CobranzasInnerForm
