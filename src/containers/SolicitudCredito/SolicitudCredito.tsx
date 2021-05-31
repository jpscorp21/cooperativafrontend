import { Box, MenuItem, Select, TableCell, TextField } from "@material-ui/core";
import { ChangeEvent, useMemo, useState } from "react"
import { useHistory } from "react-router";
import { SolicitudCreditoAPI } from "../../api/services/SolicitudCreditoAPI";
import AccionesCell from "../../components/AccionesCell";
import ButtonActionContainer from "../../components/ButtonActionContainer"
import ConfirmDialog from "../../components/ConfirmDialog";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
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

      <ButtonActionContainer onNew={handleNew} onRefresh={refresh} />             

      <Box px={2} pb={2} display="flex" alignItems="center">
        <TextField sx={{bgcolor: 'white', mr: 1}} placeholder="Buscar" size="small" />
        <Select                 
          value={estadoSelected}
          onChange={handleChangeEstadoSelect}
          label="ciudad"          
        >
              <MenuItem value={'pendiente'} selected>Pendientes</MenuItem>
              <MenuItem value={'aprobado'}>Aprobados</MenuItem>
              <MenuItem value={'rechazado'}>Rechazados</MenuItem>
        </Select>             
      </Box> 

      <Box sx={{px: 2}}>      
        <CustomTable 
            page={data?.currentPage}  
            count={data?.totalPages} 
            columns={columns} 
            data={data ? data : []} 
            onPageChange={(value) => setParams(value, 'pageNumber')}
        />  
      </Box>      

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
