import { Box, MenuItem, Paper, Select, Stack, TableCell, TextField } from "@material-ui/core";
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

const SolicitudCredito = () => {

  const history = useHistory();

  const {data, remove, setParams, refresh} = useBackend(SolicitudCreditoAPI);

  const [openConfirmModal, setOpenConfirmModal] = useState(false) 
  const [dataSelected, setDataSelected] = useState<any>(null);  
  const [estadoSelected, setEstadoSelected] = useState('pendiente')  

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
  
  const columns = useMemo(() => [
    {
      key: 'codigo',
      label: 'Codigo',          
    },
    {
      key: 'nombreCompleto',
      label: 'Socio', 
      render: (item: any) => (
        <TableCell sx={{py: 1}}>
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
    },        
    {
      key: 'acciones',
      label: 'Acciones',
      align: 'right',
      render: (item: any) => <AccionesCell item={item} onEditar={handleEditar} onEliminar={handleOpenConfirmEliminar} />
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
           <Select                 
              value={estadoSelected}
              onChange={handleChangeEstadoSelect}
              label="ciudad"          
            >
                  <MenuItem value={'pendiente'} selected>Pendientes</MenuItem>
                  <MenuItem value={'aprobado'}>Aprobados</MenuItem>
                  <MenuItem value={'rechazado'}>Rechazados</MenuItem>
            </Select>  
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
    </>
  )
}
 
export default SolicitudCredito
