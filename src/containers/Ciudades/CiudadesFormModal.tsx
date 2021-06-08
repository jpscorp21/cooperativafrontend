import { Box, Button, Dialog, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { Field, Form } from 'react-final-form'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'
import { FormModalProps } from '../../types'
import { required } from '../../utils/errorMessages'

type CiudadesFormModalProps = FormModalProps & {
  onSubmit: any;
  formData: any;  
}

const CiudadesFormModal = ({
    openModal, 
    handleCloseModal,
    onSubmit,
    formData   
}: CiudadesFormModalProps) => {

    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
        <Paper elevation={6} sx={{p: 2}}>
        
          <Typography variant="h5" component="h5" sx={{pb: 2}}>
            Formulario Ciudad             

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
                        validate={required}
                        component={TextFieldAdapter}                       
                        label="Descripción*"                             
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

export default CiudadesFormModal
