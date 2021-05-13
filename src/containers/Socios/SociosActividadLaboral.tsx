
import { Box, FormControl, FormLabel, Grid } from '@material-ui/core'
import { useMemo } from 'react'
import { Field, useFormState } from 'react-final-form'
import RadioGroupAdapter from '../../components/control/RadioGroupAdapter'
import SelectAdapter from '../../components/control/SelectAdapter'
import TextFieldAdapter from '../../components/control/TextFieldAdapter'
import { required } from '../../utils/errorMessages'

type SociosActividadLaboralProps = {
  profesiones: any[];
  puestosLaborales: any[];
}

const SociosActividadLaboral = ({profesiones, puestosLaborales}: SociosActividadLaboralProps) => {

    const esEmpleados = useMemo(() => [
      {id: "true", descripcion: 'Si'},
      {id: "false", descripcion: 'No'},
    ], [])

    const {values} = useFormState();

    

    return (
    <>
      <Box>        
        <FormControl component="fieldset">
                <FormLabel component="legend" sx={{mb: 2, fontWeight: 'bolder', fontSize: '16px'}}>Datos de la actividad laboral</FormLabel>
            </FormControl>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field 
                fullWidth 
                label="Es empleado" 
                name="esEmpleado" 
                optionlabel="descripcion"
                optionvalue="id"
                options={esEmpleados}
                component={RadioGroupAdapter}
              />               
            </Grid>
            {
              values && values.esEmpleado && values.esEmpleado === "true"
              ? (
                <>
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
                </>
              ) 
              : null
            }
            <Grid item xs={12} sm={12}>
              <Field 
                fullWidth
                name="otroIngreso"
                label="Posee otros ingresos"
                optionvalue="id"
                optionlabel="descripcion"
                options={esEmpleados}
                component={RadioGroupAdapter}
              />              
            </Grid>
            {
              values && values.otroIngreso && values.otroIngreso === "true"
              ? (
                <>
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
                </>
              )
              : null
            }
          </Grid>        
      </Box>
    </>
    )
}

export default SociosActividadLaboral
