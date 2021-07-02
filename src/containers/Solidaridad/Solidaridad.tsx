import { Box, Button, Paper, Stack, Typography } from "@material-ui/core";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { SolidaridadAPI } from "../../api/services/SolidaridadAPI";
import SociosAutocomplete from "../../components/SociosAutocomplete";
import TituloContainer from "../../components/TituloContainer"
import { ISocio } from "../../models/socio-model";
import AddIcon from '@material-ui/icons/Add';
import CuentasDetalleTable from "../../components/CuentasDetalleTable";
import CuentaModalForm from "./CuentaModalForm";
import { FormApi } from "final-form";
import queryClient from "../../config/queryClient";
import { coma } from "../../utils/utils";


const Solidaridad = () => {

  // const [, setOpenModal] = useState(false);
  const [socio, setSocio] = useState<ISocio | null>(null);  
  const [formData, setFormData] = useState<any>(null);
  const [openModal, setOpenModal] = useState(false);
  const {data: solidaridad} = useQuery(
    ['solidaridadBySocio', socio?.id], 
    () => SolidaridadAPI.getSolidaridadBySocio(socio?.id || '')
  )
  const {data: detalles} = useQuery(
    ['solidaridadDetalleBySocio', solidaridad?.id], 
    () => SolidaridadAPI.getDetalleBySolidaridadId(solidaridad?.id || '')
  )

  const add = useMutation(SolidaridadAPI.add);
  const acumular = useMutation(SolidaridadAPI.acumular);

  const handleChangeSocio = (value: ISocio) => {
    if (!value) {
      return;
    }
    console.log(value);
    setSocio(value);    
  }

  const abrirSolidaridad = () => {
    if (!socio || !socio.id) {
      return;
    }

    const body = {
      saldo: 0,
      socioId: socio.id
    };

    add.mutate(body, {
      onSuccess() {        
        queryClient.invalidateQueries('solidaridadBySocio');                                    
      }
    })
  }

  const openAcumularModal = () => {
    setFormData({
      codigo: solidaridad.codigo,
      saldo: solidaridad.saldo,
      importe: 0
    })
    setOpenModal(true);
  } 
  
  const onSubmitAcumular = async (values: any, form: FormApi) => {
    const body = {
      importe: Number(values.importe),
      solidaridadId: solidaridad.id,
      id: solidaridad.id
    };

    acumular.mutate(body, {
      onSuccess(nuevoDetalle) {
        if (nuevoDetalle) {          
          queryClient.invalidateQueries('solidaridadBySocio');
          queryClient.invalidateQueries('solidaridadDetalleBySocio');          
          setOpenModal(false);
          form.restart();
        }
      }
    })

  }   

  return (
    <>
      <TituloContainer>Solidaridad</TituloContainer>      

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
                        solidaridad && solidaridad.id ? (
                          <span style={{marginBottom: '4px', fontSize: '24px', fontWeight: 'bold'}}>Saldo: {coma(solidaridad.saldo)}</span>
                        ) : null
                      }<br />
                      <b>{socio.nombre + ' ' + socio.apellido}</b><br />
                      <span style={{color: '#777'}}>N°: {socio?.codigo} - Documento: {socio.cedula}</span>                  
                  </Typography>
                  <Typography component="h3">
                      
                  </Typography>
                  {
                    !solidaridad || !solidaridad.id 
                    ? (
                      <Button           
                        variant="contained" 
                        size="small" 
                        sx={{alignSelf: 'center'}}                
                        onClick={abrirSolidaridad}  
                        disabled={add.isLoading}
                        startIcon={<AddIcon />}>
                        Nueva solidaridad
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
        title="Solidaridad"
        loading={acumular.isLoading}
      />
    </>
  )
}
 
export default Solidaridad
