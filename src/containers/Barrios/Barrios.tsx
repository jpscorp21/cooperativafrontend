import { Box, Button, TableCell, TextField } from "@material-ui/core"
import { useState, useMemo } from "react";
import AccionesCell from "../../components/AccionesCell";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import TituloContainer from "../../components/TituloContainer";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import BarriosFormModal from "./BarriosFormModal";
import { FormApi } from "final-form";
import useBackend from "../../shared/hooks/useBackend";
import { CiudadesAPI } from "../../api/services/CiudadesAPI";
import queryClient from "../../config/queryClient";
import { BarriosAPI } from "../../api/services/BarriosAPI";
import ConfirmDialog from "../../components/ConfirmDialog";

const initialForm = () => ({
  descripcion: '',
  observacion: '',
  ciudadId: ''
})

const Barrios = () => {

  const {data, create, remove, update, setParams, key} = useBackend(BarriosAPI);  
  const {data: ciudades} = useBackend(CiudadesAPI);  

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
    // {
    //   key: 'ciudadId',
    //   label: 'Ciudad',      
    //   render: (item: any) => (
    //     <TableCell>
    //       <span style={{cursor: 'pointer', paddingTop: '8px'}} onClick={() => handleEditar(item)}>{item.ciudad}</span>
    //     </TableCell>
    //   )      
    // },    
    {
      key: 'acciones',
      label: 'Acciones',
      align: 'right',
      render: (item: any) => <AccionesCell item={item} onEditar={handleEditar} onEliminar={handleOpenConfirmEliminar} />
    },
  ] as ColumnCustomTable[], [])

  return (
    <>
      <TituloContainer>Barrios</TituloContainer>

      <ButtonActionContainer onNew={handleNew}>
        <Button variant="outlined" size="small" color="secondary" sx={{mb: 2, ml: 1}}  >Ciudad</Button>
      </ButtonActionContainer>      

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar" size="small" />
      </Box>           

      {/* TABLA */}
      <Box sx={{px: 2}}>
        <CustomTable 
          page={data?.currentPage}  
          count={data?.totalPages} 
          columns={columns} 
          data={data?.items ? data?.items : []} 
          onPageChange={(value) => setParams(value, 'pageNumber')}
        />  
      </Box>

      <BarriosFormModal 
        openModal={openModal} 
        handleCloseModal={handleCloseModal} 
        onSubmit={onSubmit} 
        formData={formData}
        ciudades={ciudades?.items || []}
      ></BarriosFormModal>

      <ConfirmDialog 
        openModal={openConfirmModal}
        onAceptar={handleEliminar}
        message="Estás seguro de eliminar está ciudad?"
        handleCloseModal={() => setOpenConfirmModal(false)}
      />
    </>
  )
}
 
export default Barrios