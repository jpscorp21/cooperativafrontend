import { Box, TextField } from "@material-ui/core"
import { FormApi } from "final-form"
import { useState } from "react"
import ButtonActionContainer from "../../components/ButtonActionContainer"
import { descripcionInitialForm } from "../../components/DescripcionFormModal"
import TituloContainer from "../../components/TituloContainer"
import ConceptosFormModal from "./ConceptosFormModal"


const Conceptos = () => {

  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState<any>(descripcionInitialForm());   

  const handleCloseModal = (e: any) => {
    setOpenModal(false);
  }

  const onSubmit = async (values: any, form: FormApi) => {   
    console.log(values);   
  }  

  return (
    <>
      <TituloContainer>Conceptos</TituloContainer>      

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />              

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar" size="small" />
      </Box>

      <ConceptosFormModal openModal={openModal} handleCloseModal={handleCloseModal} onSubmit={onSubmit} formData={formData} />      
    </>
  )
}
 
export default Conceptos
