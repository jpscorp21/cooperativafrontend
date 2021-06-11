import { Grid, Paper } from '@material-ui/core';
import React, { useState } from 'react'
import { Field, useForm, useFormState } from 'react-final-form';
import { useQuery } from 'react-query';
import { SociosAPI } from '../../api/services/SociosAPI';
import DatePickerAdapter from '../../components/control/DatePickerAdapter';
import TextFieldAdapter from '../../components/control/TextFieldAdapter';
import SociosAutocomplete from '../../components/SociosAutocomplete';
import { ISocio } from '../../models/socio-model';
import { required } from '../../utils/errorMessages';
import useSearchText from '../../utils/hooks/useSearchText';

const CobranzasInnerForm = () => {

    const [searchQuery, setSearchText] = useSearchText();  
    const [socioId, setSocioId] = useState<any>(null)

    const form = useForm();
    const {values} = useFormState();

    const {data: socios} = useQuery(
        ['socio', searchQuery], 
        () => SociosAPI.getAll({searchQuery, pageSize: 50, pageNumber: 1}),
        {
          keepPreviousData: true,             
        }
    );

    const handleChangeSocio = (socio: ISocio) => {
        if (socio) {          
            console.log(socio);            
            form.change('socio', socio)                                                                                       
            form.change('socioId', socio.id)            
            setSocioId(socio.id);            
        }
    }

    return (
        <>
            <Paper sx={{p: 2}}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Field 
                            fullWidth 
                            label="Nro Factura" 
                            name="nroFactura" 
                            component={TextFieldAdapter} 
                            validate={required} 
                        />                        
                    </Grid>                        
                    <Grid item xs={6}>
                        <Field 
                            fullWidth 
                            label="Fecha" 
                            name="fecha" 
                            validate={required} 
                            component={DatePickerAdapter}  
                        />                   
                    </Grid>
                    <Grid item xs={12} mt={1}>
                        <Field
                            validate={required}
                            name="socio" 
                            render={({input}) => (
                                <SociosAutocomplete
                                    value={input.value}  
                                    autoFocus={true}                                                     
                                    name="socio"                                                        
                                    onChange={handleChangeSocio}
                                />         
                            )}
                        />                                                                                
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default CobranzasInnerForm
