import { useState } from "react";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import TituloContainer from "../../components/TituloContainer"

const TipoCredito = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TituloContainer>Tipo Crédito</TituloContainer>

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />        
    </>
  )
}
 
export default TipoCredito
