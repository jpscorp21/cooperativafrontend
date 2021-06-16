import React, { useMemo } from 'react'
import { Grid, Paper, Typography, TextField, Dialog, Box, Button, Alert  } from '@material-ui/core'
import { Field, Form } from 'react-final-form'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'
import { FormModalProps } from '../../types'
import { required } from '../../utils/errorMessages'
import SelectAdapter from '../../components/control/SelectAdapter'


type UsuariosFormModalProps = FormModalProps & {
    onSubmit: any;
    formData: any;  
}

const UsuariosFormModal = ({openModal, handleCloseModal, onSubmit, formData}: UsuariosFormModalProps) => {


  const roles =useMemo(() => [    
    {id: "2", name: 'Gerente general'},
    {id: "3", name: 'Atención al socio'},
    {id: "4", name: 'Cajero'},
    {id: "5", name: 'Socio'},
    {id: "6", name: 'Asesor de créditos'},    
  ], [])

  return (
      <Dialog open={openModal} onClose={handleCloseModal}>
      <Paper elevation={6} sx={{p: 2}}>
      
        <Typography variant="h5" component="h5" sx={{pb: 2}}>
          Formulario usuario             
        </Typography>        
        <Form 
          onSubmit={onSubmit}
          initialValues={{...formData}}                         
          render={({handleSubmit, submitError}) => (          
            <>              
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>                                    
                  <Grid item xs={12} sm={6}>
                    <Field 
                      name="nombre"           
                      fullWidth 
                      validate={required}
                      component={TextFieldAdapter}                       
                      label="Nombre"                             
                    />           
                  </Grid>
                  <Grid item xs={12} sm={6}>
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
                      name="role"           
                      fullWidth 
                      validate={required}
                      component={SelectAdapter}  
                      optionlabel="name"
                      optionvalue="id"
                      options={roles}                     
                      label="Cargo"                             
                    />           
                  </Grid>
                  <Grid item xs={12}>
                    <Field 
                      type="password"
                      name="password"           
                      fullWidth 
                      validate={required}
                      component={TextFieldAdapter}                       
                      label="Contraseña"                             
                    />           
                  </Grid>
                  <Grid item xs={12}>
                    <Field 
                      type="password"
                      name="password_confirmation"           
                      fullWidth 
                      validate={required}
                      component={TextFieldAdapter}                       
                      label="Confirmar contraseña"                             
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
                {submitError && <Alert severity="error" sx={{mt: 2}}>{submitError}</Alert>}
                <Box sx={{pt: 3, textAlign: 'center'}}>            
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
