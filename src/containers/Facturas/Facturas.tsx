import { Box, TextField } from "@material-ui/core"
import { useState } from "react"
import ButtonActionContainer from "../../components/ButtonActionContainer"
import TituloContainer from "../../components/TituloContainer"
import FacturasFormModal from "./FacturasFormModal"

const Facturas = () => {

  const [openModal, setOpenModal] = useState(false)

  const handleCloseModal = (e: any) => {
    setOpenModal(false);
  }

  return (
    <>
      <TituloContainer>Facturas</TituloContainer>

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />        

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white', mr: 1}} fullWidth placeholder="Buscar" size="small" />        
      </Box>

      <FacturasFormModal openModal={openModal} handleCloseModal={handleCloseModal} />
    </>
  )
}
 
export default Facturas
