import { useState } from "react"
import ButtonActionContainer from "../../components/ButtonActionContainer"
import TituloContainer from "../../components/TituloContainer"

const DeclaracionJurada = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TituloContainer>Declaración Jurada</TituloContainer>      

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />        
    </>
  )
}
 
export default DeclaracionJurada
