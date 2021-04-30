import { Box, Button, TextField } from "@material-ui/core"
import { useState, useMemo } from "react";
import AccionesCell from "../../components/AccionesCell";
import { useQuery } from "react-query";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import { tipogarantias } from "../../api/tipogarantias";
import TituloContainer from "../../components/TituloContainer";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import TipoGarantiaFormModal from "./TipoGarantiaFormModal";

const useTipoGarantia = () => {
  const {data: items} = useQuery('tipogarantias', tipogarantias.getAll);  

  return items;
}

const TipoGarantia = () => {

  const items = useTipoGarantia(); 

  const [openModal, setOpenModal] = useState(false);

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
      <TituloContainer>Tipo Garantía</TituloContainer>  

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />            

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar" size="small" />
      </Box>           

      {/* TABLA */}
      <Box sx={{px: 2}}>
        <CustomTable columns={columns} data={items} onPageChange={handlePageChange}></CustomTable>
      </Box> 
      <TipoGarantiaFormModal openModal={openModal} handleCloseModal={handleCloseModal}></TipoGarantiaFormModal>

    </>
  )
}
 
export default TipoGarantia
