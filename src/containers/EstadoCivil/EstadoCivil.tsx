import { Box, Button, Dialog, Paper,  Grid, TextField, Typography } from "@material-ui/core"
import { useQuery } from "react-query";
import { useMemo, useState } from "react"
import AccionesCell from "../../components/AccionesCell";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import { estadosciviles } from "../../api/estadosciviles";
import RefreshIcon from '@material-ui/icons/Refresh';
import AddIcon from '@material-ui/icons/Add';
import TituloContainer from "../../components/TituloContainer";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import EstadoCivilFormModal from "./EstadoCivilFormModal";


const useEstadosCiviles = () => {
  const {data: items} = useQuery('estadosciviles', estadosciviles.getAll);  

  return items;
}

const EstadoCivil = () => {

  const items = useEstadosCiviles(); 

  const [openModal, setOpenModal] = useState(false)  

  const handlePageChange = (page: number) => {
    console.log(page);
  }

  const handleEditar = (item: any) => {
    console.log({item});
  }

  const handleCloseModal = (e: any) => {
    setOpenModal(false);
  }

  const columns = useMemo(() => [
    {
      key: 'codigo',
      label: 'Codigo',          
    },
    {
      key: 'descripcion',
      label: 'Descripcion',            
    },    
    {
      key: 'acciones',
      label: 'Acciones',
      align: 'right',
      render: (item: any) => <AccionesCell item={item} onEditar={handleEditar} />
    },
  ] as ColumnCustomTable[], [])
  
  return (
    <>
      {/* TITULO */}
      
      <TituloContainer>Estados Civiles</TituloContainer>      
      

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />        
      

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar" size="small" />
      </Box>     

      {/* TABLA */}
      <Box sx={{px: 2}}>
        <CustomTable columns={columns} data={items} onPageChange={handlePageChange}></CustomTable>
      </Box> 


      <EstadoCivilFormModal openModal={openModal} handleCloseModal={handleCloseModal}></EstadoCivilFormModal>
    
    </>
  )
}
 
export default EstadoCivil
