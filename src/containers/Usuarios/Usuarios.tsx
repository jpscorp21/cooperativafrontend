import { Box, Paper, Stack, TableCell } from "@material-ui/core";
import { FormApi, FORM_ERROR } from "final-form";
import { useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { UsuariosAPI } from "../../api/services/UsuariosAPI";
import AccionesCell from "../../components/AccionesCell";
import BusquedaInput from "../../components/BusquedaInput";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import ConfirmDialog from "../../components/ConfirmDialog";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import Spacer from "../../components/Spacer";
import TituloContainer from "../../components/TituloContainer";
import queryClient from "../../config/queryClient";
import UsuariosFormModal from "./UsuariosFormModal";

const initialForm = () => ({
  email: '',
  userName: '',
  password: '',
  nombre: '',
  apellido: '',
  role: '',
  observacion: '',
  password_confirmation: ''
}) 

const Usuarios = () => {

  const [openConfirmModal, setOpenConfirmModal] = useState(false); 
  const [openModal, setOpenModal] = useState(false); 
  const [formData, setFormData] = useState<any>(initialForm());   

  const {data} = useQuery('usuarios', UsuariosAPI.getAll);
  const create = useMutation(UsuariosAPI.createUser);

  const refresh = () => {
    queryClient.invalidateQueries('usuarios');
  }

  const handleNew = () => {
    setFormData(initialForm());
    setOpenModal(true);
  }  

  const handleEditar = (item: any) => {
    setFormData({...item, usuario: item.userName});
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

    if (values.password !== values.password_confirmation) {
      return { [FORM_ERROR]: 'Las contraseñas no son iguales' }
    }


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

    create.mutate(values, {
      onSuccess() {    
        handleCloseModal();     
        refresh();  
        form.restart();
      }
    })    
  }  
  
  
  const columns = useMemo(() => [  
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
      key: 'userName',
      label: 'Usuario',          
    },        
    {
      key: 'email',
      label: 'Correo',          
    },              
    // {
    //   key: 'acciones',
    //   label: 'Acciones',
    //   align: 'right',
    //   render: (item: any) => <AccionesCell item={item} onEditar={handleEditar} onEliminar={handleOpenConfirmEliminar} />
    // },
  ] as ColumnCustomTable[], [])  

  return (
    <>
      <TituloContainer>Usuarios</TituloContainer>          
        

      <Paper sx={{mx: 2, pb: 2}}>
        <Stack spacing={2} direction={{xs: 'column', sm: 'row'}} sx={{px: 2, py: 2}}>
          {/* <BusquedaInput 
            placeholder="Buscar ciudad" 
            onChange={(value) => setParams(value, 'searchQuery')}
          />                 */}
          <Spacer />          
          <ButtonActionContainer onNew={handleNew} onRefresh={refresh} />                        
        </Stack>
        <Box>
            <CustomTable                 
                columns={columns} 
                data={data || []} 
                totalCount={data ? data.length : 0}                
                paginate={false}
            />  
        </Box>      
      </Paper>  

      <UsuariosFormModal                                                          
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        onSubmit={onSubmit}
        formData={formData}
      />

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
