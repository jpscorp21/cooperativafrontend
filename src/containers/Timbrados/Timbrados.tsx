import { useState } from "react"
import ButtonActionContainer from "../../components/ButtonActionContainer";
import TituloContainer from "../../components/TituloContainer"

const Timbrados = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
    
      <TituloContainer>Timbrados</TituloContainer>

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />        
    </>
  )
}
 
export default Timbrados
