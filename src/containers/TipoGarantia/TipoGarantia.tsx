import { useState } from "react";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import TituloContainer from "../../components/TituloContainer"

const TipoGarantia = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TituloContainer>Tipo Garantía</TituloContainer>  

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />            
    </>
  )
}
 
export default TipoGarantia
