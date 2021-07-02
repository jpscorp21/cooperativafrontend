import { Box, Button, Paper, Stack, Typography } from "@material-ui/core";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { AportesAPI } from "../../api/services/AportesAPI";
import CuentasDetalleTable from "../../components/CuentasDetalleTable";
import TituloContainer from "../../components/TituloContainer"
import { ISocio } from "../../models/socio-model";
import AddIcon from '@material-ui/icons/Add';
import SociosAutocomplete from "../../components/SociosAutocomplete";
import { FormApi } from "final-form";
import queryClient from "../../config/queryClient";
import CuentaModalForm from "../Solidaridad/CuentaModalForm";


const Aportes = () => { 

  const [formData, setFormData] = useState<any>(null);
  const [openModal, setOpenModal] = useState(false);
  const [socio, setSocio] = useState<ISocio | null>(null); 
  const {data: aporte} = useQuery(
    ['aporteBySocio', socio?.id], 
    () => AportesAPI.getAporteBySocio(socio?.id || '')
  )
  const {data: detalles} = useQuery(
    ['aporteDetalleBySocio', aporte?.id], 
    () => AportesAPI.getDetalleByAporteId(aporte?.id || '')
  ) 

  const acumular = useMutation(AportesAPI.acumular);
  const add = useMutation(AportesAPI.add);

  const handleChangeSocio = (value: ISocio) => {
    if (!value) {
      return;
    }    
    setSocio(value);    
  }
  
  const abrirAporte = () => {
    if (!socio || !socio.id) {
      return;
    }

    const body = {
      saldo: 0,
      socioId: socio.id
    };

    add.mutate(body, {
      onSuccess() {        
        queryClient.invalidateQueries('aporteBySocio');                                    
      }
    })
  }

  const openAcumularModal = () => {
    setFormData({
      codigo: aporte.codigo,
      saldo: aporte.saldo,
      importe: 0
    })
    setOpenModal(true);
  }  

  const onSubmitAcumular = async (values: any, form: FormApi) => {
    const body = {
      importe: Number(values.importe),
      aporteId: aporte.id,
      id: aporte.id
    };

    acumular.mutate(body, {
      onSuccess(nuevoDetalle) {
        if (nuevoDetalle) {          
          queryClient.invalidateQueries('aporteBySocio');
          queryClient.invalidateQueries('aporteDetalleBySocio');          
          setOpenModal(false);
          form.restart();
        }
      }
    })

  }   

  return (
    <>
      <TituloContainer>Aportes</TituloContainer>

      <Paper sx={{mx: 2, pb: 2}}>
        <Stack spacing={2} direction={{xs: 'column', sm: 'row'}} sx={{px: 2, py: 2}}>
          <SociosAutocomplete 
            value={socio} 
            onChange={handleChangeSocio} 
          />                                          
        </Stack>   
        {
          socio && socio.id 
          ? (
            <Box px={2} pb={1} display="flex" justifyContent="space-between">              
                  <Typography component="p">
                      {
                        aporte && aporte.id ? (
                          <span style={{marginBottom: '4px', fontSize: '24px', fontWeight: 'bold'}}>Saldo: {aporte.saldo}</span>
                        ) : null
                      }<br />
                      <b>{socio.nombre + ' ' + socio.apellido}</b><br />
                      <span style={{color: '#777'}}>N°: {socio?.codigo} - Documento: {socio.cedula}</span>                  
                  </Typography>
                  <Typography component="h3">
                      
                  </Typography>
                  {
                    !aporte || !aporte.id 
                    ? (
                      <Button           
                        variant="contained" 
                        size="small" 
                        sx={{alignSelf: 'center'}}                
                        onClick={abrirAporte} 
                        disabled={add.isLoading}
                        startIcon={<AddIcon />}>
                        Nuevo aporte
                      </Button>            
                    )
                    : (
                      <Button           
                        variant="contained" 
                        size="small" 
                        sx={{alignSelf: 'center'}}                
                        onClick={openAcumularModal}
                        disabled={acumular.isLoading} 
                        startIcon={<AddIcon />}>                          
                        Acumular
                      </Button>
                    )
                  }
              </Box>     
          )
          : null
        }
        {
          detalles && detalles.length 
          ? (
            <CuentasDetalleTable                 
              detalles={detalles}
            />  
          )
          : null
        }
      </Paper>      
      <CuentaModalForm 
        open={openModal}
        onHide={() => setOpenModal(false)}
        formData={formData}
        onSubmit={onSubmitAcumular}
        title="Aporte"
        loading={acumular.isLoading}
      />
    </>
  )
}
 
export default Aportes
