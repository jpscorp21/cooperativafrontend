import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { Route, RouteComponentProps, RouteProps, useParams } from 'react-router'
import { SociosAPI } from '../api/services/SociosAPI';
import SociosForm from '../containers/Socios/SociosForm';

const SociosDataRoute = (route: RouteComponentProps<{id: string}>) => {
    
     const {data} = useQuery(['socios', route.match.params.id], () => SociosAPI.getById(route.match.params.id))     

    return <SociosForm />        
    
}

export default SociosDataRoute
