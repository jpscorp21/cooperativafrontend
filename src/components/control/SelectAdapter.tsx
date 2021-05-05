import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const SelectAdapter = ({input, meta, ...rest}: any) => {    
  
    const menuItems = rest.options ? rest.options.map((item: any, index: number) => (
        <MenuItem value={item[rest.optionvalue]} key={index}>{item[rest.optionlabel]}</MenuItem>
    )) : null;

    return (
        
        <FormControl fullWidth={rest.fullWidth} variant="outlined" size="small">
            <InputLabel id="demo-simple-select-label">{rest.label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"                                
                {...input}
                {...rest}
                size="small"
            >                
                {menuItems}
            </Select>
        </FormControl>                      
    )
}

export default SelectAdapter;