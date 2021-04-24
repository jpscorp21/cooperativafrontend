import { useMemo } from "react"

const useArrayMemo = (data: any[]) => {
    
    return useMemo(() => {        
        return data;
        // eslint-disable-next-line
    }, []);
}

export default useArrayMemo;