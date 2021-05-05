import { Box, Button, Dialog, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@material-ui/core"
import { Field, Form } from "react-final-form";
import SelectAdapter from "../../components/control/SelectAdapter";
import TextFieldAdapter from "../../components/control/TextFieldAdapter";
import { FormModalProps } from "../../types";
import { required } from "../../utils/errorMessages";

type BarriosFormModalProps = FormModalProps & {
  onSubmit: any;
  formData: any;
  ciudades: any[];
}
const BarriosFormModal = ({openModal, handleCloseModal, onSubmit, formData, ciudades}: BarriosFormModalProps) => {



  return (
    <Dialog open={openModal} onClose={handleCloseModal}>
        <Paper elevation={6} sx={{p: 2}}>
          <Typography variant="h5" component="h5">
            Formulario Barrio
          </Typography>          
          <Form
            onSubmit={onSubmit}
            initialValues={{...formData}}
            render={({handleSubmit, values}) => (
              <form onSubmit={handleSubmit}>                
                <Grid container sx={{mt:2}} spacing={2}>
                  <Grid item xs={12}>
                    <Field fullWidth label="Código" name="codigo" disabled component={TextFieldAdapter} />
                  </Grid>
                  <Grid item xs={12}>
                    <Field 
                      fullWidth 
                      label="Descripción" 
                      name="descripcion"                      
                      autoFocus 
                      component={TextFieldAdapter} 
                      validate={required}  
                    />
                  </Grid>
                  <Grid item xs={12}>                  
                    <Field 
                        fullWidth                         
                        name="ciudadId"             
                        label="Ciudad"                                             
                        validate={required}  
                        options={ciudades}                        
                        optionlabel="descripcion"
                        optionvalue="id"
                        component={SelectAdapter}
                      />                    
                  </Grid>
                  <Grid item xs={12}>
                    <Field 
                      fullWidth 
                      label="Observación" 
                      multiline 
                      name="obvervacion" 
                      size="small" 
                      rows={4} 
                      component={TextFieldAdapter} 
                    />
                  </Grid>            
                </Grid>
                <Box sx={{pt: 4, textAlign: 'center'}}>
                  <Button variant="contained" fullWidth color="secondary">Guardar cambios</Button>
                </Box>
              </form>
            )} 
          />
        </Paper>
      </Dialog> 
  )
}

export default BarriosFormModal;