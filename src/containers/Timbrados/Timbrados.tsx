import { Box, TableCell, TextField } from "@material-ui/core";
import { FormApi } from "final-form";
import { useMemo, useState } from "react"
import { TimbradosAPI } from "../../api/services/TimbradosAPI";
import AccionesCell from "../../components/AccionesCell";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import ConfirmDialog from "../../components/ConfirmDialog";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import TituloContainer from "../../components/TituloContainer"
import useBackend from "../../shared/hooks/useBackend";
import TimbradosFormModal from "./TimbradosFormModal";

const initialForm = () => ({  
  nroTimbrado: '',
  fechaInicio: new Date().toISOString(),
  fechaFin: new Date().toISOString(),
  observacion: ''
}) 

const Timbrados = () => {

  const {data, create, remove, update, setParams, refresh} = useBackend(TimbradosAPI);

  const [openModal, setOpenModal] = useState(false);
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
      key: 'nroTimbrado',
      label: 'Nro. Timbrado',            
      render: (item: any) => (
        <TableCell>
          <span style={{cursor: 'pointer', paddingTop: '8px'}} onClick={() => handleEditar(item)}>{item.nroTimbrado}</span>
        </TableCell>
      )
    },        
    {
      key: 'fechaInicio',
      label: 'Fecha inicio',                        
    },        
    {
      key: 'fechaFin',
      label: 'Fecha fin',                        
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
      <TituloContainer>Timbrados</TituloContainer>

      <ButtonActionContainer onNew={handleNew} onRefresh={refresh} />              

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar" size="small" />
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

      <TimbradosFormModal 
        openModal={openModal} 
        handleCloseModal={handleCloseModal} 
        onSubmit={onSubmit}
        formData={formData}
      />

      <ConfirmDialog 
        openModal={openConfirmModal}
        onAceptar={handleEliminar}
        message="Estás seguro de eliminar este timbrado?"
        handleCloseModal={() => setOpenConfirmModal(false)}
      />
    </>
  )
}
 
export default Timbrados
