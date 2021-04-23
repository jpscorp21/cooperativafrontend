import { Box, Button, Dialog, Grid, Paper, TextField, Typography } from "@material-ui/core"
import { createRef, FormEvent, useMemo, useReducer, useRef, useState } from "react"
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import AccionesCell from "../../components/AccionesCell";
import CiudadesHooks from "../../queries/CiudadesHooks";
import { useForm } from "react-hook-form";
import TituloContainer from "../../components/TituloContainer";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import CiudadesFormModal from "./CiudadesFormModal";

const initialForm = () => ({
  descripcion: '',
  observacion: ''
})

const Ciudades = () => {  
  
  const {handleSubmit, control, reset} = useForm();  
  const [submitting, setSubmitting] = useState(false);
  const [openModal, setOpenModal] = useState(false)  

  const observacionRef = createRef<any>();
  const itemsRef = useRef<Array<any>>([]);

  const items = CiudadesHooks.useCiudades(); 


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

  const onSubmit = (values: any) => {    
    console.log(values);
    console.log('Enviando la info');
  }  

  const handleKeyDown = (event: any) => {
    if (event.keyCode == 13) {
      itemsRef.current[1].focus()
    }
  }

  return (
    <>        

      <TituloContainer>Ciudades</TituloContainer>

      {
        submitting ? (

          <Box px={2} pt={3} pb={3}>
            <p>Enviando Formulario</p>                          
          </Box>
        ) : null
      }

      
      <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar una ciudad" size="small" />
      </Box>            

      {/* TABLA */} 
      <Box sx={{px: 2}}>
        <CustomTable columns={columns} data={items} onPageChange={handlePageChange}></CustomTable>
      </Box>  

      <CiudadesFormModal
        control={control}
        itemsRef={itemsRef}
        handleKeyDown={handleKeyDown}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      />
          
    </>
  )
}
 
export default Ciudades