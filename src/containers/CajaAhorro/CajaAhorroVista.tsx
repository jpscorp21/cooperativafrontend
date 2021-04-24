import { Box, Button, TextField } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import { useState } from "react";
import TituloContainer from "../../components/TituloContainer"
import CajaAhorroVistaFormModal from "./CajaAhorroVistaFormModal";

const CajaAhorroVista = () => {

  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = (e: any) => {
    setOpenModal(false);
  }

  return (
    <>
    <TituloContainer>Ahorro a la Vista</TituloContainer>

    <Box px={2} pb={2} display="flex" alignItems="center">
        <TextField sx={{bgcolor: 'white', mr: 1}} placeholder="Buscar socio" size="small" />
        <Button 
                variant="contained" 
                size="small" 
                color="secondary" 
                onClick={() => setOpenModal(true)} 
                startIcon={<AddIcon />}>
                Nueva caja de ahorro
        </Button>            
    </Box>
    <CajaAhorroVistaFormModal openModal={openModal} handleCloseModal={handleCloseModal} />
    </>
  )
}
 
export default CajaAhorroVista
