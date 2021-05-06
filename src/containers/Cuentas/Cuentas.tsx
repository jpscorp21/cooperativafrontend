import { Box, TextField } from "@material-ui/core"
import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { cuentas } from "../../api/cuentas";
import AccionesCell from "../../components/AccionesCell";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import TituloContainer from "../../components/TituloContainer";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import CuentasFormModal from "./CuentasFormModal";
import { FormApi } from "final-form";
import useBackend from "../../shared/hooks/useBackend";
import { TiposCuentasAPI } from "../../api/services/TiposCuentasAPI";


const useCuentas = () => {
  const {data: items} = useQuery('cuentas', cuentas.getAll);  

  return items;
}

const initialForm = () => ({
  descripcion: '',
  tipoCuentaId: '',
  observacion: ''
})

const Cuentas = () => {
  const items = useCuentas(); 

  const {data: tiposCuentas} = useBackend(TiposCuentasAPI);

  const [openModal, setOpenModal] = useState(false)  
  const [formData, setFormData] = useState(initialForm())

  const handlePageChange = (page: number) => {
    console.log(page);
  }

  const handleEditar = (item: any) => {
    console.log({item});
  }

  const handleCloseModal = (e: any) => {
    setOpenModal(false);
  }

  const onSubmit = async (values: any, form: FormApi) => {   
     console.log(values);
     console.log(form);   
    // if (values.id) {
    //   update.mutate(({body: values, id: values.id}), {
    //     onSuccess() {    
    //       handleCloseModal();     
    //       queryClient.invalidateQueries(key)   
    //       form.reset();
    //     }
    //   }) 
    //   return;
    // }

    // create.mutate(values, {
    //   onSuccess() {    
    //     handleCloseModal();     
    //     queryClient.invalidateQueries(key)   
    //     form.reset();
    //   }
    // })    
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
      render: (item: any) => <AccionesCell item={item} onEditar={handleEditar} />
    },
  ] as ColumnCustomTable[], [])
  return (
    <>
    {/* TITULO */}
    
      <TituloContainer>Cuentas</TituloContainer>
    

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />                

    <Box px={2} pb={2}>
      <TextField sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar" size="small" />
    </Box>     

    {/* TABLA */}
    <Box sx={{px: 2}}>
      <CustomTable columns={columns} data={items} onPageChange={handlePageChange}></CustomTable>
    </Box> 

    <CuentasFormModal 
      openModal={openModal} 
      handleCloseModal={handleCloseModal}
      formData={formData}
      onSubmit={onSubmit}
      tiposCuentas={tiposCuentas.items || []}
    />
  
  
</>
  )
}
 
export default Cuentas
