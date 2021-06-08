import { Box, Button, Dialog, Grid, Paper, Typography } from "@material-ui/core"
import { Field, Form } from "react-final-form";
import { required } from "../../utils/errorMessages";
import TextFieldAdapter from "../../components/control/TextFieldAdapter";

type TipoCuentaFormModalProps = {
  openModal : boolean;
  handleCloseModal(e: any): void;
}& {
  onSubmit: any;
  formData: any;  
}

const TipoCuentaFormModal = ({openModal, handleCloseModal, onSubmit, formData}: TipoCuentaFormModalProps) => {
  return (
    <Dialog open={openModal} onClose={handleCloseModal}>
      <Paper elevation={6} sx={{p: 2}}>
      
        <Typography variant="h5" component="h5" sx={{pb: 2}}>
          Formulario Tipo Cuenta
        </Typography>          
        
        <Form
          initialValues={{...formData}}
          onSubmit={onSubmit}
          render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>            
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field fullWidth label="Código" name="codigo" disabled component={TextFieldAdapter} />
              </Grid>
              
              <Grid item xs={12}>
                <Field fullWidth label="Descripción" name="descripcion" validate={required} autoFocus component={TextFieldAdapter} />
              </Grid>
              <Grid item xs={12}>
                <Field fullWidth label="Observación" multiline name="observacion" rows={4} component={TextFieldAdapter} />
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

export default TipoCuentaFormModal;