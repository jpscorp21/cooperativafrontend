import { Box, TextField } from "@material-ui/core"
import { useMemo, useState } from "react";
import AccionesCell from "../../components/AccionesCell";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import TituloContainer from "../../components/TituloContainer";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import CuentasFormModal from "./CuentasFormModal";
import { FormApi } from "final-form";
import useBackend from "../../shared/hooks/useBackend";
import { TiposCuentasAPI } from "../../api/services/TiposCuentasAPI";
import { CuentasAPI } from "../../api/services/CuentasAPI";
import ConfirmDialog from "../../components/ConfirmDialog";

const initialForm = () => ({
  descripcion: '',
  tipoCuentaId: '',
  observacion: ''
})

const Cuentas = () => {

  const {data, create, remove, update, setParams, refresh} = useBackend(CuentasAPI);
  const {data: tiposCuentas} = useBackend(TiposCuentasAPI);

  const [openModal, setOpenModal] = useState(false)  
  const [openConfirmModal, setOpenConfirmModal] = useState(false) 
  const [formData, setFormData] = useState<any>(initialForm())

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
      
      <TituloContainer>Cuentas</TituloContainer>
      
      <ButtonActionContainer onNew={handleNew} onRefresh={refresh} />                

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

      <CuentasFormModal 
        openModal={openModal} 
        handleCloseModal={handleCloseModal}
        formData={formData}
        onSubmit={onSubmit}
        tiposCuentas={tiposCuentas?.items || []}
      />
  
      <ConfirmDialog 
        openModal={openConfirmModal}
        onAceptar={handleEliminar}
        message="Estás seguro de eliminar esta cuenta?"
        handleCloseModal={() => setOpenConfirmModal(false)}
      />
  
    </>
  )
}
 
export default Cuentas
