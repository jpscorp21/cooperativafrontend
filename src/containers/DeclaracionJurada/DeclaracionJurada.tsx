import { Paper, Stack } from "@material-ui/core";
import { useHistory } from "react-router";
import BusquedaInput from "../../components/BusquedaInput";
import ButtonActionContainer from "../../components/ButtonActionContainer"
import Spacer from "../../components/Spacer";
import TituloContainer from "../../components/TituloContainer"

const DeclaracionJurada = () => {

  const history = useHistory();

  // const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TituloContainer>Declaración Jurada</TituloContainer>      

      <Paper sx={{mx: 2, pb: 2}}>
        <Stack spacing={2} direction={{xs: 'column', sm: 'row'}} sx={{px: 2, py: 2}}>
          <BusquedaInput 
            placeholder="Buscar declaracion jurada"             
            onChange={() => {

            }}
          />                
          <Spacer />          
          <ButtonActionContainer onNew={() => history.push('/declaracionjurada/form')} onRefresh={() => console.log('refrescando')} />        
        </Stack>            
      </Paper>       
      
    </>
  )
}
 
export default DeclaracionJurada
