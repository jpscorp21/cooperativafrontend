import { Box, TextField } from "@material-ui/core";
import { useState } from "react";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import TituloContainer from "../../components/TituloContainer"

const Aportes = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TituloContainer>Aportes</TituloContainer>

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />        

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white', mr: 1}} fullWidth placeholder="Buscar socio" size="small" />        
      </Box>      
    </>
  )
}
 
export default Aportes
