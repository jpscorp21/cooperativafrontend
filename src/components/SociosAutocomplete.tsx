import { Box, Typography } from '@material-ui/core';
import { useQuery } from 'react-query'
import { SociosAPI } from '../api/services/SociosAPI';
import { ISocio } from '../models/socio-model';
import useSearchText from '../utils/hooks/useSearchText';
import CustomAutocomplete from './CustomAutocomplete';

type SociosAutocompleteProps = {
    onChange?(item: any): void;
    fullWidth?: boolean;
    value: any;
    name?: string;
    autoFocus?: boolean;
    disabled?: boolean;
}

const SociosAutocomplete = ({onChange, fullWidth = true, value, name = '', autoFocus = false, disabled = false}: SociosAutocompleteProps) => {

    const [searchQuery, setSearchText] = useSearchText();    

    const {data: socios} = useQuery(
        ['socio', searchQuery], 
        () => SociosAPI.getAll({searchQuery, pageSize: 50, pageNumber: 1}),
        {
          keepPreviousData: true
        }
    );

    return (      
        <CustomAutocomplete                     
          options={socios?.items || []}   
          fullWidth={fullWidth}                                                           
          onChange={onChange}
          value={value}      
          autoFocus={autoFocus}
          disabled={disabled}  
          label={"Socio"}
          optionLabel="nombre_completo"          
          optionSelected="id"
          filterOptions={(option: any) => option.cedula + ' ' + option.nombre + ' ' + option.apellido + ' ' + option.codigo}                              
          renderOption={(props: any, option: ISocio) => (
            <Box
              {...props}
            >              
              <Typography component="p">
                  <b>{option.nombre + ' ' + option.apellido}</b><br />
                  <span style={{color: '#777'}}>N°: {option?.codigo}</span><br />
                  <span style={{color: '#777'}}>Documento: {option.cedula}</span>
              </Typography>
              
            </Box>
          )}
          onInputChange={setSearchText}
                 
        />
    )
}

export default SociosAutocomplete
