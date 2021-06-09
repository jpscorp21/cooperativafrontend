import { Box, Button, OutlinedInput, Paper, Stack, TableCell, TextField } from "@material-ui/core"
import { FormApi } from "final-form"
import { useMemo, useState } from "react"
import { ConceptosAPI } from "../../api/services/ConceptosAPI"
import AccionesCell from "../../components/AccionesCell"
import ButtonActionContainer from "../../components/ButtonActionContainer"
import ConfirmDialog from "../../components/ConfirmDialog"
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable"
import { descripcionInitialForm } from "../../components/DescripcionFormModal"
import Spacer from "../../components/Spacer"
import TituloContainer from "../../components/TituloContainer"
import useBackend from "../../shared/hooks/useBackend"
import ConceptosFormModal from "./ConceptosFormModal"
import SearchIcon from '@material-ui/icons/Search';
import { grey } from "@material-ui/core/colors"


const Conceptos = () => {

  const {data, create, remove, update, setParams, refresh} = useBackend(ConceptosAPI);

  const [openModal, setOpenModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false) 
  const [formData, setFormData] = useState<any>(descripcionInitialForm());   

  const handleNew = () => {
    setFormData(descripcionInitialForm());
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

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  const handleEliminar = () => {
    remove.mutate(formData.id, {
      onSuccess() {      
        setOpenConfirmModal(false);      
        refresh();           
      }
    }) 
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
      <TituloContainer>Conceptos</TituloContainer>      

      
      <Paper sx={{mx: 2, pb: 2}}>
        <Stack spacing={2} direction={{xs: 'column', sm: 'row'}} sx={{px: 2, py: 2}}>
          <OutlinedInput 
            sx={{flex: 1, pl: 1}} 
            placeholder="Buscar concepto" 
            size="small"
            startAdornment={
              <SearchIcon sx={{color: grey[400]}}></SearchIcon>
            }
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


      <ConceptosFormModal 
        openModal={openModal} 
        handleCloseModal={handleCloseModal} 
        onSubmit={onSubmit} 
        formData={formData} 
      />      

      <ConfirmDialog 
        openModal={openConfirmModal}
        onAceptar={handleEliminar}
        message="Estás seguro de eliminar este concepto?"
        handleCloseModal={() => setOpenConfirmModal(false)}
      />
    </>
  )
}
 
export default Conceptos
