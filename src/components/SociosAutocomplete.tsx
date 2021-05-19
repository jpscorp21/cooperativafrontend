import { Autocomplete, Box, createFilterOptions, TextField, Typography } from '@material-ui/core';
import { useDebounce } from 'ahooks';
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { SociosAPI } from '../api/services/SociosAPI';
import { ISocio } from '../models/socio-model';

type SociosAutocompleteProps = {
    onChange?(item: any): void;
    fullWidth?: boolean;
}

const SociosAutocomplete = ({onChange, fullWidth = true}: SociosAutocompleteProps) => {

    const [searchText, setSearchText] = useState('');

    const searchQuery = useDebounce(searchText, {wait: 350});

    const {data: socios} = useQuery(
        ['socio', searchQuery], 
        () => SociosAPI.getAll({searchQuery, pageSize: 50, pageNumber: 1}),
        {
          keepPreviousData: true
        }

    );

    return (
        <Autocomplete 
          disablePortal
          id="socio-autocomplete"
          options={socios?.items || []}  
          fullWidth={fullWidth}
          sx={{bgcolor: 'white', mr: 1}}
          size="small"         
          freeSolo                                
          onChange={(_, value: any, reason) => {
            if (onChange) {
                onChange(value);
            }
          }}           
          filterOptions={createFilterOptions({
            matchFrom: 'any',
            ignoreAccents: true,
            stringify: (option: any) => option.cedula + ' ' + option.nombre + ' ' + option.apellido + ' ' + option.codigo
          })}
          getOptionSelected={(option, value) => option.id === value.id}
          inputMode="text"
          getOptionLabel={(option: ISocio) => option.nombre + ' ' + option.apellido}
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
          renderInput={(params) => <TextField {...params} label="Socio" onChange={(event) => setSearchText(event.target.value)} />}
        />
    )
}

export default SociosAutocomplete
