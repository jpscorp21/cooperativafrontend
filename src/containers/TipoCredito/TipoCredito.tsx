import { Box, Paper, Stack, TableCell, TextField } from "@material-ui/core"
import { useState, useMemo } from "react";
import AccionesCell from "../../components/AccionesCell";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import TituloContainer from "../../components/TituloContainer";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import TipoCreditoFormModal from "./TipoCreditoFormModal";
import { FormApi } from "final-form";
import queryClient from "../../config/queryClient";
import ConfirmDialog from "../../components/ConfirmDialog";
import useBackend from "../../shared/hooks/useBackend";
import { ModalidadPagoAPI } from "../../api/services/ModalidadPagoAPI";
import { TipoCreditoAPI } from "../../api/services/TipoCreditoAPI";
import BusquedaInput from "../../components/BusquedaInput";
import Spacer from "../../components/Spacer";

const initialForm = () => ({ 
  descripcion: ''
})

const TipoCredito = () => {
  const {data, create, remove, update, setParams, refresh} = useBackend(TipoCreditoAPI);

  const {data: modalidadPago} = useBackend(ModalidadPagoAPI);

  const [openModal, setOpenModal] = useState(false)
  const [openConfirmModal, setOpenConfirmModal] = useState(false) 
  const [formData, setFormData] = useState<any>(initialForm()); 

  const handleNew = () => {
    setFormData(initialForm());
    setOpenModal(true);
  }

  const handleEditar = (item: any) => {
    setFormData({...item});
    setOpenModal(true);
  }

  const handleOpenConfirmEliminar = (item: any) => {
    setFormData({...item});
    setOpenConfirmModal(true);
  }

  const handleEliminar = () => {
    remove.mutate(formData.id, {
      onSuccess() {      
        setOpenConfirmModal(false);      
        refresh();
      }
    }) 
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }  

  const onSubmit = async (values: any, form: FormApi) => {   
        
    if (values.id) {
      update.mutate(({body: values, id: values.id}), {
        onSuccess() {    
          handleCloseModal();     
          refresh();
          form.reset();
        }
      }) 
      return;
    }

    create.mutate(values, {
      onSuccess() {    
        handleCloseModal();     
        refresh();
        form.reset();
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
      key: 'acciones',
      label: 'Acciones',
      align: 'right',
      render: (item: any) => <AccionesCell item={item} onEditar={handleEditar} onEliminar={handleOpenConfirmEliminar} />
    },
  ] as ColumnCustomTable[], [])

  return (
    <>
      <TituloContainer>Tipo Crédito</TituloContainer>

      <Paper sx={{mx: 2, pb: 2}}>
        <Stack spacing={2} direction={{xs: 'column', sm: 'row'}} sx={{px: 2, py: 2}}>
          <BusquedaInput 
            placeholder="Buscar tipo crédito" 
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
      <TipoCreditoFormModal
         openModal={openModal}
         handleCloseModal={handleCloseModal}
         onSubmit={onSubmit}
         modalidadPago={modalidadPago?.items || []}
         formData={formData}
         />
    
      <ConfirmDialog 
        openModal={openConfirmModal}
        onAceptar={handleEliminar}
        message="Estás seguro de eliminar este Tipo de Crédito?"
        handleCloseModal={() => setOpenConfirmModal(false)}
      />
    </>
  )
}
 
export default TipoCredito
