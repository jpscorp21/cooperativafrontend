import { Box, TextField } from "@material-ui/core"
import { useState } from "react"
import ButtonActionContainer from "../../components/ButtonActionContainer"
import TituloContainer from "../../components/TituloContainer"
import ConceptosFormModal from "./ConceptosFormModal"

const Conceptos = () => {

  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = (e: any) => {
    setOpenModal(false);
  }

  return (
    <>
      <TituloContainer>Conceptos</TituloContainer>      

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />              

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar" size="small" />
      </Box>

      <ConceptosFormModal openModal={openModal} handleCloseModal={handleCloseModal} />     
    </>
  )
}
 
export default Conceptos
