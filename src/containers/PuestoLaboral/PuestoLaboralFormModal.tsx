import { Box, Button, Dialog, Grid, Paper, Typography } from "@material-ui/core"
import { Field, Form } from "react-final-form";
import SelectAdapter from "../../components/control/SelectAdapter";
import TextFieldAdapter from "../../components/control/TextFieldAdapter";
import { FormModalProps } from "../../types";
import { required } from "../../utils/errorMessages";

type PuestoLaboralFormModalProps = FormModalProps & {
  onSubmit: any;
  formData: any;
  profesiones: any[];
}

const PuestoLaboralFormModal = ({openModal, handleCloseModal, onSubmit, formData, profesiones}: PuestoLaboralFormModalProps) => {
  return (
    <Dialog open={openModal} onClose={handleCloseModal}>
        <Paper elevation={6} sx={{p: 2}}>
        
          <Typography variant="h5" component="h5" sx={{pb: 2}}>
            Formulario Puesto Laboral
          </Typography>    

          <Form 
            initialValues={{...formData}}
            onSubmit={onSubmit}
            render={({handleSubmit}) => (              
              <form onSubmit={handleSubmit}>
                {/* {JSON.stringify(values)} */}
                <Grid container sx={{mt:2}} spacing={2}>
                  <Grid item xs={12}>
                    <Field fullWidth label="Código" name="codigo" component={TextFieldAdapter} disabled />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Field fullWidth label="Descripción*" validate={required} name="descripcion" component={TextFieldAdapter} autoFocus />
                  </Grid>
                  <Grid item xs={12}>
                    <Field 
                      fullWidth 
                      label="Profesión*" 
                      validate={required} 
                      name="profesionId"
                      options={profesiones} 
                      component={SelectAdapter} 
                      optionlabel="descripcion"
                      optionvalue="id"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field fullWidth label="Observación" multiline name="observacion" component={TextFieldAdapter} rows={4}/>
                  </Grid>            
                </Grid>

                <Box sx={{pt: 4, textAlign: 'center'}}>
                  <Button type="submit" variant="contained" fullWidth color="secondary">Guardar cambios</Button>
                </Box>
              </form>
            )}
          />


        </Paper>
      </Dialog> 
  )
}

export default PuestoLaboralFormModal;