import { Box, Button, Dialog, Grid, Paper, Typography } from "@material-ui/core"
import { Field, Form } from "react-final-form";
import { required } from "../../utils/errorMessages";
import TextFieldAdapter from "../../components/control/TextFieldAdapter";

type ProfesionesFormModalProps = {
  openModal : boolean;
  handleCloseModal(e: any): void; 
} & {
  onSubmit: any;
  formData: any;  
}

const ProfesionesFormModal = ({openModal, handleCloseModal, onSubmit, formData}: ProfesionesFormModalProps) => {
  return (
    <Dialog open={openModal} onClose={handleCloseModal}>
      <Paper elevation={6} sx={{p: 2}}>
      
        <Typography variant="h5" component="h5" sx={{pb: 2}}>
          Formulario Profesión
        </Typography>   

        <Form 
          initialValues={{}}
          onSubmit={onSubmit}
          render={({handleSubmit, values}) => (
            <form onSubmit={handleSubmit}>
            {/* {JSON.stringify(values)}  */}
          <Grid container sx={{mt:2}} spacing={2}>
            <Grid item xs={12}>
              <Field fullWidth label="Código" name="codigo" disabled component={TextFieldAdapter} />
            </Grid>
            
            <Grid item xs={12}>
              <Field fullWidth label="Descripción" validate={required} name="descripcion" autoFocus component={TextFieldAdapter} />
            </Grid>
            <Grid item xs={12}>
              <Field fullWidth label="Observación" multiline name="observacion" rows={4} component={TextFieldAdapter}/>
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

export default ProfesionesFormModal;