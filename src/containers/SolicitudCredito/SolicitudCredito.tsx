import { useState } from "react"
import ButtonActionContainer from "../../components/ButtonActionContainer"
import TituloContainer from "../../components/TituloContainer"

const SolicitudCredito = () => {

  const [openModal, setOpenModal] = useState(false);
  
  return (
    <>
      <TituloContainer>Solicitud Crédito</TituloContainer> 

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />             
    </>
  )
}
 
export default SolicitudCredito
