import { Box, Paper, Stack, TableCell } from "@material-ui/core";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { AportesAPI } from "../../api/services/AportesAPI";
import BusquedaInput from "../../components/BusquedaInput";
import ButtonActionContainer from "../../components/ButtonActionContainer";
import CustomTable, { ColumnCustomTable } from "../../components/CustomTable";
import Spacer from "../../components/Spacer";
import TituloContainer from "../../components/TituloContainer";
import queryClient from "../../config/queryClient";
import useApiParams from "../../shared/hooks/useApiParams";
import { coma, date } from "../../utils/utils";

const AportesLista = () => {

    const {params, setParams} = useApiParams();  
    const {data} = useQuery(['aportes', params], () => AportesAPI.getAll(params), {keepPreviousData: true});                         

    const handleNew = () => {    
        // setOpenModal(true);
    }  

    const refresh = () => {
        queryClient.invalidateQueries('aportes');
    }

    const columns = useMemo(() => [
        {
          key: 'codigo',
          label: 'N°'
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
            key: 'fechaIngreso',
            label: 'Fecha Ingreso',
            format: (value: any) => date(new Date(value.fechaIngreso))              
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
            <TituloContainer>Aportes</TituloContainer>

            <Paper sx={{mx: 2, pb: 2}}>
                <Stack spacing={2} direction={{xs: 'column', sm: 'row'}} sx={{px: 2, py: 2}}>
                    <BusquedaInput 
                        placeholder="Buscar aporte" 
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

export default AportesLista
