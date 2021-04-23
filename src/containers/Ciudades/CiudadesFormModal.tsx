import { Box, Button, Dialog, Grid, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'
import Field from '../../components/control/Field'
import { errors, validation } from '../../utils/errorMessages'

type CiudadesFormModalProps = {
    openModal: boolean;
    handleCloseModal(e: any): void;
    onSubmit: any;
    handleSubmit: any;
    control: any;
    itemsRef: any;
    handleKeyDown: any;
}

const CiudadesFormModal = ({
    openModal, 
    handleCloseModal, 
    onSubmit, 
    handleSubmit, 
    control,
    handleKeyDown,
    itemsRef
}: CiudadesFormModalProps) => {

    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
        <Paper elevation={6} sx={{p: 2}}>
        
          <Typography variant="h5" component="h5" sx={{pb: 2}}>
            Formulario Ciudad
            {/* {JSON.stringify(values)} */}

          </Typography>          
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container sx={{mt:2}}>
              
              <Grid item xs={12} sx={{mb:2}}>
                <TextField fullWidth label="Código" name="codigo" size="small" disabled />
              </Grid>
              <Grid item xs={12} sx={{mb:2}}>
                <Field 
                  name="descripcion" 
                  rules={validation([errors.required()])}   
                  fullWidth 
                  onKeyDown={handleKeyDown}
                  ref={el => itemsRef.current[0] = el}
                  label="Descripción" 
                  size="small" 
                  control={control} 
                />
              </Grid>
              <Grid item xs={12}>
                <Field 
                  name="observacion" 
                  rules={validation([errors.required()])}   
                  fullWidth 
                  ref={el => itemsRef.current[1] = el}                  
                  label="Observación" 
                  size="small" 
                  control={control} 
                />                               
              </Grid>            
            </Grid>

            <Box sx={{pt: 4, textAlign: 'center'}}>
              <Button type="submit" variant="contained" fullWidth color="secondary">Guardar cambios</Button>
            </Box>
          </form>

        </Paper>
      </Dialog>
    )
}

export default CiudadesFormModal
