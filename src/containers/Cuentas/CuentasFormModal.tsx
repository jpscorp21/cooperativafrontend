import { Box, Button, Dialog, Grid, Paper, Typography } from "@material-ui/core"
import { Field, Form } from "react-final-form";
import SelectAdapter from "../../components/control/SelectAdapter";
import TextFieldAdapter from "../../components/control/TextFieldAdapter";
import { FormModalProps } from "../../types";

type CuentasFormModalProps = FormModalProps & {
  onSubmit: any;
  formData: any;
  tiposCuentas: any[];
}

const CuentasFormModal = ({openModal, handleCloseModal, onSubmit, formData, tiposCuentas}: CuentasFormModalProps) => {
  return (
    <Dialog open={openModal} onClose={handleCloseModal}>
      <Paper elevation={6} sx={{p: 2}}>
      
        <Typography variant="h5" component="h5"> 
          Formulario Cuenta
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
                  <Field fullWidth label="Descripción" name="descripcion" component={TextFieldAdapter} autoFocus />
                </Grid>
                <Grid item xs={12}>
                  <Field 
                    fullWidth 
                    label="Tipo Cuenta" 
                    name="tipoCuentaId" 
                    options={tiposCuentas}
                    component={SelectAdapter} 
                    optionlabel="descripcion" 
                    optionvalue="id" 
                    placeholder="--seleccione--"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field fullWidth label="Observación" multiline name="observacion" component={TextFieldAdapter} rows={4}/>
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

export default CuentasFormModal;