import { Box, Button, Dialog, Grid, Paper, Typography } from "@material-ui/core"
import { Field, Form } from "react-final-form";
import { required } from "../../utils/errorMessages";
import TextFieldAdapter from "../../components/control/TextFieldAdapter";
import SelectAdapter from "../../components/control/SelectAdapter";

type TipoCreditoFormModalProps = {
  openModal : boolean;
  handleCloseModal(e: any): void;
}& {
  onSubmit: any;
  formData: any; 
  modalidadPago: any[] 
}

const TipoCreditoFormModal = ({openModal, handleCloseModal, onSubmit, formData, modalidadPago}: TipoCreditoFormModalProps) => {
  return (
    <Dialog open={openModal} onClose={handleCloseModal}>
        <Paper elevation={6} sx={{p: 2}}>

          <Typography variant="h5" component="h5">
            Formulario Tipo Crédito
          </Typography>     

          <Form
            initialValues={{...formData}}
            onSubmit={onSubmit}
            render={({handleSubmit, values}) => (
              <form onSubmit={handleSubmit}>
              {JSON.stringify(values)} 
            <Grid container sx={{mt:2}} spacing={2}>
              <Grid item xs={12}>
                <Field fullWidth label="Código" name="codigo" disabled component={TextFieldAdapter} />
              </Grid>
              <Grid item xs={12}>
                <Field 
                  fullWidth 
                  label="Descripción*" 
                  name="descripcion" 
                  validate={required} 
                  autoFocus 
                  component={TextFieldAdapter} 
                />
              </Grid>

              <Grid item xs={12}>
                <Field 
                  fullWidth 
                  label="Modalidad Pago*"
                  validate={required} 
                  name="modalidadPagoId" 
                  optionlabel="descripcion"
                  options={modalidadPago}
                  optionvalue="id"
                  component={SelectAdapter} 
                />              
              </Grid>

              <Grid item xs={12} sm={4}>
                  <Field 
                    fullWidth 
                    label="Plazo Min" 
                    name="plazoMin" 
                    component={TextFieldAdapter} 
                  />
              </Grid>
              <Grid item xs={12} sm={4}>
                  <Field 
                    fullWidth 
                    label="Plazo Max" 
                    name="plazoMax" 
                    component={TextFieldAdapter} 
                  />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field 
                  fullWidth 
                  label="Tasa" 
                  name="tasa" 
                  component={TextFieldAdapter} 
                />
              </Grid>
      
              <Grid item xs={12}>
                <Field 
                  fullWidth 
                  label="Observación" 
                  multiline 
                  name="observacion" 
                  rows={4} 
                  component={TextFieldAdapter}
                />
              </Grid>   
                       
            </Grid>
            <Box sx={{pt: 4, textAlign: 'center'}}>
              <Button type="submit" variant="contained" fullWidth >Guardar cambios</Button>
            </Box>
          </form>
        )}
      />
    </Paper>
  </Dialog> 
  )
}

export default TipoCreditoFormModal;