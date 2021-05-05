import { Box, Button, Dialog, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@material-ui/core"
import { Field, Form } from "react-final-form";
import { required } from "../../utils/errorMessages";
import TextFieldAdapter from "../../components/control/TextFieldAdapter";

type TipoCreditoFormModalProps = {
  openModal : boolean;
  handleCloseModal(e: any): void;
}& {
  onSubmit: any;
  formData: any;  
}

const TipoCreditoFormModal = ({openModal, handleCloseModal, onSubmit, formData}: TipoCreditoFormModalProps) => {
  return (
    <Dialog open={openModal} onClose={handleCloseModal}>
        <Paper elevation={6} sx={{p: 2}}>

          <Typography variant="h5" component="h5">
            Formulario Tipo Crédito
          </Typography>     

          <Form
            initialValues={{}}
            onSubmit={onSubmit}
            render={({handleSubmit, values}) => (
              <form onSubmit={handleSubmit}>
              {/* {JSON.stringify(values)} */} 
            <Grid container sx={{mt:2}} spacing={2}>
              <Grid item xs={12}>
                <Field fullWidth label="Código" name="codigo" disabled component={TextFieldAdapter} />
              </Grid>
              <Grid item xs={12}>
                <Field fullWidth label="Descripción" name="descripcion" validate={required} autoFocus component={TextFieldAdapter} />
              </Grid>

              <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" >
              <InputLabel>Modalidad Pago</InputLabel>
              <Select
              fullWidth
             label="seleccione"
              name="seleccione"
              >
              <MenuItem value={10}>Mensual</MenuItem>
              <MenuItem value={21}>Anual</MenuItem>
              <MenuItem value={22}>Semanal</MenuItem>
              </Select>
              </FormControl>
              </Grid>

              <Grid item xs={12} sm={4}>
                  <Field fullWidth label="Plazo Min" name="plazo-min" size="small" component={TextFieldAdapter} />
              </Grid>
              <Grid item xs={12} sm={4}>
                  <Field fullWidth  label="Plazo Max" name="plazo-max" size="small" component={TextFieldAdapter} />
              </Grid>
              <Grid item xs={12} sm={4}>
                  <Field fullWidth  label="Tasa" name="tasa" size="small" component={TextFieldAdapter} />
              </Grid>
      
              <Grid item xs={12}>
                <Field fullWidth label="Observación" multiline name="observacion" size="small" rows={4} component={TextFieldAdapter}/>
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

export default TipoCreditoFormModal;