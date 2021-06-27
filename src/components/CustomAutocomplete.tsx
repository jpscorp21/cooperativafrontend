import { Autocomplete, Box, createFilterOptions, TextField, Typography } from '@material-ui/core';

type CustomAutocompleteProps = {
    options: any[],
    optionLabel: string,
    optionSelected: string,
    filterOptions?(option: any): string,
    onChange?(value: any, reason?: string): void
    onInputChange?(value: any, reason?: string): void
    fullWidth?: boolean;
    value: any;
    inputValue?: any;
    name?: string;
    label?: string;
    placeholder?: string;
    autoFocus?: boolean;
    multiple?: boolean;
    disabled?: boolean;
    renderOption?(props: any, value: any): React.ReactNode;
}

const CustomAutocomplete = (
    {
        options, 
        optionLabel = '',         
        filterOptions, 
        onChange, 
        onInputChange,
        fullWidth = true, 
        autoFocus = false, 
        multiple = false,
        value,
        // inputValue = '',
        placeholder = "",
        name = "",
        label = "",
        renderOption,
        disabled = false
    }: CustomAutocompleteProps) => {
    return (
        <Autocomplete        
            multiple={multiple} 
            disablePortal           
            options={options}
            size="small"
            fullWidth={fullWidth}
            freeSolo                                    
            onChange={(_, value, reason) => {
                if (onChange && typeof onChange === 'function') {
                    onChange(value, reason)
                }                     
            }}
            value={value}                        
            filterOptions={createFilterOptions({
                matchFrom: 'any',
                ignoreAccents: true,
                stringify: filterOptions ? filterOptions : (option: any) => option[optionLabel]
            })}
            inputMode="text"
            onInputChange={(event: any) => {
                if (onInputChange) {
                    onInputChange(event?.target?.value as any || '');
                }
            }}            
            getOptionLabel={(option) => option[optionLabel]}
            // getOptionSelected={(option, value) => option[optionSelected] === value[optionSelected]}
            renderOption={(props: any, option: any) => (
                renderOption 
                ? renderOption(props, option)
                : (
                    <Box {...props}>              
                        <Typography component="p">{option[optionLabel]}</Typography>                    
                    </Box>
                )
            )}     
            disabled={disabled}          
            sx={{maxWidth: '100%'}}         
            renderInput={(params) => (
                <TextField 
                    {...params}
                    variant="outlined"
                    size="small"
                    name={name}
                    fullWidth={fullWidth}
                    autoFocus={autoFocus}
                    label={label}
                    sx={{background: 'white', maxWidth: '100%'}}
                    placeholder={placeholder}
                />
            )}
        />
    )
}

export default CustomAutocomplete
