import { Box, Chip, FormControl, IconButton, MenuItem, Paper, Select, Stack, TableCell } from "@material-ui/core";
import { ChangeEvent, useMemo, useState } from "react"
import { useHistory } from "react-router";
import { SolicitudCreditoAPI } from "../../api/services/SolicitudCreditoAPI";
import BusquedaInput from "../../components/BusquedaInput";
import ButtonActionContainer from "../../components/ButtonActionContainer"
import ConfirmDialog from "../../components/ConfirmDialog";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import Spacer from "../../components/Spacer";
import TituloContainer from "../../components/TituloContainer"
import PrintIcon from '@material-ui/icons/Print';
import { SolicitudEstados } from "../../utils/constants";
import SolicitudCreditoDialogPrint from "./SolicitudCreditoDialogPrint";
import { BASE_URL } from "../../api";
import useSolicitudCreditoParams from "../../shared/hooks/useSolicitudCreditoParams";
import { useMutation, useQuery } from "react-query";
import queryClient from "../../config/queryClient";
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { blue, red } from "@material-ui/core/colors";
import { coma } from "../../utils/utils";
import { ISolicitudCredito } from "../../models/solicitud-credito-model";
import { mapSolicitudForUpdateEstado } from "./solicitudcredito-map";


const SolicitudCredito = () => {

  const history = useHistory();

  const {params, setParams, resetParams} = useSolicitudCreditoParams();

  const {data} = useQuery([SolicitudCreditoAPI.key, params], () => SolicitudCreditoAPI.getAll(params), {keepPreviousData: true});                           
  const cambiarEstado = useMutation(SolicitudCreditoAPI.cambiarEstado);

  const [openConfirmAprobarModal, setOpenConfirmAprobarModal] = useState(false) 
  const [openConfirmRechazarModal, setOpenConfirmRechazarModal] = useState(false) 
  const [dataSelected, setDataSelected] = useState<any>(null);    
  const [openPrint, setOpenPrint] = useState(false);

  const handleChangeEstadoSelect = (e: ChangeEvent<{value: string}>) => {
    setParams(e.target.value, 'estadoSolicitud');
  }

  const handleNew = () => {
    history.push('/solicitudcredito/form')
  }
  
  const refresh = () => {
    queryClient.invalidateQueries(SolicitudCreditoAPI.key);
  }

  const handleEditar = (item: any) => {
    setDataSelected({...item});      
    history.push(`/solicitudcredito/form/${item.id}`);  
  }

  const handleOpenConfirmAprobarModal = (item: ISolicitudCredito) => {
    setDataSelected(item);
    setOpenConfirmAprobarModal(true);
  }

  const handleOpenConfirmRechazarModal = (item: ISolicitudCredito) => {
    setDataSelected(item);
    setOpenConfirmRechazarModal(true);
  }

  const handleAprobar = () => {
    setOpenConfirmAprobarModal(false);
    
    if (!dataSelected) {
      return;
    }


    const solicitudForUpdate: any = mapSolicitudForUpdateEstado(dataSelected, 'APR');

    cambiarEstado.mutate(solicitudForUpdate, {
      onSuccess() {
        refresh();
        resetParams();
      }
    })
  }

  const handleRechazar = () => {
    setOpenConfirmRechazarModal(false);    

    if (!dataSelected) {
      return;
    }

    const solicitudForUpdate: any = mapSolicitudForUpdateEstado(dataSelected, 'REC');

    cambiarEstado.mutate(solicitudForUpdate, {
      onSuccess() {
        refresh();
        resetParams();
      }
    })
    
  }
  
  

  // const handleOpenConfirmEliminar = (item: any) => {
  //   setDataSelected({...item});
  //   setOpenConfirmModal(true);
  // }

  const handleEliminar = () => {

  }

  const imprimir = (url: string) => {
    const elem = document.createElement("a");
    elem.href = `${BASE_URL}${url}`;
    elem.target = "_blank";
    elem.click();
  }
  
  const columns = useMemo(() => [
    {
      key: 'codigo',
      label: 'Codigo',          
    },
    {
      key: 'nombreCompleto',
      label: 'Socio', 
      // render: (item: any) => (
      //   <TableCell sx={{py: 1, cursor: 'pointer'}} onClick={() => handleEditar(item)}>
      //     <span>
      //       <b>{item.nombreCompleto}</b> <br />
      //       <span style={{color: '#777'}} >{item.credito}</span>            
      //     </span> 
      //   </TableCell>
      // )
      
    },
    {
      key: 'credito',
      label: 'Tipo Crédito',          
    },            
    {      
      key: 'modalidad',
      label: 'Modalidad',          
    },            
    {      
      key: 'importe',
      align: 'right',
      label: 'Importe',
      format: (value: any) => coma(value.importe)                       
    },        
    {
      key: 'plazo',
      align: 'right',
      label: 'Plazo',                  
    },        
    {
      key: 'estadoSolicitud',
      label: 'Estado', 
      render: (item: any) => (
        <TableCell sx={{py: 1, cursor: 'pointer'}} onClick={() => handleEditar(item)}>
          <span>
            <Chip 
              label={SolicitudEstados[item.estadoSolicitud].label || ''} 
              sx={{background: SolicitudEstados[item.estadoSolicitud].background, 
                  color: 'white'
              }} />
            
            
          </span> 
        </TableCell>
      )                 
    },              
    {
      key: 'acciones',
      label: 'Acciones',
      align: 'right',
      render: (item: any) => (
        <TableCell align="right">
          <IconButton size="small" color="primary" onClick={() => {
            setDataSelected({...item});
            setOpenPrint(true);
          }}>
            <PrintIcon color="primary"></PrintIcon>
          </IconButton>
          {
            (item.estadoSolicitud === 'APR' || item.estadoSolicitud === 'REC') && (
              <IconButton size="small" color="primary"> 
                <RemoveRedEyeIcon color="primary"></RemoveRedEyeIcon>
              </IconButton>
            )
          }
          {
            item.estadoSolicitud === 'PEN' && (
              <IconButton size="small" color="primary">
                <EditIcon color="primary"></EditIcon>
              </IconButton>
            )
          }
          {
            item.estadoSolicitud === 'PEN' && (
              <>
                <IconButton size="small" color="primary" onClick={() => handleOpenConfirmAprobarModal(item)}>
                  <CheckIcon sx={{color: blue[400]}} color="primary"></CheckIcon>
                </IconButton>
                <IconButton size="small" color="primary" onClick={() => handleOpenConfirmRechazarModal(item)}>
                  <CloseIcon sx={{color: red[700]}} ></CloseIcon>
                </IconButton>
              </>
            )
          }
        </TableCell>
      )
    },
    // eslint-disable-next-line
  ] as ColumnCustomTable[], [])

  return (
    <>
      <TituloContainer>Solicitud Crédito</TituloContainer> 

      <Paper sx={{mx: 2, pb: 2}}>
        <Stack spacing={2} direction={{xs: 'column', sm: 'row'}} sx={{px: 2, py: 2}}>
          <BusquedaInput 
            placeholder="Buscar solicitud crédito" 
            onChange={(value) => setParams(value, 'searchQuery')}
          />
          <FormControl variant="outlined" size="small">
            {/* <InputLabel id="demo-simple-select-label"></InputLabel>                */}
            <Select                 
                value={params.estadoSolicitud}              
                onChange={handleChangeEstadoSelect}
                
            >
              <MenuItem value={'PEN'} selected>Pendientes</MenuItem>
              <MenuItem value={'APR'}>Aprobados</MenuItem>
              <MenuItem value={'REC'}>Rechazados</MenuItem>
            </Select>  
          </FormControl>
          <Spacer />          
          <ButtonActionContainer onNew={handleNew} onRefresh={refresh} />                        
        </Stack>
        <Box>
            <CustomTable 
                page={data?.currentPage}  
                count={data?.totalPages} 
                columns={columns} 
                data={data ? data : []} 
                totalCount={data?.totalCount}
                onPageChange={(value) => setParams(value, 'pageNumber')}
            />  
        </Box>      
      </Paper>                  

      <ConfirmDialog 
        openModal={openConfirmAprobarModal}
        onAceptar={handleAprobar}
        message="Estás seguro de aprobar está solicitud?"
        handleCloseModal={() => setOpenConfirmAprobarModal(false)}
      />

      <ConfirmDialog 
        openModal={openConfirmRechazarModal}
        onAceptar={handleRechazar}
        message="Estás seguro de rechazar está solicitud?"
        handleCloseModal={() => setOpenConfirmRechazarModal(false)}
      />
      <SolicitudCreditoDialogPrint 
        open={openPrint}
        solicitud={dataSelected}
        onHide={() => setOpenPrint(false)}
        onPrint={(url: string) => {
          if (dataSelected && dataSelected.id) {
            imprimir(url + dataSelected.id);
          }
        }}
      />
    </>
  )
}
 
export default SolicitudCredito
