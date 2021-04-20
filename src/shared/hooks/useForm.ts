import { Reducer, useReducer } from "react";

type Action<T> =
| {
    type: 'SET_FIELD',
    payload: {name: string, value: any}
}  
| {
    type: 'RESET',
    payload: T
}

const formReducer = <T>(state: T, action: Action<T>) => {
    switch(action.type) {
        case 'SET_FIELD': {
            return {
                ...state,
                [action.payload.name]: action.payload.value 
            }
        }

        case 'RESET': {
            return {
                ...state,                
                ...action.payload            
            }
        }

        default: 
            return state;

    }    
}

const useForm = <T>(initialValues: T, options: any) => {

    const {onSubmit} = options;

    const [values, dispatch] = useReducer<Reducer<T, Action<T>>>(formReducer, {...initialValues});

    const handleChange = (event: any) => {
        dispatch({type: 'SET_FIELD', payload: {            
            name: event.target.name,
            value: event.target.value,
        }})        
    }

    const reset = () => {
        dispatch({type: 'RESET', payload: initialValues})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
        if (!e) {
            return;
        }
        e.preventDefault();
        onSubmit();                            
    }  

    return {values, handleChange, handleSubmit, reset}
}

export default useForm;