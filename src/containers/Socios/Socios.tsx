import { Box, Paper, Stack, TableCell } from '@material-ui/core';
import { useMemo, useState } from 'react'
import { useHistory } from 'react-router';
import { SociosAPI } from '../../api/services/SociosAPI';
import AccionesCell from '../../components/AccionesCell';
import ButtonActionContainer from '../../components/ButtonActionContainer';
import ConfirmDialog from '../../components/ConfirmDialog';
import CustomTable, { ColumnCustomTable } from '../../components/CustomTable';
import Spacer from '../../components/Spacer';
import TituloContainer from '../../components/TituloContainer'
import useBackend from '../../shared/hooks/useBackend';
import BusquedaInput from '../../components/BusquedaInput';


const Socios = () => {

    const history = useHistory();    

    const {data, remove, setParams, refresh} = useBackend(SociosAPI);
    
    const [openConfirmModal, setOpenConfirmModal] = useState(false) 
    const [dataSelected, setDataSelected] = useState<any>(null);

    const handleNew = () => {
        history.push('/socios/form');
    }

    const handleEditar = (item: any) => {
        setDataSelected({...item});      
        history.push(`/socios/form/${item.id}`);  
    }

    const handleOpenConfirmEliminar = (item: any) => {
        setDataSelected({...item});
        setOpenConfirmModal(true);
      }
    
    const handleEliminar = () => {
        remove.mutate(dataSelected.id, {
              onSuccess() {      
              setOpenConfirmModal(false);      
              refresh();           
            }
        }) 
    }

    const columns = useMemo(() => [
        {
          key: 'codigo',
          label: 'N°',          
        },
        {
          key: 'nombre',
          label: 'Socio',            
          render: (item: any) => (
            <TableCell>
              <span style={{cursor: 'pointer', paddingTop: '8px'}} onClick={() => handleEditar(item)}>{item.nombre + ' ' + item.apellido}</span>
            </TableCell>
          )
        },                  
        {
          key: 'cedula',
          label: 'Documento',                      
        },                  
        {
          key: 'lugar',
          label: 'Dirección',                      
        },                          
        {
          key: 'acciones',
          label: 'Acciones',
          align: 'right',
          render: (item: any) => <AccionesCell item={item} onEditar={() => handleEditar(item)} onEliminar={handleOpenConfirmEliminar} />
        },
        // eslint-disable-next-line
    ] as ColumnCustomTable[], [])  

    return (
        <>
            <TituloContainer>Socios</TituloContainer>

            <Paper sx={{mx: 2, pb: 2}}>
              <Stack spacing={2} direction={{xs: 'column', sm: 'row'}} sx={{px: 2, py: 2}}>
                <BusquedaInput 
                  placeholder="Buscar socio" 
                  onChange={(value) => setParams(value, 'searchQuery')}
                />                
                <Spacer />          
                <ButtonActionContainer onNew={handleNew} onRefresh={refresh} />                        
              </Stack>
              <Box>
                  <CustomTable 
                      page={data?.currentPage}  
                      count={data?.totalPages} 
                      columns={columns} 
                      data={data?.items ? data?.items : []} 
                      totalCount={data?.totalCount}
                      onPageChange={(value) => setParams(value, 'pageNumber')}
                  />  
              </Box>      
            </Paper>
            
            <ConfirmDialog 
                openModal={openConfirmModal}
                onAceptar={handleEliminar}
                message="Estás seguro de eliminar está solicitud?"
                handleCloseModal={() => setOpenConfirmModal(false)}
            />
        </>
    )
}

export default Socios
