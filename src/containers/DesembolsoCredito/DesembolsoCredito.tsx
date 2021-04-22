import { useState } from "react"
import ButtonActionContainer from "../../components/ButtonActionContainer"
import TituloContainer from "../../components/TituloContainer"

const DesembolsoCredito = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>

      <TituloContainer>Desembolso Crédito</TituloContainer>      

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />        
    </>
  )
}
 
export default DesembolsoCredito
