import { Box, Button, Grid, TextField, Dialog, Paper, Typography } from "@material-ui/core";
import { useQuery } from "react-query";
import { useMemo, useState } from "react";
import { puestoslaborales } from "../../api/puestoslaborales";
import AccionesCell from "../../components/AccionesCell";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import TituloContainer from "../../components/TituloContainer";
import ButtonActionContainer from "../../components/ButtonActionContainer";


const usePuestosLaborales = () => {
  const {data: items} = useQuery('puestoslaborales', puestoslaborales.getAll);  

  return items;
}

const PuestoLaboral = () => {
  const items = usePuestosLaborales(); 

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
      
        <TituloContainer>Puestos Laborales</TituloContainer>
      

        <ButtonActionContainer onNew={() => setOpenModal(true)} onRefresh={() => console.log('refrescando')} />                

      <Box px={2} pb={2}>
        <TextField sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar" size="small" />
      </Box>           

      {/* TABLA */}
      <Box sx={{px: 2}}>
        <CustomTable columns={columns} data={items} onPageChange={handlePageChange}></CustomTable>
      </Box> 

       {/* MODAL  */}
       <Dialog open={openModal} onClose={handleCloseModal}>
        <Paper elevation={6} sx={{p: 2}}>
        
          <Typography variant="h5" component="h5" sx={{pb: 2}}>
            Formulario Puesto Laboral
          </Typography>          
          <form>
            <Grid container sx={{mt:2}}>
              <Grid item xs={12} sx={{mb:2}}>
                <TextField fullWidth label="Código" name="codigo" size="small" disabled />
              </Grid>
              
              <Grid item xs={12} sx={{mb:2}}>
                <TextField fullWidth label="Descripción" name="descripcion" size="small" autoFocus />
              </Grid>
              <Grid item xs={12} sx={{mb:2}}>
                <TextField fullWidth label="Profesión" name="profesion" size="small" autoFocus />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Observación" multiline name="obvervacion" size="small" rows={4}/>
              </Grid>            
            </Grid>

            <Box sx={{pt: 4, textAlign: 'center'}}>
              <Button variant="contained" fullWidth color="secondary">Guardar cambios</Button>

            </Box>
          </form>

        </Paper>
      </Dialog> 
    
  </>
  )
}
 
export default PuestoLaboral
