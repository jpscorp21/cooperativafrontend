import { Box, Button, TextField } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import { FormApi } from "final-form";
import { useState } from "react";
import TituloContainer from "../../components/TituloContainer"
import CajaAhorroVistaFormModal from "./CajaAhorroVistaFormModal";

const initialForm = () => ({
  saldo: '',
  socioId: '',
  saldoMinimo: '',
  interes: '',
  tipoAhorro: '',
  observacion: ''
})

const CajaAhorroVista = () => {

  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState(initialForm())

  const handleCloseModal = (e: any) => {
    setOpenModal(false);
  }

  const onSubmit = async (values: any, form: FormApi) => {
    console.log(values);
    console.log(form);
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
      <CajaAhorroVistaFormModal 
        openModal={openModal} 
        handleCloseModal={handleCloseModal} 
        onSubmit={onSubmit}
        formData={formData}
      />
    </>
  )
}
 
export default CajaAhorroVista
