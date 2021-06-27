import { Box, Chip, IconButton, List, ListItem, ListItemText, Paper, Popover, Stack, TableCell, Typography } from "@material-ui/core";
import { FormApi, FORM_ERROR } from "final-form";
import { useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { UsuariosAPI } from "../../api/services/UsuariosAPI";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import ConfirmDialog from "../../components/ConfirmDialog";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import Spacer from "../../components/Spacer";
import TituloContainer from "../../components/TituloContainer";
import queryClient from "../../config/queryClient";
import UsuariosFormModal from "./UsuariosFormModal";
import MoreIcon from '@material-ui/icons/MoreVert'
import theme from "../../config/theme";
import { red } from "@material-ui/core/colors";
import BusquedaInput from "../../components/BusquedaInput";
import UsuarioPasswordFormModal from "./UsuarioPasswordFormModal";

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

  const [openPopover, setOpenPopover] = useState<any>(false);
  const [anchor, setAnchor] = useState<any>(null);
  const [openConfirmModal, setOpenConfirmModal] = useState(false); 
  const [openModal, setOpenModal] = useState(false); 
  const [openModalPassword, setOpenModalPassword] = useState(false)
  const [formData, setFormData] = useState<any>(initialForm()); 
  
  const [params, setParams] = useState({searchQuery: ''})

  const {data} = useQuery(['usuarios', params], () => UsuariosAPI.getAll(params), {keepPreviousData: true});
  const create = useMutation(UsuariosAPI.createUser);
  const update = useMutation(UsuariosAPI.updateUser);
  const resetPassword = useMutation(UsuariosAPI.resetPassword);

  const activos = useMemo<any>(() => ({
    "true": {
      label: "Activo",
      background: theme.palette.primary.main
    },
    "false": {
      label: "Anulado",
      background: red[700]
    },
  // eslint-disable-next-line
  }), [])

  const refresh = () => {
    queryClient.invalidateQueries('usuarios');
  }

  const handleNew = () => {
    setFormData(initialForm());
    setOpenModal(true);
  }  

  const handleEditar = (item: any) => {
    setOpenPopover(false);
    setFormData({...item, usuario: item.userName});
    setOpenModal(true);
  }

  // const handleOpenConfirmEliminar = (item: any) => {
  //   setFormData({...item});
  //   setOpenConfirmModal(true);
  // }

  const handleEliminar = () => {
    // remove.mutate(formData.id, {
    //   onSuccess() {      
    //     setOpenConfirmModal(false);      
    //     refresh();
    //   }
    // }) 
  }

  const handleChangeParam = (value: string, name: string) => {
    setParams({...params, [name]: value});
  }
  

  const handleCloseModal = () => {
    setOpenModal(false);
  }  

  const handleCloseModalPassword = () => {
    setOpenModalPassword(false);
  }
  

  const onSubmit = async (values: any, form: FormApi) => {   

    if (values.password !== values.password_confirmation) {
      return { [FORM_ERROR]: 'Las contraseñas no son iguales' }
    }
    
    form.restart()    
    if (values.id) {
      const itemForUpdate = {
        ...values, userName: values.usuario
      }
      delete itemForUpdate.usuario;
      update.mutate(({...itemForUpdate}), {
        onSuccess() {    
          handleCloseModal();     
          refresh();
          form.restart();
        }
      }) 
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
  
  const onSubmitPassword = async (values: any, form: FormApi) => {
    
    if (values.password !== values.passwordConfirmation) {
      return { [FORM_ERROR]: 'Las contraseñas no son iguales' }
    }

    const dataForChange = {
      id: formData.id,
      ...values
    }

    resetPassword.mutate(dataForChange, {
      onSuccess() {    
        handleCloseModal(); 
        setOpenModalPassword(false);    
        refresh();  
        form.restart();
      }
    })  
  }
  

  const openPopoverUsuario = (event: any, item: any) => {
    setAnchor(event.currentTarget);   
    setOpenPopover(true);   
    setFormData(item);     
  }    

  const closePopoverUsuario = () => {
    setOpenPopover(false);
    setTimeout(() => setFormData(initialForm()), 500)
    
    // setAnchor(null);
  }

  const cambiarPassword = () => {
    setOpenPopover(false);    
    setOpenModalPassword(true);

  }
  
  const anular = () => {
    setOpenPopover(false);
    const item = {...formData};
    item.activo = !item.activo;
    if (item.id) {
      update.mutate(({...item}), {
        onSuccess() {              
          handleCloseModal();     
          refresh();          
        }
      }) 
      return;
    }
    closePopoverUsuario();


  }
  
  
  const columns = useMemo(() => [  
    {
      key: 'nombre_completo',
      label: 'Nombre',            
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
    {
      key: 'roleName',
      label: 'Rol',          
    },      
    {
      key: 'estado',
      label: 'Activo',
      render: (item: any) => (
        <TableCell>                    
          <Chip 
              label={activos[String(item.activo)].label} 
              sx={{color: 'white', background: activos[String(item.activo)].background}}              
          />
        </TableCell>
      )                  
    },        
    {
      key: 'acciones',
      label: 'Acciones',
      align: 'right',
      render: (item: any) => (
        <TableCell align="right">
          <IconButton size="small" color="primary" onClick={(event) => openPopoverUsuario(event, item)}>
            <MoreIcon></MoreIcon>            
          </IconButton>
        </TableCell>
      )
    },
  // eslint-disable-next-line
  ] as ColumnCustomTable[], [])  

  return (
    <>
      <TituloContainer>Usuarios</TituloContainer>          
        

      <Paper sx={{mx: 2, pb: 2}}>
        <Stack spacing={2} direction={{xs: 'column', sm: 'row'}} sx={{px: 2, py: 2}}>
          <BusquedaInput 
            placeholder="Buscar usuario" 
            onChange={(value) => handleChangeParam(value, 'searchQuery')}
          />                
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

      <UsuarioPasswordFormModal                                                          
        openModal={openModalPassword}
        handleCloseModal={handleCloseModalPassword}
        onSubmit={onSubmitPassword}
        formData={{}}
        loading={resetPassword.isLoading}
      />

      <ConfirmDialog 
        openModal={openConfirmModal}
        onAceptar={handleEliminar}
        message="Estás seguro de eliminar el usuario?"
        handleCloseModal={() => setOpenConfirmModal(false)}
      />   
       <Popover                
        open={openPopover}
        sx={{width: '100%', maxWidth: '600px'}}
        anchorEl={anchor}        
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={closePopoverUsuario}
        disableRestoreFocus
      >
        <List sx={{minWidth: '250px'}}>
          <Typography px={2} py={1} fontSize="18px" fontWeight="bold" >Seleccionar</Typography>
          <ListItem button onClick={() => handleEditar(formData)} sx={{py: 1}}>              
              <ListItemText primary={"Editar"} />
          </ListItem>

          <ListItem button onClick={cambiarPassword} sx={{py: 1}}>              
              <ListItemText primary={"Cambiar contraseña"} />
          </ListItem>               
          
          <ListItem button onClick={anular} sx={{py: 1}}>              
              <ListItemText primary={formData && formData.activo ? 'Anular' : 'Activar'} />
          </ListItem>
        </List>
        
      </Popover>
    </>

  )
}
 
export default Usuarios
