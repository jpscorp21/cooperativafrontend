import { Box, TextField } from "@material-ui/core";
import { FormApi } from "final-form";
import { useState } from "react"
import ButtonActionContainer from "../../components/ButtonActionContainer";
import TituloContainer from "../../components/TituloContainer"
import TimbradosFormModal from "./TimbradosFormModal";

const initialForm = () => ({  
  nroTimbrado: '',
  fechaInicio: new Date().toISOString(),
  fechaFin: new Date().toISOString(),
  observacion: ''
}) 

const Timbrados = () => {

  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState<any>(initialForm());   

  const handleCloseModal = (e: any) => {
    setOpenModal(false);
  }

  const onSubmit = async (values: any, form: FormApi) => {   
    console.log(values);   
  }  

  return (
    <>
      <TituloContainer>Timbrados</TituloContainer>

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />              

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar" size="small" />
      </Box>   

      <TimbradosFormModal 
        openModal={openModal} 
        handleCloseModal={handleCloseModal} 
        onSubmit={onSubmit}
        formData={formData}
      />
    </>
  )
}
 
export default Timbrados
