import { Box, Button, Grid, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, useTheme } from "@material-ui/core"
import React from "react"
import WrapperCard from "../../components/WrapperCard"
import MenuIcon from '@material-ui/icons/Menu';


const Ciudades = () => {

  return (
    <>    
    {/* <Stack direction="row" spacing={2} sx={{p: 2}} justifyContent="space-between" alignItems="center">
      <Typography variant="h5" component="h1">Ciudades</Typography>
      <Stack direction="row" spacing={2}>

        <Button variant="outlined" color="secondary">Refrescar</Button>
        <Button variant="contained" color="secondary">
        <MenuIcon fontSize="medium" />
        </Button>
        <IconButton
          color="primary"          
          edge="start"                 
          aria-label="abrir drawer"
          sx={{ p: 1 }}          
        >
          <MenuIcon fontSize="medium" />
        </IconButton>
        <Button variant="contained" color="secondary">Nuevo</Button>
      </Stack>
    </Stack> */}

    <Box px={2} pt={2}>
    <Paper elevation={1} sx={{pb: 2}}>      
        
    <Typography sx={{px: 2, py: 2}} variant="h5" component="h5">Ciudades</Typography> 
          <TableContainer>
            <Table aria-label="lista de ciudades">
              <TableHead>
                <TableRow>
                  <TableCell>Código</TableCell>
                  <TableCell>Descripción</TableCell>
                  <TableCell>Observación</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>10</TableCell>
                  <TableCell>Caacupe</TableCell>
                  <TableCell>Obs...</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>20</TableCell>
                  <TableCell>Asunción</TableCell>
                  <TableCell>Obs...</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>30</TableCell>
                  <TableCell>Eusebio Ayala</TableCell>
                  <TableCell>Obs...</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>40</TableCell>
                  <TableCell>Tobati</TableCell>
                  <TableCell>Obs...</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          </Paper>
    </Box>
    <WrapperCard title="Ciudades">
    < Box sx={{p:2, pt: 0}}>
      
      <Button variant="contained" color="secondary" sx={{mr:1}}>Nuevo</Button>
      <Button variant="outlined" color="secondary" sx={{mr:1}}>Refrescar</Button>
      <Button variant="outlined" color="secondary">Barrios</Button>
      <form>
      <Grid container sx={{mt:2}}>
        
      <Grid item xs={12} sx={{mb:2}}>
      <TextField fullWidth label="Descripción" name="descripcion" size="small" />
      </Grid>
      <Grid item xs={12}>
      <TextField fullWidth label="Observación" multiline name="obvervacion" size="small" rows={4}/>
      </Grid>
      
    </Grid>

      </form>
    </ Box>
    </WrapperCard>
    </>
  )
}
 
export default Ciudades
