import { Box, Button, TextField } from "@material-ui/core"
import { useState, useMemo } from "react";
import AccionesCell from "../../components/AccionesCell";
import { useQuery } from "react-query";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import { barrios } from "../../api/barrios";
import TituloContainer from "../../components/TituloContainer";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import BarriosFormModal from "./BarriosFormModal";

const useBarrios = () => {
  const {data: items} = useQuery('barrios', barrios.getAll);  

  return items;
}

const Barrios = () => {

  const items = useBarrios(); 

  const [openModal, setOpenModal] = useState(false)

  const handlePageChange = (page: number) => {
    console.log(page);
  }

  const handleCloseModal = (e: any) => {
    setOpenModal(false);
  }
  
  const handleEditar = (item: any) => {
    console.log({item});
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
      <TituloContainer>Barrios</TituloContainer>

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')}>
        <Button variant="outlined" size="small" color="secondary" sx={{mb: 2, ml: 1}}  >Ciudad</Button>
      </ButtonActionContainer>      

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar" size="small" />
      </Box>           

      {/* TABLA */}
      <Box sx={{px: 2}}>
        <CustomTable columns={columns} data={items} onPageChange={handlePageChange}></CustomTable>
      </Box> 
      <BarriosFormModal openModal={openModal} handleCloseModal={handleCloseModal}></BarriosFormModal>
    </>
  )
}
 
export default Barrios