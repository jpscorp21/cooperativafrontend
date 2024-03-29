import { Box, Paper, Stack } from "@material-ui/core";
import { useMemo, useState } from "react";
import AccionesCell from "../../components/AccionesCell";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import TituloContainer from "../../components/TituloContainer";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import PuestoLaboralFormModal from "./PuestoLaboralFormModal";
import { FormApi } from "final-form";
import { ProfesionesAPI } from "../../api/services/ProfesionesAPI";
import useBackend from "../../shared/hooks/useBackend";
import ConfirmDialog from "../../components/ConfirmDialog";
import { PuestosLaboralesAPI } from "../../api/services/PuestosLaboralesAPI";
import BusquedaInput from "../../components/BusquedaInput";
import Spacer from "../../components/Spacer";


const initialForm = () => ({
  descripcion: '',
  profesionId: '',
  observacion: ''
})

const PuestoLaboral = () => {

  const {data, create, update, remove, setParams, refresh} = useBackend(PuestosLaboralesAPI);
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
          

      <Paper sx={{mx: 2, pb: 2}}>
        <Stack spacing={2} direction={{xs: 'column', sm: 'row'}} sx={{px: 2, py: 2}}>
          <BusquedaInput 
            placeholder="Buscar puesto laboral" 
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
