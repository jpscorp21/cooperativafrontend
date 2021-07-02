import { Box, Button, Dialog, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { Field, Form } from 'react-final-form'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'
import { FormModalProps } from '../../types'
import { required } from '../../utils/errorMessages'

type CajaFormModalProps = FormModalProps & {
  onSubmit: any;
  formData: any;  
}

const CajaFormModal = ({
    openModal, 
    handleCloseModal,
    onSubmit,
    formData   
}: CajaFormModalProps) => {

    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
        <Paper elevation={6} sx={{p: 2}}>
        
          <Typography variant="h5" component="h5" sx={{pb: 2}}>
            Formulario Caja             
          </Typography>        
          <Form 
            onSubmit={onSubmit}
            initialValues={{...formData}}                         
            render={({handleSubmit, form}) => (          
              <>              
                <form onSubmit={handleSubmit}>
                  <Grid container sx={{mt:2}}>
                    
                    <Grid item xs={12} sx={{mb:2}}>
                      <TextField fullWidth label="Código" name="codigo" size="small" disabled />
                    </Grid>
                    <Grid item xs={12} sx={{mb:2}}>
                      <Field 
                        name="descripcion"           
                        fullWidth 
                        autoFocus
                        validate={required}
                        component={TextFieldAdapter}                       
                        label="Descripción*"                             
                      />           
                    </Grid>
                    <Grid item xs={12} sx={{mb:2}}>
                      <Field 
                        name="numCaja"           
                        fullWidth 
                        autoFocus
                        validate={required}
                        component={TextFieldAdapter}                       
                        label="Número caja*"                             
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

export default CajaFormModal
