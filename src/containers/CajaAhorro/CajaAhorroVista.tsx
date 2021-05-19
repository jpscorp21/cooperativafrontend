import { Box, Button, TableCell, Typography } from "@material-ui/core"
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
    const elem = document.createElement("a");
    elem.href = `${BASE_URL}cajaahorrovista/detalles/${row.id}/reporte`;
    elem.target = "_blank";
    elem.click();    
  }

  const handleRetirar = () => {
    setRetiroFormData(detalleInitialForm(cajaAhorro))

    setOpenRetiroModal(true);
  }

  const handleDepositar = () => {
    setDepositoFormData(detalleInitialForm(cajaAhorro))

    setOpenDepositoModal(true);
  }

  const onSubmitDeposito = async (values: any, form: FormApi) => {
    if (!Number(values.importe)) {
      return;
    }

    const params = {
      body: {
        importe: Number(values.importe),
        observacion: ''
      },
      id: cajaAhorro?.id
    }

    depositar.mutate(params, {
      onSuccess() {    
        setOpenDepositoModal(false); 
        queryClient.invalidateQueries('cajaAhorros');   
        queryClient.invalidateQueries('cajaAhorroDetalles');   
        form.restart();
      },

    })
  }

  const onSubmitRetiro = async (values: any, form: FormApi) => {    

    if (!Number(values.importe)) {
      return;
    }

    const params = {
      body: {
        importe: Number(values.importe),
        observacion: ''
      },
      id: cajaAhorro?.id
    }

    retirar.mutate(params, {
      onSuccess() {    
        setOpenRetiroModal(false); 
        queryClient.invalidateQueries('cajaAhorros');   
        queryClient.invalidateQueries('cajaAhorroDetalles');   
        form.restart();
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
      align: 'right'
    }
  ], [])

  const columnsDetalle = useMemo(() => [
    {
      key: 'numOperacion',
      label: 'N°'
    },
    {
      key: 'fechaOperacion',
      label: 'Fecha'
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
      align: 'right'
    },
    {
      key: 'tasa',
      label: 'Tasa',
      align: 'right'
    },
    {
      key: 'saldoAnterior',
      label: 'Saldo Anterior',
      align: 'right'
    },
    {
      key: 'saldoActual',
      label: 'Saldo Actual',
      align: 'right'
    }        
  ], [])

  return (
    <>
      <TituloContainer>Ahorro a la Vista</TituloContainer>

      <Box px={2} pb={2} display="flex" alignItems="center">        
          <SociosAutocomplete onChange={handleChangeSocio} />         
      </Box>
      
      {
        socio && socio.id
        ? (
          <>            
            <Box px={2} pb={2} display="flex" alignItems="center">                
              <Button           
                variant="contained" 
                size="small" 
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

            <Box sx={{px: 2}}>
              <CustomTable                 
                columns={columns} 
                data={cajaAhorros || []}    
                count={1}  
                hover
                onClickRow={fetchDetalle}
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
