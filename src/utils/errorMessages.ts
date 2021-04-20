export const errors = {            
    min: (value: any) => ({
        min: {
            value,
            message: `Debe contener al menos ${value} caracteres`
        }                        
    }),
    max: (value: any) => ({
        max: {
            value,
            message: `Debe contener como máximo ${value} caracteres`
        }
    }),            
    required: (value: any = true) => ({required: {value, message: 'Es requerido'}}),        
    // maxLength: () => 'Es muy largo',
};

export type errorsType = typeof errors;

export type validationProps = any[];



export const validation = (array: validationProps) => {
    
    return array.reduce((previous, actual) => {          
        return {...previous, ...actual}
    }, {} as any)
}
  