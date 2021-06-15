import React from 'react'
import { Grid, Paper, Typography, TextField, Dialog, Box, Button  } from '@material-ui/core'
import { Field, Form } from 'react-final-form'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'
import { FormModalProps } from '../../types'
import { required } from '../../utils/errorMessages'


type UsuariosFormModalProps = FormModalProps & {
    onSubmit: any;
    formData: any;  
}

const UsuariosFormModal = ({openModal, handleCloseModal, onSubmit, formData}: UsuariosFormModalProps) => {
    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
        <Paper elevation={6} sx={{p: 2}}>
        
          <Typography variant="h5" component="h5" sx={{pb: 2}}>
            Formulario usuario             
          </Typography>        
          <Form 
            onSubmit={onSubmit}
            initialValues={{...formData}}                         
            render={({handleSubmit, form}) => (          
              <>              
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    
                    {/* <Grid item xs={12} sx={{mb:2}}>
                      <TextField fullWidth label="Código" name="codigo" size="small" disabled />
                    </Grid> */}
                    <Grid item xs={12}>
                      <Field 
                        name="nombre"           
                        fullWidth 
                        validate={required}
                        component={TextFieldAdapter}                       
                        label="Nombre"                             
                      />           
                    </Grid>
                    <Grid item xs={12}>
                      <Field 
                        name="apellido"           
                        fullWidth 
                        validate={required}
                        component={TextFieldAdapter}                       
                        label="Apellido"                             
                      />           
                    </Grid>                    
                    <Grid item xs={12}>
                      <Field 
                        name="usuario"           
                        fullWidth 
                        validate={required}
                        component={TextFieldAdapter}                       
                        label="Usuario"                             
                      />           
                    </Grid>
                    <Grid item xs={12}>
                      <Field 
                        name="email"           
                        fullWidth 
                        validate={required}
                        component={TextFieldAdapter}                       
                        label="Correo"                             
                      />           
                    </Grid>
                    <Grid item xs={12}>
                      <Field 
                        name="observacion"           
                        fullWidth                   
                        component={TextFieldAdapter}                       
                        multiline                        
                        rows={4}
                        label="Observación"                             
                      />                                             
                    </Grid>            
                  </Grid>

                  <Box sx={{pt: 4, textAlign: 'center'}}>            
                    <Button type="submit" variant="contained" fullWidth>Guardar cambios</Button>
                  </Box>          
                </form>            
              </>                                                                                      
            )}
          />  
        </Paper>
      </Dialog>

    )
}

export default UsuariosFormModal
