import { useMemo, useState } from "react"
import { useQuery } from "react-query";
import ButtonActionContainer from "../../components/ButtonActionContainer"
import TituloContainer from "../../components/TituloContainer"
import { modalidadpagos } from "../../api/modalidadpagos";
import AccionesCell from "../../components/AccionesCell";
import { ColumnCustomTable } from "../../components/CustomTable";
import ModalidadPagoFormModal from "./ModalidadPagoFormModal";

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
      <ModalidadPagoFormModal openModal={openModal} handleCloseModal={handleCloseModal}></ModalidadPagoFormModal>

    </>
  )
}
//  Formulario Modalidad Pago, TipoCredito, Tipo Garantia y Tipo Solicitud
export default ModalidadPago
