import { Box, Button, IconButton, TableCell, Typography } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import { FormApi } from "final-form";
import { useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { BASE_URL } from "../../api";
import { CajaAhorroVistaAPI } from "../../api/services/CajaAhorroVistaAPI";
import CustomTable from "../../components/CustomTable";
import SociosAutocomplete from "../../components/SociosAutocomplete";
import TituloContainer from "../../components/TituloContainer"
import queryClient from "../../config/queryClient";
import { ICajaAhorroVista } from "../../models/caja-ahorro-vista-model";
import { ISocio } from "../../models/socio-model";
import CajaAhorroVistaDepositoModal from "./CajaAhorroVistaDepositoModal";
import CajaAhorroVistaFormModal from "./CajaAhorroVistaFormModal";
import CajaAhorroVistaRetiroModal from "./CajaAhorroVistaRetiroModal";
import PrintIcon from '@material-ui/icons/Print';
import { coma, date, imprimir } from "../../utils/utils";


const initialForm = () => ({  
  saldo: '',
  socioId: '',  
  interes: '0.5',
  saldoMinimo: '500000',
  tipoAhorro: 0,
  observacion: ''
})

const detalleInitialForm = (data: any = {}) => ({  
  cuentaAhorro: data?.cuentaAhorro || '',
  importe: '',
  saldo: data?.saldo,
})

const CajaAhorroVista = () => {

  const [openModal, setOpenModal] = useState(false);
  const [openRetiroModal, setOpenRetiroModal] = useState(false);
  const [openDepositoModal, setOpenDepositoModal] = useState(false);  
  const [formData, setFormData] = useState(initialForm())
  const [retiroFormData, setRetiroFormData] = useState(detalleInitialForm());
  const [depositoFormData, setDepositoFormData] = useState(detalleInitialForm());
  const [socio, setSocio] = useState<ISocio | null>(null);
  const [cajaAhorro, setCajaAhorro] = useState<ICajaAhorroVista | null>(null);  

  const cajaAhorroVistaAdd = useMutation((body: any) => CajaAhorroVistaAPI.add(body))
  const {data: cajaAhorros} = useQuery(['cajaAhorros', socio?.id], () => CajaAhorroVistaAPI.getCajaAhorroVistaBySocio(socio?.id))
  const {data: cajaAhorroDetalles} = useQuery(['cajaAhorroDetalles', cajaAhorro?.id], () => CajaAhorroVistaAPI.getDetallesByCajaAhorroId(cajaAhorro?.id))
  const depositar = useMutation((params: any) => CajaAhorroVistaAPI.depositar(params.body, params.id))
  const retirar = useMutation((params: any) => CajaAhorroVistaAPI.retirar(params.body, params.id))

  const handleCloseModal = (e: any) => {    
    setOpenModal(false);
  }

  const onSubmit = async (values: any, form: FormApi) => {
    console.log(values);
    console.log(form);

    cajaAhorroVistaAdd.mutate(values, {
      onSuccess() {    
        queryClient.invalidateQueries('cajaAhorros');   
        setOpenModal(false);    
        form.restart();
      },

    })
  } 

  const handleChangeSocio = (value: ISocio) => {
    console.log(value);
    setSocio(value);
    setCajaAhorro(null);
  }

  const nuevaCajaAhorro = () => {
    if (!socio) {
      return;
    }

    setFormData({...formData, socioId: socio.id || ''});
    setOpenModal(true);
  }

  const fetchDetalle = (item: any) => {
    if (!item) {
      return;
    }    

    setCajaAhorro(item);
  }

  const imprimirReporteDetalle = (row: any) => {
    imprimir(`${BASE_URL}cajaahorrovista/detalles/${row.id}/reporte`);    
  }

  const imprimirMovimiento = (row: any) => {
    imprimir(`${BASE_URL}cajaahorrovista/detalles/${row.id}/movimientos`);    
  }

  const handleRetirar = () => {
    setRetiroFormData(detalleInitialForm(cajaAhorro))

    setOpenRetiroModal(true);
  }

  const handleDepositar = () => {
    setDepositoFormData(detalleInitialForm(cajaAhorro)) 

    setOpenDepositoModal(true);
  }

  const prepareBody = (values: any) => {    
    return {
      body: {
        importe: Number(values.importe),
        observacion: ''
      },
      id: cajaAhorro?.id
    }
  }

  const onSuccessOperation = (data: any, form: FormApi) => {
    if (data && data.id) {
      imprimirReporteDetalle(data);
      setOpenDepositoModal(false); 
      setOpenRetiroModal(false); 
      queryClient.invalidateQueries('cajaAhorros');   
      queryClient.invalidateQueries('cajaAhorroDetalles');   
      form.restart();
    }
  }

  const onSubmitDeposito = async (values: any, form: FormApi) => {
    if (!Number(values.importe)) {
      return;
    }

    const params = prepareBody(values);

    depositar.mutate(params, {
      onSuccess(data) {    
        onSuccessOperation(data, form);
      },
    })
  }

  const onSubmitRetiro = async (values: any, form: FormApi) => {    

    if (!Number(values.importe)) {
      return;
    }

    const params = prepareBody(values);

    retirar.mutate(params, {
      onSuccess(data) {    
        onSuccessOperation(data, form);
      },

    })
  }
  

  const columns = useMemo(() => [
    {
      key: 'codigo',
      label: 'Cod.'
    },
    {
      key: 'cuentaAhorro',
      label: 'Cuenta'
    },
    {
      key: 'tipoAhorro',
      label: 'Tipo',
      render: (item: any) => (
        <TableCell>
          <span>Individual</span>
        </TableCell>
      )
    },    
    {
      key: 'saldo',
      label: 'Saldo',
      align: 'right',
      format: (value: any) => coma(value.saldo)              
    },
    {
      key: 'acciones',   
      label: 'Acciones',   
      align: 'right',
      render: (item: any) => (
        <TableCell align="right" sx={{minWidth: '100px'}}>           
          <IconButton size="small" color="primary" onClick={() => imprimirMovimiento(item)}>
            <PrintIcon color="primary"></PrintIcon>
          </IconButton>           
        </TableCell>
      )
    }, 
       
  ], [])

  const columnsDetalle = useMemo(() => [
    {
      key: 'numOperacion',
      label: 'N°'
    },
    {
      key: 'fechaOperacion',
      label: 'Fecha',
      format: (value: any) => date(new Date(value.fechaOperacion))      
    },
    {
      key: 'tipoOperacion',
      label: 'Operación',
      render: (item: any) => (
        <TableCell>
          <span>{item.tipoOperacion === 'D' ? 'Depósito' : 'Retiro'}</span>
        </TableCell>
      )
    }, 
  
    {
      key: 'importe',
      label: 'Importe',
      align: 'right',
      format: (value: any) => coma(value.importe)  
    },
    {
      key: 'tasa',
      label: 'Tasa',
      align: 'right'
    },    
    {
      key: 'saldoActual',
      label: 'Saldo',
      align: 'right',
      format: (value: any) => coma(value.saldoActual)  
    },        
    {
      key: 'acciones',   
      label: 'Acciones',   
      align: 'right',
      render: (item: any) => (
        <TableCell align="right" sx={{minWidth: '100px'}}>           
          <IconButton size="small" color="primary" onClick={() => imprimirReporteDetalle(item)}>
            <PrintIcon color="primary"></PrintIcon>
          </IconButton>           
        </TableCell>
      )
    },        
  ], [])

  return (
    <>
      <TituloContainer>Ahorro a la Vista</TituloContainer>

      <Box px={2} pb={2} display="flex" alignItems="center">        
          <SociosAutocomplete 
            value={socio} 
            onChange={handleChangeSocio} 
          />         
      </Box>
      
      {
        socio && socio.id
        ? (
          
          <>            
            <Box px={2} pb={1} display="flex" justifyContent="space-between">              
              <Typography component="p">
                  <b>{socio.nombre + ' ' + socio.apellido}</b><br />
                  <span style={{color: '#777'}}>N°: {socio?.codigo}</span><br />
                  <span style={{color: '#777'}}>Documento: {socio.cedula}</span>
              </Typography>
              
              <Button           
                variant="contained" 
                size="small" 
                sx={{alignSelf: 'center'}}
                color="secondary"          
                onClick={nuevaCajaAhorro} 
                startIcon={<AddIcon />}>
                Nueva caja de ahorro
              </Button>            
            </Box>            

            <CajaAhorroVistaFormModal 
              openModal={openModal} 
              handleCloseModal={handleCloseModal} 
              onSubmit={onSubmit}
              formData={formData}
              socio={socio}
            />

            <Box px={2} py={1}>
              <Typography variant="h6" component="h5" fontSize={18} fontWeight={'bolder'}>
                Cuentas
              </Typography> 
            </Box>

            <Box sx={{px: 2}} pb={1}>
              <CustomTable                 
                columns={columns} 
                data={cajaAhorros || []}    
                count={1}  
                hover
                onClickRow={fetchDetalle}
                paginate={false}
              />  
            </Box>  

            {
              cajaAhorro && cajaAhorro.id 
              ? (
                <>
                  <Box px={2} py={1}>
                    <Typography variant="h6" component="h5" fontSize={18} fontWeight={'bolder'}>
                      Detalles de la cuenta
                    </Typography>                                         
                  </Box>
                  <Box px={2} pb={2} >
                    <Button 
                      variant="contained" 
                      size="small"
                      sx={{mr: 1}}
                      onClick={handleRetirar} 
                      color="secondary">
                      Retirar
                    </Button>
                    <Button
                      variant="contained" 
                      size="small" 
                      onClick={handleDepositar} 
                      color="secondary">
                      Depositar
                    </Button>
                  </Box>
                  <Box sx={{px: 2}}>
                    <CustomTable                 
                      columns={columnsDetalle} 
                      data={cajaAhorroDetalles || []}    
                      count={1}                                              
                    />  
                  </Box>  
                </>
              )
              : null
            }
          </>          
        ) 
        : null
      }

      <CajaAhorroVistaDepositoModal
        openModal={openDepositoModal}
        handleCloseModal={() => setOpenDepositoModal(false)}
        onSubmit={onSubmitDeposito}
        formData={depositoFormData}
      />

      <CajaAhorroVistaRetiroModal
        openModal={openRetiroModal}
        handleCloseModal={() => setOpenRetiroModal(false)}
        onSubmit={onSubmitRetiro}
        formData={retiroFormData}
      />      
    </>
  )
}
 
export default CajaAhorroVista
