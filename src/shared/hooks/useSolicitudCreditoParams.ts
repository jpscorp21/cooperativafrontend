import { useCallback, useState } from "react";

const useSolicitudCreditoParams = () => {
    const [params, changeParams] = useState({searchQuery: '', pageSize: 10, pageNumber: 1, estadoSolicitud: 'PEN'});

    const setParams = (value: any, name: 'searchQuery' | 'pageSize' | 'pageNumber' | 'estadoSolicitud') => {
        changeParams({...params, [name]: value as any});
    }

    const resetParams = useCallback(() => {
        changeParams({searchQuery: '', pageSize: 10, pageNumber: 1, estadoSolicitud: 'PEN'})
    }, [])

    return {params, setParams, resetParams};
}

export default useSolicitudCreditoParams;