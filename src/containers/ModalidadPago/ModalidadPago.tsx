import { useState } from "react"
import ButtonActionContainer from "../../components/ButtonActionContainer"
import TituloContainer from "../../components/TituloContainer"

const ModalidadPago = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TituloContainer>Modalidad Pago</TituloContainer>

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />        
    </>
  )
}
//  Formulario
export default ModalidadPago
