import { Box, Button, Dialog, Grid, InputLabel, Paper, TextField, Typography } from "@material-ui/core"
import WrapperCard from "../../components/WrapperCard"
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useState, useMemo } from "react";
import AccionesCell from "../../components/AccionesCell";
import { useQuery } from "react-query";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import { barrios } from "../../api/barrios";
import TituloContainer from "../../components/TituloPrincipalContainer";

const useBarrios = () => {
  const {data: items} = useQuery('barrios', barrios.getAll);  

  return items;
}

const Barrios = () => {
  const items = useBarrios(); 
  const [openModal, setOpenModal] = useState(false)

  const handlePageChange = (page: number) => {
    console.log(page);
  }

  const hancleCloseModal = (e: any) => {
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
      <TituloContainer>Barrios</TituloContainer>

      {/* BOTONES */}
      <Box px={2} pb={2}>
          <Button variant="contained" size="small" color="secondary" sx={{mb: 2, mr: 2}} onClick={() => setOpenModal(true)}  startIcon={<AddIcon />}>Nuevo</Button>
          <Button variant="outlined" size="small" color="secondary" sx={{mb: 2 , mr: 2}}  startIcon={<RefreshIcon />}>Refrescar</Button>        
          <Button variant="outlined" size="small" color="secondary" sx={{mb: 2, mr: 2}}  >Ciudad</Button>
          <TextField sx={{bgcolor: 'white'}} fullWidth placeholder="Buscar una ciudad" name="descripcion" size="small" />
      </Box> 

      {/* TABLA */}
      <Box sx={{px: 2}}>
        <CustomTable columns={columns} data={items} onPageChange={handlePageChange}></CustomTable>
      </Box> 

    <Dialog open={openModal} onClose={hancleCloseModal}>
        <Paper elevation={6} sx={{p: 2}}>
        
          <Typography variant="h5" component="h5" sx={{pb: 2}}>
            Formulario Barrio
          </Typography>          
          <form>
            <Grid container sx={{mt:2}}>
              
              <Grid item xs={12} sx={{mb:2}}>
                <TextField fullWidth label="Código" name="codigo" size="small" disabled />
              </Grid>
              <Grid item xs={12} sx={{mb:2}}>
                <TextField fullWidth label="Descripción" name="descripcion" size="small" autoFocus />
              </Grid>
              <FormControl fullWidth variant="outlined" sx={{mb:2}} >
              <InputLabel >Ciudad</InputLabel>
              <Select
              fullWidth
             label="ciudad"
              >
              <MenuItem value={10}>Capiata</MenuItem>
              <MenuItem value={21}>Itaugua</MenuItem>
              <MenuItem value={22}>Ypacaraí</MenuItem>
              </Select>
              </FormControl>
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
 
export default Barrios