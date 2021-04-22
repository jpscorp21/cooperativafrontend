import { useState } from "react"
import ButtonActionContainer from "../../components/ButtonActionContainer"
import TituloContainer from "../../components/TituloContainer"

const Facturas = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <TituloContainer>Facturas</TituloContainer>

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />        
    </>
  )
}
 
export default Facturas
