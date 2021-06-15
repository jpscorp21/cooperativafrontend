import { TableCell } from "@material-ui/core";
import { FormApi } from "final-form";
import { useMemo, useState } from "react";
import AccionesCell from "../../components/AccionesCell";
import ConfirmDialog from "../../components/ConfirmDialog";
import { ColumnCustomTable } from "../../components/CustomTable";
import TituloContainer from "../../components/TituloContainer";

const initialForm = () => ({
  email: '',
  usuario: '',
  password: '',
  nombre: '',
  apellido: '',
  role: '',
  observacion: ''
}) 

const Usuarios = () => {

  const [openConfirmModal, setOpenConfirmModal] = useState(false); 
  const [openModal, setOpenModal] = useState(false); 
  const [formData, setFormData] = useState<any>(initialForm());   

  const handleNew = () => {
    setFormData(initialForm());
    setOpenModal(true);
  }  

  const handleEditar = (item: any) => {
    setFormData({...item});
    setOpenModal(true);
  }

  const handleOpenConfirmEliminar = (item: any) => {
    setFormData({...item});
    setOpenConfirmModal(true);
  }

  const handleEliminar = () => {
    // remove.mutate(formData.id, {
    //   onSuccess() {      
    //     setOpenConfirmModal(false);      
    //     refresh();
    //   }
    // }) 
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }  

  const onSubmit = async (values: any, form: FormApi) => {   
    console.log(values);
    form.restart()    
    if (values.id) {
      // update.mutate(({body: values, id: values.id}), {
      //   onSuccess() {    
      //     handleCloseModal();     
      //     refresh();
      //     form.restart();
      //   }
      // }) 
      return;
    }

    // create.mutate(values, {
    //   onSuccess() {    
    //     handleCloseModal();     
    //     refresh();  
    //     form.restart();
    //   }
    // })    
  }  
  
  
  const columns = useMemo(() => [
    {
      key: 'codigo',
      label: 'Codigo',          
    },
    {
      key: 'nombre_completo',
      label: 'Usuario',            
      render: (item: any) => (
        <TableCell>
          <span style={{cursor: 'pointer', paddingTop: '8px'}} onClick={() => handleEditar(item)}>{item.nombre} {item.apellido || ''}</span>
        </TableCell>
      )
    },
    {
      key: 'usuario',
      label: 'Usuario',          
    },        
    {
      key: 'email',
      label: 'Correo',          
    },        
    {
      key: 'observacion',
      label: 'Observación',                  
    },        
    {
      key: 'acciones',
      label: 'Acciones',
      align: 'right',
      render: (item: any) => <AccionesCell item={item} onEditar={handleEditar} onEliminar={handleOpenConfirmEliminar} />
    },
  ] as ColumnCustomTable[], [])  

  return (
    <>
      <TituloContainer>Usuarios</TituloContainer>  

      <ConfirmDialog 
        openModal={openConfirmModal}
        onAceptar={handleEliminar}
        message="Estás seguro de eliminar el usuario?"
        handleCloseModal={() => setOpenConfirmModal(false)}
      />    
    </>
  )
}
 
export default Usuarios
