import { TextField, TextFieldProps } from '@material-ui/core'
import React, { useImperativeHandle } from 'react'
import { FieldValues, RegisterOptions, useController } from 'react-hook-form'

type FieldProps = FieldValues & TextFieldProps & {
    rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
}

const Field = React.forwardRef(({control, name, rules, ...inputProps}: FieldProps, ref2: any) => {

    const {
        field: {ref, onChange},
        fieldState: {invalid, isTouched, isDirty, error},
        formState: {touchedFields, dirtyFields}
    } = useController({
        name: name || '',
        control,
        rules: rules,
        defaultValue: inputProps.defaultValue
    })

    // useImperativeHandle(ref2, () => ({

    //     focus() {
    //       console.log(ref?.focus() as any);
    //     }
    
    // }));

    const focus = () => {
        console.log('focus')
    }

    return (        
        <TextField 
            onChange={onChange} 
            {...inputProps} 
            inputRef={ref2}             
            error={invalid}
            helperText={error?.message}

        />        
    )
})

export default Field
