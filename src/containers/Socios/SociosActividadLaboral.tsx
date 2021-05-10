
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@material-ui/core'
import { Field } from 'react-final-form'
import SelectAdapter from '../../components/control/SelectAdapter'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'
import { required } from '../../utils/errorMessages'

type SociosActividadLaboralProps = {
  profesiones: any[];
  puestosLaborales: any[];
}

const SociosActividadLaboral = ({profesiones, puestosLaborales}: SociosActividadLaboralProps) => {
    return (
    <>
      <Box>
        <FormControl component="fieldset">
                <FormLabel component="legend" sx={{mb: 2, fontWeight: 'bolder', fontSize: '16px'}}>Datos de la actividad laboral</FormLabel>
            </FormControl>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Es Empleado</FormLabel>
                  <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="si">
                    <FormControlLabel value="si" control={<Radio />} label="Sí" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Field 
                fullWidth 
                label="Antiguedad" 
                name="antiguedad" 
                component={TextFieldAdapter}
              />              
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field 
                fullWidth 
                label="Nombre empresa" 
                name="nombreEmpresa" 
                component={TextFieldAdapter}
              />              
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <Field 
                fullWidth 
                label="Profesión" 
                name="profesionId" 
                component={TextFieldAdapter}
              />              */}
              <Field 
                fullWidth                         
                name="profesionId"             
                label="Profesion"                                             
                validate={required}  
                options={profesiones}                        
                optionlabel="descripcion"
                optionvalue="id"
                component={SelectAdapter}
              />                 
            </Grid>
            <Grid item xs={12} sm={6}>              
              <Field 
                fullWidth                         
                name="puestoLaboralId"             
                label="Puesto que ocupa"                                             
                validate={required}  
                options={puestosLaborales}                        
                optionlabel="descripcion"
                optionvalue="id"
                component={SelectAdapter}
              />                       
            </Grid>
            <Grid item xs={12} sm={12}>
              <Field 
                fullWidth 
                label="Actividad laboral" 
                name="actividadEmpresa" 
                component={TextFieldAdapter}
              />                 
            </Grid>
            <Grid item xs={12} sm={12}>
              <Field 
                fullWidth 
                label="Ingreso mensual" 
                name="ingresoMensual" 
                component={TextFieldAdapter}
              />                 
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Posee Otros Ingresos</FormLabel>
                  <RadioGroup row aria-label="gender" name="otroIngreso" defaultValue={'true'}>
                    <FormControlLabel value={'true'} control={<Radio />} label="Sí" />
                    <FormControlLabel value={'false'} control={<Radio />} label="No" />
                  </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field 
                fullWidth 
                label="Monto" 
                name="otroMonto" 
                component={TextFieldAdapter}
              />                               
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field 
                fullWidth 
                label="Concepto" 
                name="otroConcepto" 
                component={TextFieldAdapter}
              />              
            </Grid>
          </Grid>        
      </Box>
    </>
    )
}

export default SociosActividadLaboral
