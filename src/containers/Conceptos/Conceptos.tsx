import { useState } from "react"
import ButtonActionContainer from "../../components/ButtonActionContainer"
import TituloContainer from "../../components/TituloContainer"

const Conceptos = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <TituloContainer>Conceptos</TituloContainer>      

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />        
    </>
  )
}
 
export default Conceptos
