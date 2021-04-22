import { useState } from "react";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import TituloContainer from "../../components/TituloContainer"

const Solidaridad = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TituloContainer>Solidaridad</TituloContainer>

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />        
    </>
  )
}
 
export default Solidaridad
