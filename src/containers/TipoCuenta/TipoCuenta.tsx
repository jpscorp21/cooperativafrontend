import { Box, TextField } from "@material-ui/core"
import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { tipocuentas } from "../../api/tipocuentas";
import AccionesCell from "../../components/AccionesCell";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import TituloContainer from "../../components/TituloContainer";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import TipoCuentaFormModal from "./TipoCuentaFormModal";

const useTipoCuentas = () => {
  const {data: items} = useQuery('tipocuentas', tipocuentas.getAll);  

  return items;
}

const TipoCuenta = () => {
  const items = useTipoCuentas(); 

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
    
    <TituloContainer>Tipo Cuenta</TituloContainer>
        

    <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />                

    <Box px={2} pb={2}>
      <TextField sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar" size="small" />
    </Box>     

    {/* TABLA */}
    <Box sx={{px: 2}}>
      <CustomTable columns={columns} data={items} onPageChange={handlePageChange}></CustomTable>
    </Box> 

    <TipoCuentaFormModal openModal={openModal} handleCloseModal={handleCloseModal}></TipoCuentaFormModal>  
  
</>
  )
}
 
export default TipoCuenta
