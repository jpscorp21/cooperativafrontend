import { Box, TextField } from "@material-ui/core"
import { useQuery } from "react-query";
import { useMemo, useState } from "react";
import { profesiones } from "../../api/profesiones";
import AccionesCell from "../../components/AccionesCell";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import TituloContainer from "../../components/TituloContainer";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import ProfesionesFormModal from "./ProfesionesFormModal";


const useProfesiones = () => {
  const {data: items} = useQuery('profesiones', profesiones.getAll);  

  return items;
}
const Profesiones = () => {
  const items = useProfesiones(); 

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
    
      <TituloContainer>Profesiones</TituloContainer>

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />                

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar" size="small" />
      </Box>     
      

    {/* TABLA */}
    <Box sx={{px: 2}}>
      <CustomTable columns={columns} data={items} onPageChange={handlePageChange}></CustomTable>
    </Box> 

    <ProfesionesFormModal openModal={openModal} handleCloseModal={handleCloseModal}></ProfesionesFormModal>

</>
  )
}
 
export default Profesiones;
