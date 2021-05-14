import { Box, TableCell, TextField } from '@material-ui/core';
import React, { useMemo, useState } from 'react'
import { useHistory } from 'react-router';
import { SociosAPI } from '../../api/services/SociosAPI';
import AccionesCell from '../../components/AccionesCell';
import ButtonActionContainer from '../../components/ButtonActionContainer';
import ConfirmDialog from '../../components/ConfirmDialog';
import CustomTable, { ColumnCustomTable } from '../../components/CustomTable';
import TituloContainer from '../../components/TituloContainer'
import queryClient from '../../config/queryClient';
import useBackend from '../../shared/hooks/useBackend';

const Socios = () => {

    const history = useHistory();

    const {data, create, remove, update, setParams, key} = useBackend(SociosAPI);
    
    const [openConfirmModal, setOpenConfirmModal] = useState(false) 
    const [dataSelected, setDataSelected] = useState<any>(null);

    const handleNew = () => {
        history.push('/socios/form');
    }

    const handleEditar = (item: any) => {
        setDataSelected({...item});        
    }

    const handleOpenConfirmEliminar = (item: any) => {
        setDataSelected({...item});
        setOpenConfirmModal(true);
      }
    
    const handleEliminar = () => {
        remove.mutate(dataSelected.id, {
            onSuccess() {      
            setOpenConfirmModal(false);      
            queryClient.invalidateQueries(key)           
            }
        }) 
    }

    const columns = useMemo(() => [
        {
          key: 'codigo',
          label: 'Codigo',          
        },
        {
          key: 'descripcion',
          label: 'Descripcion',            
          render: (item: any) => (
            <TableCell>
              <span style={{cursor: 'pointer', paddingTop: '8px'}} onClick={() => handleEditar(item)}>{item.descripcion}</span>
            </TableCell>
          )
        },        
        {
          key: 'observacion',
          label: 'Observación',                  
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
            <TituloContainer>Socios</TituloContainer>

            <ButtonActionContainer onNew={() => handleNew()}/>

            <Box px={2} pb={2}> 
                <TextField sx={{bgcolor: 'white'}} onChange={(event) => setParams(event.target.value, 'searchQuery')} fullWidth placeholder="Buscar una ciudad" size="small" />
            </Box>       

            <Box sx={{px: 2}}>
                <CustomTable 
                    page={data?.currentPage}  
                    count={data?.totalPages} 
                    columns={columns} 
                    data={data?.items ? data?.items : []} 
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

export default Socios
