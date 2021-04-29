import { useState } from "react";

const useApiParams = () => {
    const [params, changeParams] = useState({searchQuery: '', pageSize: 10, pageNumber: 1});

    const setParams = (value: any, name: 'searchQuery' | 'pageSize' | 'pageNumber') => {
        changeParams({...params, [name]: value as any});
    }

    return {params, setParams};
}

export default useApiParams;