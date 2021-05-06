import { useState } from "react"
import ButtonActionContainer from "../../components/ButtonActionContainer"
import TituloContainer from "../../components/TituloContainer"

const Funcionarios = () => {

  const [, setOpenModal] = useState(false);

  return (
    <>
      <TituloContainer>Funcionarios</TituloContainer>

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />        
    </>
  )
}
 
export default Funcionarios
