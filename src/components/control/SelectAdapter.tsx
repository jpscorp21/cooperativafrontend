import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@material-ui/core";

const SelectAdapter = ({input, meta, ...rest}: any) => {    
  
    const menuItems = rest.options ? rest.options.map((item: any, index: number) => (
        <MenuItem value={item[rest.optionvalue]} key={index}>{item[rest.optionlabel]}</MenuItem>
    )) : null;

    return (
        
        <FormControl error={meta.error && meta.touched} fullWidth={rest.fullWidth} variant="outlined" size="small">
            <InputLabel id="demo-simple-select-label">{rest.label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"                                
                {...input}
                {...rest}
                size="small"
                error={meta.error && meta.touched}                 
            >                
                {menuItems}
            </Select>
            <FormHelperText>{meta.error && meta.touched ? meta.error : ''}</FormHelperText>
        </FormControl>                      
    )
}

export default SelectAdapter;