import { Box, MenuItem, Select, TextField } from "@material-ui/core";
import { ChangeEvent, useState } from "react"
import ButtonActionContainer from "../../components/ButtonActionContainer"
import TituloContainer from "../../components/TituloContainer"

const SolicitudCredito = () => {

  const [openModal, setOpenModal] = useState(false);
  const [estadoSelected, setEstadoSelected] = useState('pendiente')

  const handleChangeEstadoSelect = (e: ChangeEvent<{value: string}>) => {
    setEstadoSelected(e.target.value);
  }
  
  return (
    <>
      <TituloContainer>Solicitud Crédito</TituloContainer> 

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />             

      <Box px={2} pb={2} display="flex" alignItems="center">
        <TextField sx={{bgcolor: 'white', mr: 1}} placeholder="Buscar" size="small" />
        <Select                 
          value={estadoSelected}
          onChange={handleChangeEstadoSelect}
          label="ciudad"          
        >
              <MenuItem value={'pendiente'} selected>Pendientes</MenuItem>
              <MenuItem value={'aprobado'}>Aprobados</MenuItem>
              <MenuItem value={'rechazado'}>Rechazados</MenuItem>
        </Select>             
      </Box> 
    </>
  )
}
 
export default SolicitudCredito
