import { Box, TextField } from "@material-ui/core";
import { useMemo, useState } from "react";
import AccionesCell from "../../components/AccionesCell";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import TituloContainer from "../../components/TituloContainer";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import PuestoLaboralFormModal from "./PuestoLaboralFormModal";
import { FormApi } from "final-form";
import { ProfesionesAPI } from "../../api/services/ProfesionesAPI";
import useBackend from "../../shared/hooks/useBackend";
import queryClient from "../../config/queryClient";
import ConfirmDialog from "../../components/ConfirmDialog";


const initialForm = () => ({
  descripcion: '',
  profesionId: '',
  observacion: ''
})

const PuestoLaboral = () => {

  const {data, create, update, remove, setParams, key} = useBackend(ProfesionesAPI);
  const {data: profesiones} = useBackend(ProfesionesAPI);

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
      
      <TituloContainer>Puestos Laborales</TituloContainer>
      

      <ButtonActionContainer onNew={handleNew} onRefresh={() => console.log('refrescando')} />                

      <Box px={2} pb={2}>
        <TextField 
        sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar" size="small" />
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

      {/* MODAL  */}
      <PuestoLaboralFormModal 
        openModal={openModal} 
        handleCloseModal={handleCloseModal}
        onSubmit={onSubmit}
        formData={formData}
        profesiones={profesiones?.items || []}
      />

      <ConfirmDialog 
        openModal={openConfirmModal}
        onAceptar={handleEliminar}
        message="Estás seguro de eliminar este puesto laboral?"
        handleCloseModal={() => setOpenConfirmModal(false)}
      />
    
  </>
  )
}
 
export default PuestoLaboral
