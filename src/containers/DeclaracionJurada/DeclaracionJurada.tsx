import { Box, TextField } from "@material-ui/core";
import { useState } from "react"
import ButtonActionContainer from "../../components/ButtonActionContainer"
import TituloContainer from "../../components/TituloContainer"

const DeclaracionJurada = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TituloContainer>Declaración Jurada</TituloContainer>      

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />        

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white', mr: 1}} fullWidth placeholder="Buscar" size="small" />        
      </Box>
    </>
  )
}
 
export default DeclaracionJurada
