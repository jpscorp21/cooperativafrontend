import { useState } from "react"
import ButtonActionContainer from "../../components/ButtonActionContainer"
import TituloContainer from "../../components/TituloContainer"

const TipoSolicitud = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TituloContainer>Tipo Solicitud</TituloContainer>  
        
      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />        
    </>
  )
}
 
export default TipoSolicitud
