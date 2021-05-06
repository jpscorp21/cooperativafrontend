import { Box, Button, TextField } from "@material-ui/core"
import { useState, useMemo } from "react";
import AccionesCell from "../../components/AccionesCell";
import { useQuery } from "react-query";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import { barrios } from "../../api/barrios";
import TituloContainer from "../../components/TituloContainer";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import BarriosFormModal from "./BarriosFormModal";
import { FormApi } from "final-form";
import useBackend from "../../shared/hooks/useBackend";
import { CiudadesAPI } from "../../api/services/CiudadesAPI";

const initialForm = () => ({
  descripcion: '',
  observacion: '',
  ciudadId: ''
})

const useBarrios = () => {
  const {data: items} = useQuery('barrios', barrios.getAll);  
  

  return items;
}

const Barrios = () => {

  const items = useBarrios(); 
  const {data: ciudades} = useBackend(CiudadesAPI);

  const [openModal, setOpenModal] = useState(false)
  const [formData, setFormData] = useState(initialForm());

  const handleNew = () => {
    setFormData(initialForm());
    setOpenModal(true);
  }

  const handlePageChange = (page: number) => {
    console.log(page);
  }

  const handleCloseModal = (e: any) => {
    setOpenModal(false);
  }
  
  const handleEditar = (item: any) => {
    console.log({item});
  }

  const onSubmit = async (values: any, form: FormApi) => {   
    console.log(values); 
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
      <TituloContainer>Barrios</TituloContainer>

      <ButtonActionContainer onNew={handleNew}>
        <Button variant="outlined" size="small" color="secondary" sx={{mb: 2, ml: 1}}  >Ciudad</Button>
      </ButtonActionContainer>      

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar" size="small" />
      </Box>           

      {/* TABLA */}
      <Box sx={{px: 2}}>
        <CustomTable columns={columns} data={items} onPageChange={handlePageChange}></CustomTable>
      </Box> 
      <BarriosFormModal 
        openModal={openModal} 
        handleCloseModal={handleCloseModal} 
        onSubmit={onSubmit} 
        formData={formData}
        ciudades={ciudades.items || []}
      ></BarriosFormModal>
    </>
  )
}
 
export default Barrios