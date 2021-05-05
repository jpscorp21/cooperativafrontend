import { Box, TableCell, TextField } from "@material-ui/core"
import { useMemo, useState } from "react"
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import AccionesCell from "../../components/AccionesCell";
import TituloContainer from "../../components/TituloContainer";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import NacionalidadesFormModal from "./NacionalidadesFormModal";
import { FormApi } from "final-form";
import queryClient from "../../config/queryClient";
import ConfirmDialog from "../../components/ConfirmDialog";
import { NacionalidadesAPI } from "../../api/services/NacionalidadesAPI";
import useBackend from "../../shared/hooks/useBackend";
const initialForm = () => ({
  descripcion: '',
  observacion: ''
}) 

const Nacionalidades = () => {

  const {data, create, remove, update, setParams, key} = useBackend(NacionalidadesAPI);

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
        queryClient.invalidateQueries(key)           
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
          queryClient.invalidateQueries(key)   
          form.reset();
        }
      }) 
      return;
    }

    create.mutate(values, {
      onSuccess() {    
        handleCloseModal();     
        queryClient.invalidateQueries(key)   
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
      {/* TITULO */}
      
      <TituloContainer>Nacionalidades</TituloContainer>

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />                

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

      <NacionalidadesFormModal                                                          
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        onSubmit={onSubmit}
        formData={formData}
      />

      <ConfirmDialog 
        openModal={openConfirmModal}
        onAceptar={handleEliminar}
        message="Estás seguro de eliminar está ciudad?"
        handleCloseModal={() => setOpenConfirmModal(false)}
      />

    
  </>
  )
}
 
export default Nacionalidades
