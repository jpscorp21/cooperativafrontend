import { useMutation, useQuery } from "react-query";
import queryClient from "../../config/queryClient";
import useApiParams from "./useApiParams";

const useBackend = (API: any) => {

    const {params, setParams} = useApiParams();  

    const {data} = useQuery([API.key, params], () => API.getAll(params), {keepPreviousData: true});                         
    const create = useMutation(API.create);
    const update = useMutation((params: any) => API.update(params.body, params.id));
    const remove = useMutation(API.remove);

    const refresh = () => {
        queryClient.invalidateQueries(API.key);
    }

    return {data, create, update, remove, setParams, params, key: API.key, refresh}
}

export default useBackend;