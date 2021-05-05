import { Box, TextField } from "@material-ui/core"
import { FormApi } from "final-form"
import { useState } from "react"
import ButtonActionContainer from "../../components/ButtonActionContainer"
import TituloContainer from "../../components/TituloContainer"
import FacturasFormModal from "./FacturasFormModal"

const initialForm = () => ({
  nroDesde: 0,
  nroHasta: 0,
  ultimoNro: 0,
  codigoEstablecimiento: 0,
  codigoExpedicion: 0,
  timbradoId: '',
  observacion: ''
});

const Facturas = () => {

  const [openModal, setOpenModal] = useState(false)
  const [formData, setFormData] = useState<any>(initialForm());   


  const handleCloseModal = (e: any) => {
    setOpenModal(false);
  }

  const onSubmit = async (values: any, form: FormApi) => {   
    console.log(values);   
  }  

  return (
    <>
      <TituloContainer>Facturas</TituloContainer>

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />        

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white', mr: 1}} fullWidth placeholder="Buscar" size="small" />        
      </Box>

      <FacturasFormModal openModal={openModal} handleCloseModal={handleCloseModal} onSubmit={onSubmit} formData={formData} />
    </>
  )
}
 
export default Facturas
