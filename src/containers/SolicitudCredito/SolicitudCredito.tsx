import { Box, Chip, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, Stack, TableCell } from "@material-ui/core";
import { ChangeEvent, useMemo, useState } from "react"
import { useHistory } from "react-router";
import { SolicitudCreditoAPI } from "../../api/services/SolicitudCreditoAPI";
import AccionesCell from "../../components/AccionesCell";
import BusquedaInput from "../../components/BusquedaInput";
import ButtonActionContainer from "../../components/ButtonActionContainer"
import ConfirmDialog from "../../components/ConfirmDialog";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import Spacer from "../../components/Spacer";
import TituloContainer from "../../components/TituloContainer"
import useBackend from "../../shared/hooks/useBackend";
import PrintIcon from '@material-ui/icons/Print';
import { SolicitudEstados } from "../../utils/constants";
import SolicitudCreditoDialogPrint from "./SolicitudCreditoDialogPrint";
import { BASE_URL } from "../../api";

const SolicitudCredito = () => {

  const history = useHistory();

  const {data, setParams, refresh} = useBackend(SolicitudCreditoAPI);

  const [openConfirmModal, setOpenConfirmModal] = useState(false) 
  const [dataSelected, setDataSelected] = useState<any>(null);  
  const [estadoSelected, setEstadoSelected] = useState('pendiente')  
  const [openPrint, setOpenPrint] = useState(false);

  const handleChangeEstadoSelect = (e: ChangeEvent<{value: string}>) => {
    setEstadoSelected(e.target.value);
  }

  const handleNew = () => {
    history.push('/solicitudcredito/form')
  }  

  const handleEditar = (item: any) => {
    setDataSelected({...item});      
    history.push(`/solicitudcredito/form/${item.id}`);  
  }

  const handleOpenConfirmEliminar = (item: any) => {
    setDataSelected({...item});
    setOpenConfirmModal(true);
  }

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
      render: (item: any) => (
        <TableCell sx={{py: 1, cursor: 'pointer'}} onClick={() => handleEditar(item)}>
          <span>
            <b>{item.nombreCompleto}</b> <br />
            <span style={{color: '#777'}} >{item.credito}</span>            
          </span> 
        </TableCell>
      )
      
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
      label: 'Importe',                   
    },        
    {
      key: 'plazo',
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
        <AccionesCell item={item} onEditar={handleEditar} onEliminar={handleOpenConfirmEliminar}>
          <IconButton size="small" color="primary" onClick={() => {
            setDataSelected({...item});
            setOpenPrint(true);
          }}>
            <PrintIcon color="primary"></PrintIcon>
          </IconButton>
        </AccionesCell>
      )
    },
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
                value={estadoSelected}              
                onChange={handleChangeEstadoSelect}
                
            >
              <MenuItem value={'pendiente'} selected>Pendientes</MenuItem>
              <MenuItem value={'aprobado'}>Aprobados</MenuItem>
              <MenuItem value={'rechazado'}>Rechazados</MenuItem>
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
        openModal={openConfirmModal}
        onAceptar={handleEliminar}
        message="Estás seguro de eliminar esté socio?"
        handleCloseModal={() => setOpenConfirmModal(false)}
      />
      <SolicitudCreditoDialogPrint 
        open={openPrint}
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
