import { Box, Paper, Stack, TableCell } from "@material-ui/core"
import { useMemo } from "react"
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import TituloContainer from "../../components/TituloContainer";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import BusquedaInput from "../../components/BusquedaInput";
import Spacer from "../../components/Spacer";
import useApiParams from "../../shared/hooks/useApiParams";
import { CajaAhorroVistaAPI } from "../../api/services/CajaAhorroVistaAPI";
import { useQuery } from "react-query";
// import { useHistory } from "react-router";
import queryClient from "../../config/queryClient";
import { coma } from "../../utils/utils";

const CajaAhorroVistaLista = () => {   
   
  // const history = useHistory();
    
  const {params, setParams} = useApiParams();  
  const {data} = useQuery([CajaAhorroVistaAPI.key, params], () => CajaAhorroVistaAPI.getAll(params), {keepPreviousData: true});                         

  const handleNew = () => {    
    // setOpenModal(true);
  }  

  // const handleEditar = (item: any) => {    
  //   // setOpenModal(true); 
  // }   

  const refresh = () => {
    queryClient.invalidateQueries('cajaahorrovista');
  }
  

  const columns = useMemo(() => [
    {
      key: 'cuentaAhorro',
      label: 'Cuenta'
    },  
    {
      key: 'socio',
      label: 'Socio',            
      render: (item: any) => (
        <TableCell>
          <b>{item.socio && item.socio.nombre ? item.socio.nombre + ' ' + item.socio.apellido : ''}</b><br/>
          <small>{item.socio ? item.socio.cedula : ''}</small>
        </TableCell>
      )
    },        
    {
        key: 'tipoAhorro',
        label: 'Tipo',
        render: () => (
          <TableCell>
            <span>Individual</span>
          </TableCell>
        )
    },  
    {
        key: 'saldo',
        label: 'Saldo',
        align: 'right',
        format: (value: any) => coma(value.saldo)              
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

      <TituloContainer>Cajas de ahorro a la vista</TituloContainer>      
           
      <Paper sx={{mx: 2, pb: 2}}>
        <Stack spacing={2} direction={{xs: 'column', sm: 'row'}} sx={{px: 2, py: 2}}>
          <BusquedaInput 
            placeholder="Buscar caja de ahorro a la vista" 
            onChange={(value) => setParams(value, 'searchQuery')}
          />                
          <Spacer />          
          <ButtonActionContainer onNew={handleNew} onRefresh={refresh} />                        
        </Stack>
        <Box>
            <CustomTable 
                page={data?.currentPage}  
                count={data?.totalPages} 
                columns={columns} 
                data={data?.items ? data?.items : []} 
                totalCount={data?.totalCount}
                onPageChange={(value) => setParams(value, 'pageNumber')}
            />  
        </Box>      
      </Paper>         
    </>                                                                                      
  )
}
 
export default CajaAhorroVistaLista; 