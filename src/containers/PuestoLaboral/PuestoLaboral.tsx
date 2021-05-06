import { Box, TextField } from "@material-ui/core";
import { useQuery } from "react-query";
import { useMemo, useState } from "react";
import { puestoslaborales } from "../../api/puestoslaborales";
import AccionesCell from "../../components/AccionesCell";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import TituloContainer from "../../components/TituloContainer";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import PuestoLaboralFormModal from "./PuestoLaboralFormModal";
import { FormApi } from "final-form";
import { ProfesionesAPI } from "../../api/services/ProfesionesAPI";
import useBackend from "../../shared/hooks/useBackend";


const initialForm = () => ({
  descripcion: '',
  profesionId: '',
  observacion: ''
})

const usePuestosLaborales = () => {
  const {data: items} = useQuery('puestoslaborales', puestoslaborales.getAll);  

  return items;
}

const PuestoLaboral = () => {
  const items = usePuestosLaborales(); 

  const {data: profesiones} = useBackend(ProfesionesAPI);

  const [openModal, setOpenModal] = useState(false)  
  const [formData, setFormData] = useState(initialForm());

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
    console.log(values) 
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
      
      <TituloContainer>Puestos Laborales</TituloContainer>
      

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />                

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar" size="small" />
      </Box>           

      {/* TABLA */}
      <Box sx={{px: 2}}>
        <CustomTable columns={columns} data={items} onPageChange={handlePageChange}></CustomTable>
      </Box> 

      {/* MODAL  */}
      <PuestoLaboralFormModal 
        openModal={openModal} 
        handleCloseModal={handleCloseModal}
        onSubmit={onSubmit}
        formData={formData}
        profesiones={profesiones.items || []}
      />
    
  </>
  )
}
 
export default PuestoLaboral
