import { Box, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import ButtonActionContainer from "../../components/ButtonActionContainer"
import TituloContainer from "../../components/TituloContainer"

const DeclaracionJurada = () => {

  const history = useHistory();

  // const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TituloContainer>Declaración Jurada</TituloContainer>      

      <ButtonActionContainer onNew={() => history.push('/declaracionjurada/form')} onRefresh={() => console.log('refrescando')} />        

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white', mr: 1}} fullWidth placeholder="Buscar" size="small" />        
      </Box>
    </>
  )
}
 
export default DeclaracionJurada
