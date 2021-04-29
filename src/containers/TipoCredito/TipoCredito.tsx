import { Box, Button, TextField } from "@material-ui/core"
import { useState, useMemo } from "react";
import AccionesCell from "../../components/AccionesCell";
import { useQuery } from "react-query";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import { tipocreditos } from "../../api/tipocreditos";
import TituloContainer from "../../components/TituloContainer";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import TipoCreditoFormModal from "./TipoCreditoFormModal";

const useTipoCredito = () => {
  const {data: items} = useQuery('tipocreditos', tipocreditos.getAll);  

  return items;
}

const TipoCredito = () => {

  const items = useTipoCredito(); 

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
      <TituloContainer>Tipo Crédito</TituloContainer>

      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar" size="small" />
      </Box>           

      {/* TABLA */}
      <Box sx={{px: 2}}>
        <CustomTable columns={columns} data={items} onPageChange={handlePageChange}></CustomTable>
      </Box> 
      <TipoCreditoFormModal openModal={openModal} handleCloseModal={handleCloseModal}></TipoCreditoFormModal>

    </>
  )
}
 
export default TipoCredito
