import { useMemo, useState } from "react"
import { useQuery } from "react-query";
import ButtonActionContainer from "../../components/ButtonActionContainer"
import TituloContainer from "../../components/TituloContainer"
import { tiposolicitudes } from "../../api/tiposolicitudes";
import AccionesCell from "../../components/AccionesCell";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import TipoSolicitudFormModal from "./TipoSolicitudFormModal";
import { Box, TextField } from "@material-ui/core";

const useTipoSolicitud = () => {
  const {data: items} = useQuery('tiposolicitudes', tiposolicitudes.getAll);  

  return items;
}

const TipoSolicitud = () => {

  const items = useTipoSolicitud(); 

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
      <TituloContainer>Tipo Solicitud</TituloContainer>  
        
      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />        
    
      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar" size="small" />
      </Box>           

      {/* TABLA */}
      <Box sx={{px: 2}}>
        <CustomTable columns={columns} data={items} onPageChange={handlePageChange}></CustomTable>
      </Box> 

      <TipoSolicitudFormModal openModal={openModal} handleCloseModal={handleCloseModal}></TipoSolicitudFormModal>

    </>
  )
}
 
export default TipoSolicitud
