import { useMemo, useState } from "react"
import { useQuery } from "react-query";
import ButtonActionContainer from "../../components/ButtonActionContainer"
import TituloContainer from "../../components/TituloContainer"
import { modalidadpagos } from "../../api/modalidadpagos";
import AccionesCell from "../../components/AccionesCell";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import ModalidadPagoFormModal from "./ModalidadPagoFormModal";
import { Box, TextField } from "@material-ui/core";

const useModalidadPago = () => {
  const {data: items} = useQuery('modalidadpagos', modalidadpagos.getAll);  

  return items;
}

const ModalidadPago = () => {

  const items = useModalidadPago(); 

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
      <TituloContainer>Modalidad Pago</TituloContainer>
      
      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar" size="small" />
      </Box>           

      {/* TABLA */}
      <Box sx={{px: 2}}>
        <CustomTable columns={columns} data={items} onPageChange={handlePageChange}></CustomTable>
      </Box>

      <ModalidadPagoFormModal openModal={openModal} handleCloseModal={handleCloseModal}></ModalidadPagoFormModal>

    </>
  )
}
//  Formulario Modalidad Pago, TipoCredito, Tipo Garantia y Tipo Solicitud
export default ModalidadPago
