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

    const closeOpenConceptoFormModal = () => {
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
        console.log(item);
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
              <span style={{cursor: 'pointer', paddingTop: '8px'}} onClick={() => handleEditar(item)}>{item.descripcion}</span>
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
        // {
        //   key: 'descripcion',
        //   label: 'Descripcion',            
        //   render: (item: any) => (
        //     <TableCell>
        //       <span style={{cursor: 'pointer', paddingTop: '8px'}} onClick={() => handleEditar(item)}>{item.descripcion}</span>
        //     </TableCell>
        //   )
        // },        
        {
          key: 'observacion',
          label: 'Observación',                  
        },        
        // {
        //   key: 'acciones',
        //   label: 'Acciones',
        //   align: 'right',
        //   render: (item: any) => <AccionesCell item={item} onEditar={handleEditar} onEliminar={handleOpenConfirmEliminar} />
        // },
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
                    <TableContainer>
                        <Table sx={{ minWidth: 850 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell width="100px">N°</TableCell>
                                    <TableCell width="300px">Cuenta</TableCell>
                                    <TableCell>Monto</TableCell>
                                    <TableCell>Monto Cuota</TableCell>
                                    <TableCell>Cuota</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <FieldArray name="detalles" subscription={{}}>
                                {({fields}) => fields.map((name, index) => (
                                    <TableRow key={name}>
                                        <TableCell width="100px">                                        
                                            <Field 
                                                fullWidth 
                                                placeholder="Código" 
                                                background="#eee"
                                                readOnly
                                                name={`${name}.numItem`} 
                                                component={TextFieldAdapter}                                             
                                            />
                                        </TableCell>
                                        <TableCell width="300px">
                                            <Field 
                                                name={`${name}.concepto`}                                                                                           
                                                render={({input}) => (
                                                    <CustomAutocomplete 
                                                        options={conceptos?.items || []}                                                    
                                                        fullWidth={true}
                                                        value={input.value}
                                                        optionLabel="descripcion"
                                                        optionSelected="id"
                                                        onInputChange={(value) => setParams(value, 'searchQuery')}
                                                        onChange={(value) => {
                                                            console.log(value)
                                                            if (value) {
                                                                input.onChange(value);
                                                            }
                                                        }}
                                                    />
                                                )}                                             
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Field 
                                                fullWidth 
                                                placeholder="Monto" 
                                                name={`${name}.monto`} 
                                                background="#eee"
                                                readOnly
                                                component={TextFieldAdapter}                                             
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Field 
                                                fullWidth 
                                                placeholder="Monto Cuota" 
                                                background="#eee"
                                                readOnly
                                                name={`${name}.montoCuota`} 
                                                component={TextFieldAdapter}                                             
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Field 
                                                fullWidth 
                                                placeholder="Cuota" 
                                                background="#eee"
                                                readOnly
                                                name={`${name}.cuota`} 
                                                component={TextFieldAdapter}                                             
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <IconButton size="small" onClick={() => quitarDetalle(values.detalles[index])}>
                                                <DeleteIcon sx={{color: red[700]}}></DeleteIcon>
                                            </IconButton>  
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </FieldArray>                            
                            </TableBody>
                        </Table>  
                    </TableContainer>                  
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
